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
];
