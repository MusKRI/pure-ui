import { Package, type LucideIcon } from "lucide-react";
import { SVGProps } from "react";

import {
  BunIcon,
  NpmIcon,
  PnpmIcon,
  YarnIcon,
} from "@/core/icons/extension-file-icons";
import { getAppUrl } from "@/lib/env";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

/**
 * Generates installation command for a registry item based on package manager
 * @param registryItemRestPath - Rest path of the registry item (e.g., "pure-ui/components/button-shadcn")
 * @param tool - Package manager tool to use
 * @returns Installation command string
 */
export function getRegistryInstallationCommand(
  registryItemRestPath: string,
  tool: PackageManager
): string {
  if (!registryItemRestPath) throw new Error("Registry item name is required");

  const baseUrl = `${getAppUrl()}/r`;
  const registryUrl = `${baseUrl}/${registryItemRestPath}`;

  switch (tool) {
    case "npm":
      return `npx shadcn@latest add "${registryUrl}"`;
    case "pnpm":
      return `pnpm dlx shadcn@latest add "${registryUrl}"`;
    case "yarn":
      return `npx shadcn@latest add "${registryUrl}"`;
    case "bun":
      return `bunx --bun shadcn@latest add "${registryUrl}"`;
    default:
      throw new Error(`Unsupported package manager: ${tool}`);
  }
}

/**
 * Generates dependency installation command based on package manager
 * @param dependencies - Array of package names to install
 * @param tool - Package manager tool to use
 * @returns Installation command string
 */
export function getDependencyInstallCommand(
  dependencies: string[],
  tool: PackageManager
): string {
  if (!dependencies.length) {
    return "";
  }

  const depsString = dependencies.join(" ");

  switch (tool) {
    case "npm":
      return `npm install ${depsString}`;
    case "pnpm":
      return `pnpm add ${depsString}`;
    case "yarn":
      return `yarn add ${depsString}`;
    case "bun":
      return `bun add ${depsString}`;
    default:
      throw new Error(`Unsupported package manager: ${tool}`);
  }
}

/**
 * Gets the appropriate icon for a package manager tool
 * @param tool - Package manager name
 * @returns Lucide icon component
 */
export function getToolIcon(
  tool: string
): LucideIcon | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element) {
  switch (tool) {
    case "npm":
      return NpmIcon; // npm package manager
    case "pnpm":
      return PnpmIcon; // Fast package manager
    case "yarn":
      return YarnIcon; // Yarn package manager
    case "bun":
      return BunIcon; // Bun runtime/package manager
    default:
      return Package; // Default package icon
  }
}

/**
 * Gets all available package managers with their display information
 * @returns Array of package manager objects with name, icon, and display name
 */
export function getAvailablePackageManagers() {
  const managers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

  return managers.map((tool) => ({
    name: tool,
    icon: getToolIcon(tool),
    displayName: tool.toUpperCase(),
    command: (registryItemName: string) =>
      getRegistryInstallationCommand(registryItemName, tool),
  }));
}
