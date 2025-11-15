import { type RegistryItem } from "@/lib/registry/schemas";

export const pureUIShadcnComponents: RegistryItem[] = [
  // Accordion
  {
    name: "accordion",
    type: "registry:ui",
    title: "Accordion",
    description: "A customizable button component",
    files: [
      {
        path: "ui/accordion/index.tsx",
        type: "registry:ui",
        target: "components/ui/accordion.tsx",
      },
    ],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "@base-ui-components/react",
      "motion",
    ],
    registryDependencies: ["classes"],
  },
  // Button
  {
    name: "button",
    type: "registry:ui",
    title: "Button",
    description: "A customizable button component",
    files: [
      {
        path: "ui/button/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot",
    ],
  },
  // Card
  {
    name: "card",
    type: "registry:ui",
    title: "Card",
    description: "A customizable card component",
    files: [
      {
        path: "ui/card/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@radix-ui/react-slot"],
  },
  // Checkbox
  {
    name: "checkbox",
    type: "registry:ui",
    title: "Checkbox",
    description: "A customizable checkbox component",
    files: [
      {
        path: "ui/checkbox/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@base-ui-components/react",
    ],
  },
  // Dialog
  {
    name: "dialog",
    type: "registry:ui",
    title: "Dialog",
    description: "A customizable dialog component",
    files: [
      {
        path: "ui/dialog/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@base-ui-components/react",
      "motion",
    ],
  },
  // Input
  {
    name: "input",
    type: "registry:ui",
    title: "Input",
    description: "A customizable input component",
    files: [
      {
        path: "ui/input/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "tailwind-variants"],
  },
  // Input Group
  {
    name: "input-group",
    type: "registry:ui",
    title: "Input Group",
    description: "A customizable input group component",
    files: [
      {
        path: "ui/input-group/index.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["input", "textarea"],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "tailwind-variants",
      "@base-ui-components/react",
    ],
  },
  // Input OTP
  {
    name: "input-otp",
    type: "registry:ui",
    title: "Input OTP",
    description: "A customizable input OTP component",
    files: [
      {
        path: "ui/input-otp/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "input-otp",
      "motion",
    ],
  },
  // Label
  {
    name: "label",
    type: "registry:ui",
    title: "Label",
    description: "A customizable label component",
    files: [
      {
        path: "ui/label/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["clsx", "tailwind-merge"],
  },
  // Menu
  {
    name: "menu",
    type: "registry:ui",
    title: "Menu",
    description: "A customizable menu component",
    files: [
      {
        path: "ui/menu/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "@base-ui-components/react",
      "motion",
      "clsx",
      "tailwind-merge",
    ],
  },
  // Popover
  {
    name: "popover",
    type: "registry:ui",
    title: "Popover",
    description: "A customizable popover component",
    files: [
      {
        path: "ui/popover/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "@base-ui-components/react",
      "motion",
      "clsx",
      "tailwind-merge",
    ],
  },
  // Select
  {
    name: "select",
    type: "registry:ui",
    title: "Select",
    description: "A customizable select component",
    files: [
      {
        path: "ui/select/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "@base-ui-components/react",
      "motion",
      "clsx",
      "tailwind-merge",
    ],
  },
  // Separator
  {
    name: "separator",
    type: "registry:ui",
    title: "Separator",
    description: "A customizable separator component",
    files: [
      {
        path: "ui/separator/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["@base-ui-components/react", "clsx", "tailwind-merge"],
  },
  // Switch
  {
    name: "switch",
    type: "registry:ui",
    title: "Switch",
    description: "A customizable switch component",
    files: [
      {
        path: "ui/switch/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "tailwind-variants",
      "tailwind-merge",
      "@base-ui-components/react",
    ],
  },
  {
    name: "spinner",
    type: "registry:ui",
    title: "Spinner",
    description: "A customizable spinner component",
    files: [
      {
        path: "ui/spinner/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["tailwind-merge", "clsx"],
  },
  // Textarea
  {
    name: "textarea",
    type: "registry:ui",
    title: "Textarea",
    description: "A customizable textarea component",
    files: [
      {
        path: "ui/textarea/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["@base-ui-components/react", "clsx", "tailwind-merge"],
  },
  // Tooltip
  {
    name: "tooltip",
    type: "registry:ui",
    title: "Tooltip",
    description: "A customizable tooltip component",
    files: [
      {
        path: "ui/tooltip/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: [
      "@base-ui-components/react",
      "motion",
      "clsx",
      "tailwind-merge",
    ],
  },
];
