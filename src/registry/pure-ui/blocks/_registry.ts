import { type Registry } from "shadcn/schema";

export const pureUIBlocks: Registry["items"] = [
  // Calendar
  {
    name: "calendar-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-block.tsx",
      },
    ],
  },
  {
    name: "calendar-multiple-months-single-selection-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-2-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-2-block.tsx",
      },
    ],
  },
  {
    name: "calendar-multiple-months-multiple-selection-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-3-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-3-block.tsx",
      },
    ],
  },
  {
    name: "calendar-multiple-months-range-selection-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-4-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-4-block.tsx",
      },
    ],
  },
  {
    name: "calendar-range-selection-minimum-days-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-5-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-5-block.tsx",
      },
    ],
  },
  {
    name: "calendar-range-selection-minimum-and-maximum-days-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-6-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-6-block.tsx",
      },
    ],
  },
  {
    name: "calendar-disabled-dates-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-7-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-7-block.tsx",
      },
    ],
  },
  {
    name: "calendar-disabled-weekends-block",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar/calendar-8-block.tsx",
        type: "registry:file",
        target: "blocks/calendar/calendar-8-block.tsx",
      },
    ],
  },
];
