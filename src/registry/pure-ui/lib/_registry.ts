import { type Registry } from "shadcn/schema";

export const pureUILib: Registry["items"] = [
  {
    name: "classes",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/classes.ts",
        type: "registry:lib",
      },
    ],
  },
];
