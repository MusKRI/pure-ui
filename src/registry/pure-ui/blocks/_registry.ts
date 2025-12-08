import { type Registry } from "shadcn/schema";

export const pureUIBlocks: Registry["items"] = [
  // Calendar
  {
    name: "calendar-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-block/index.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-block.tsx",
      },
      {
        path: "blocks/calendar/calendar-block/test-check.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-block/test-check.tsx",
      },
    ],
  },
];
