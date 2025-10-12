import { Effect, pipe, Array as EffectArray, Option } from "effect";
import { highlightCode } from "@/lib/mdx/code-highlighter";
import {
  getRegistryInstallationCommand,
  type PackageManager,
} from "@/lib/mdx/package-managers";

export interface InstallationTab {
  name: string; // npm, pnpm, yarn, bun
  content: string;
  rawContent: string;
  language?: string;
}

export interface InstallationCommandsProps {
  type?: "package-installation" | "registry-installation";
  registryPath?: string;
  npmCommand?: string;
  pnpmCommand?: string;
  yarnCommand?: string;
  bunCommand?: string;
}

/**
 * Processes installation commands props and generates array of InstallationTab
 * using Effect-TS for better error handling and composition
 */
export const processInstallationCommands = (
  props: InstallationCommandsProps
): Effect.Effect<InstallationTab[], never> => {
  return pipe(
    Effect.succeed(props),
    Effect.flatMap((props) => {
      const {
        type,
        registryPath,
        npmCommand,
        pnpmCommand,
        yarnCommand,
        bunCommand,
      } = props;

      // Handle registry-installation type
      if (type === "registry-installation") {
        return pipe(
          Option.fromNullable(registryPath),
          Option.filter((path) => path.trim() !== ""),
          Option.match({
            onNone: () => Effect.succeed<InstallationTab[]>([]),
            onSome: (path) => generateRegistryInstallationTabs(path),
          })
        );
      }

      // Handle package-installation type
      if (type === "package-installation") {
        return generatePackageInstallationTabs({
          npmCommand,
          pnpmCommand,
          yarnCommand,
          bunCommand,
        });
      }

      // Default case - return empty array
      return Effect.succeed<InstallationTab[]>([]);
    })
  );
};

/**
 * Generates installation tabs for registry-based installations
 */
const generateRegistryInstallationTabs = (
  registryPath: string
): Effect.Effect<InstallationTab[], never> => {
  const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

  return pipe(
    packageManagers,
    EffectArray.map((manager) =>
      pipe(
        Effect.try(() => getRegistryInstallationCommand(registryPath, manager)),
        Effect.flatMap((command) =>
          pipe(
            Effect.promise(() => highlightCode(command, { lang: "bash" })),
            Effect.map((highlightedContent) => ({
              name: manager,
              // icon: getToolIcon(manager),
              content: highlightedContent,
              rawContent: command,
              language: "bash",
            })),
            Effect.catchAll(() =>
              Effect.succeed({
                name: manager,
                // icon: getToolIcon(manager),
                content: command,
                rawContent: command,
                language: "bash",
              })
            )
          )
        ),
        Effect.catchAll(() =>
          Effect.succeed({
            name: manager,
            // icon: getToolIcon(manager),
            content: "",
            rawContent: "",
            language: "bash",
          })
        )
      )
    ),
    Effect.all,
    Effect.map(EffectArray.filter((tab) => tab.rawContent !== ""))
  );
};

/**
 * Generates installation tabs for package-based installations
 */
const generatePackageInstallationTabs = (commands: {
  npmCommand?: string;
  pnpmCommand?: string;
  yarnCommand?: string;
  bunCommand?: string;
}): Effect.Effect<InstallationTab[], never> => {
  const { npmCommand, pnpmCommand, yarnCommand, bunCommand } = commands;

  const commandMap: Array<{
    manager: PackageManager;
    command?: string;
  }> = [
    { manager: "npm", command: npmCommand },
    { manager: "pnpm", command: pnpmCommand },
    { manager: "yarn", command: yarnCommand },
    { manager: "bun", command: bunCommand },
  ];

  return pipe(
    commandMap,
    EffectArray.filter(({ command }) => Boolean(command?.trim())),
    EffectArray.map(({ manager, command }) =>
      pipe(
        Effect.promise(() => highlightCode(command!, { lang: "bash" })),
        Effect.map((highlightedContent) => ({
          name: manager,
          // icon: getToolIcon(manager),
          content: highlightedContent,
          rawContent: command!,
          language: "bash",
        })),
        Effect.catchAll(() =>
          Effect.succeed({
            name: manager,
            // icon: getToolIcon(manager),
            content: command!,
            rawContent: command!,
            language: "bash",
          })
        )
      )
    ),
    Effect.all
  );
};
