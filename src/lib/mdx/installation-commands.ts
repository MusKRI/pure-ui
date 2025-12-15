import { Effect, Array as EffectArray, Option } from "effect";
import { highlightCode } from "@/lib/mdx/code-highlighter";
import {
  getNamespacedRegistryInstallationCommand,
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
 */
export const processInstallationCommands = (
  props: InstallationCommandsProps
): Effect.Effect<InstallationTab[], never> =>
  Effect.gen(function* () {
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
      const pathOption = Option.fromNullable(registryPath).pipe(
        Option.filter((path) => path.trim() !== "")
      );

      if (Option.isNone(pathOption)) {
        return [];
      }

      return yield* generateRegistryInstallationTabs(pathOption.value);
    }

    // Handle package-installation type
    if (type === "package-installation") {
      return yield* generatePackageInstallationTabs({
        npmCommand,
        pnpmCommand,
        yarnCommand,
        bunCommand,
      });
    }

    // Default case - return empty array
    return [];
  });

/**
 * Generates installation tabs for registry-based installations
 */
const generateRegistryInstallationTabs = (
  registryPath: string
): Effect.Effect<InstallationTab[], never> =>
  Effect.gen(function* () {
    const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

    // Process all package managers in parallel with controlled concurrency
    const tabs = yield* Effect.all(
      packageManagers.map((manager) =>
        Effect.gen(function* () {
          // Get the installation command
          let command: string;
          try {
            command = getNamespacedRegistryInstallationCommand(
              registryPath,
              manager
            );
          } catch {
            return {
              name: manager,
              content: "",
              rawContent: "",
              language: "bash" as const,
            };
          }

          // Try to highlight the code
          let highlightedContent: string;
          try {
            highlightedContent = yield* Effect.promise(() =>
              highlightCode(command, { lang: "bash" })
            );
          } catch {
            // Fallback to unhighlighted command if highlighting fails
            highlightedContent = command;
          }

          return {
            name: manager,
            content: highlightedContent,
            rawContent: command,
            language: "bash" as const,
          };
        })
      ),
      { concurrency: 5 } // Limit concurrency to prevent resource exhaustion
    );

    // Filter out tabs with empty content
    return tabs.filter((tab) => tab.rawContent !== "");
  });

/**
 * Generates installation tabs for package-based installations
 */
const generatePackageInstallationTabs = (commands: {
  npmCommand?: string;
  pnpmCommand?: string;
  yarnCommand?: string;
  bunCommand?: string;
}): Effect.Effect<InstallationTab[], never> =>
  Effect.gen(function* () {
    const { npmCommand, pnpmCommand, yarnCommand, bunCommand } = commands;

    // Filter to only commands that are provided and non-empty
    const commandMap = [
      { manager: "npm" as PackageManager, command: npmCommand },
      { manager: "pnpm" as PackageManager, command: pnpmCommand },
      { manager: "yarn" as PackageManager, command: yarnCommand },
      { manager: "bun" as PackageManager, command: bunCommand },
    ]
      .filter(({ command }) => Boolean(command?.trim()))
      .map(({ manager, command }) => ({
        manager,
        command: command!,
      })) as Array<{
      manager: PackageManager;
      command: string;
    }>;

    // Process all commands in parallel with controlled concurrency
    const tabs = yield* Effect.all(
      commandMap.map(({ manager, command }) =>
        Effect.gen(function* () {
          // Try to highlight the code
          let highlightedContent: string;
          try {
            highlightedContent = yield* Effect.promise(() =>
              highlightCode(command, { lang: "bash" })
            );
          } catch {
            // Fallback to unhighlighted command if highlighting fails
            highlightedContent = command;
          }

          return {
            name: manager,
            content: highlightedContent,
            rawContent: command,
            language: "bash" as const,
          };
        })
      ),
      { concurrency: 5 } // Limit concurrency to prevent resource exhaustion
    );

    return tabs;
  });
