import { type RegistryItem } from "@/lib/registry/schemas";

export const pureUILib: RegistryItem[] = [
  {
    name: "classes",
    type: "registry:lib",
    title: "Classes",
    description: "util of classes for the UI",
    files: [
      {
        path: "lib/classes.ts",
        type: "registry:lib",
        target: "lib/classes.ts",
      },
    ],
    dependencies: ["clsx", "tailwind-merge"],
  },
];
