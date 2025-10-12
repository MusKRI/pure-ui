import { Effect } from "effect";
import {
  InstallationCommandsProps,
  processInstallationCommands,
} from "@/lib/mdx/installation-commands";
import { InstallationCommandsClient } from "./installation-commands.client";

export async function InstallationCommands({
  type,
  registryPath,
  npmCommand,
  pnpmCommand,
  yarnCommand,
  bunCommand,
}: InstallationCommandsProps) {
  const installationTabs = await Effect.runPromise(
    processInstallationCommands({
      type,
      registryPath,
      npmCommand,
      pnpmCommand,
      yarnCommand,
      bunCommand,
    })
  );

  return (
    <InstallationCommandsClient
      installationTabs={installationTabs}
      defaultTab={"npm"}
    />
  );
}
