import { type Registry } from "shadcn/schema";

export const pureUIComponents: Registry["items"] = [
  // Accordion
  {
    name: "accordion",
    type: "registry:ui",
    title: "Accordion",
    description: "A customizable accordion component",
    files: [
      {
        path: "ui/accordion/index.tsx",
        type: "registry:ui",
        target: "components/ui/accordion.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@base-ui/react", "motion"],
  },

  // Avatar
  {
    name: "avatar",
    type: "registry:ui",
    title: "Avatar",
    description: "An easily stylable avatar component.",
    files: [
      {
        path: "ui/avatar/index.tsx",
        type: "registry:ui",
        target: "components/ui/avatar.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@base-ui/react"],
  },

  // Badge
  {
    name: "badge",
    type: "registry:ui",
    title: "Badge",
    description: "An easily stylable badge component.",
    files: [
      {
        path: "ui/badge/index.tsx",
        type: "registry:ui",
        target: "components/ui/badge.tsx",
      },
    ],
    dependencies: [
      "tailwind-variants",
      "clsx",
      "tailwind-merge",
      "@base-ui/react",
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
        target: "components/ui/button.tsx",
      },
    ],
    dependencies: [
      "tailwind-variants",
      "clsx",
      "tailwind-merge",
      "@base-ui/react",
    ],
  },

  // Button Group
  {
    name: "button-group",
    type: "registry:ui",
    title: "Button Group",
    description: "A customizable button group component",
    files: [
      {
        path: "ui/button-group/index.tsx",
        type: "registry:ui",
        target: "components/ui/button-group.tsx",
      },
    ],
    registryDependencies: ["separator"],
    dependencies: [
      "tailwind-variants",
      "clsx",
      "tailwind-merge",
      "@base-ui/react",
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
        target: "components/ui/card.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge"],
  },
  // Calendar
  {
    name: "calendar",
    type: "registry:ui",
    title: "Calendar",
    description: "A customizable calendar component",
    files: [
      {
        path: "ui/calendar/index.tsx",
        type: "registry:ui",
        target: "components/ui/calendar.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "react-day-picker"],
    css: {
      "@keyframes rdp-slide_in_left": {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      "@keyframes rdp-slide_in_right": {
        "0%": {
          transform: "translateX(100%)",
        },
        "100%": {
          transform: "translateX(0)",
        },
      },
      "@keyframes rdp-slide_out_left": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
      "@keyframes rdp-slide_out_right": {
        "0%": {
          transform: "translateX(0)",
        },
        "100%": {
          transform: "translateX(100%)",
        },
      },
      "@keyframes rdp-fade_in": {
        from: {
          opacity: "0",
        },
        to: {
          opacity: "1",
        },
      },
      "@keyframes rdp-fade_out": {
        from: {
          opacity: "1",
        },
        to: {
          opacity: "0",
        },
      },
      ".rdp-weeks_before_enter": {
        animation:
          "rdp-slide_in_left var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-weeks_before_exit": {
        animation:
          "rdp-slide_out_left var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-weeks_after_enter": {
        animation:
          "rdp-slide_in_right var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-weeks_after_exit": {
        animation:
          "rdp-slide_out_right var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      '.rdp-root[dir="rtl"] .rdp-weeks_after_enter': {
        animation:
          "rdp-slide_in_left var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      '.rdp-root[dir="rtl"] .rdp-weeks_before_exit': {
        animation:
          "rdp-slide_out_right var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      '.rdp-root[dir="rtl"] .rdp-weeks_before_enter': {
        animation:
          "rdp-slide_in_right var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      '.rdp-root[dir="rtl"] .rdp-weeks_after_exit': {
        animation:
          "rdp-slide_out_left var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-caption_after_enter": {
        animation:
          "rdp-fade_in var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-caption_after_exit": {
        animation:
          "rdp-fade_out var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-caption_before_enter": {
        animation:
          "rdp-fade_in var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      ".rdp-caption_before_exit": {
        animation:
          "rdp-fade_out var(--rdp-animation_duration, 0.3s) var(--rdp-animation_timing, cubic-bezier(0.4, 0, 0.2, 1)) forwards",
      },
      "@media (prefers-reduced-motion: reduce)": {
        ".rdp-weeks_before_enter, .rdp-weeks_before_exit, .rdp-weeks_after_enter, .rdp-weeks_after_exit, .rdp-caption_after_enter, .rdp-caption_after_exit, .rdp-caption_before_enter, .rdp-caption_before_exit":
          {
            animation: "none",
          },
      },
    },
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
        target: "components/ui/checkbox.tsx",
      },
    ],
    dependencies: [
      "tailwind-variants",
      "clsx",
      "tailwind-merge",
      "@base-ui/react",
    ],
  },
  // Collapsible
  {
    name: "collapsible",
    type: "registry:ui",
    title: "Collapsible",
    description: "A customizable collapsible component",
    files: [
      {
        path: "ui/collapsible/index.tsx",
        type: "registry:ui",
        target: "components/ui/collapsible.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@base-ui/react"],
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
        target: "components/ui/dialog.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@base-ui/react", "lucide-react"],
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
        target: "components/ui/input.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@base-ui/react"],
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
        target: "components/ui/input-group.tsx",
      },
    ],
    registryDependencies: ["input", "textarea", "button"],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "tailwind-variants",
      "@base-ui/react",
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
        target: "components/ui/input-otp.tsx",
      },
    ],
    dependencies: [
      "tailwind-variants",
      "clsx",
      "tailwind-merge",
      "input-otp",
      "motion",
    ],
  },

  // Kbd
  {
    name: "kbd",
    type: "registry:ui",
    title: "Kbd",
    description: "A customizable kbd component",
    files: [
      {
        path: "ui/kbd/index.tsx",
        type: "registry:ui",
        target: "components/ui/kbd.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge"],
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
        target: "components/ui/label.tsx",
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
        target: "components/ui/menu.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
  },
  // Number Field
  {
    name: "number-field",
    type: "registry:ui",
    title: "Number Field",
    description: "A customizable number field component",
    files: [
      {
        path: "ui/number-field/index.tsx",
        type: "registry:ui",
        target: "components/ui/number-field.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
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
        target: "components/ui/popover.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
  },

  // Scroll Area
  {
    name: "scroll-area",
    type: "registry:ui",
    title: "Scroll Area",
    description: "A customizable scroll area component",
    files: [
      {
        path: "ui/scroll-area/index.tsx",
        type: "registry:ui",
        target: "components/ui/scroll-area.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
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
        target: "components/ui/select.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge", "lucide-react"],
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
        target: "components/ui/separator.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
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
        target: "components/ui/switch.tsx",
      },
    ],
    dependencies: ["clsx", "tailwind-merge", "@base-ui/react"],
  },
  // Spinner
  {
    name: "spinner",
    type: "registry:ui",
    title: "Spinner",
    description: "A customizable spinner component",
    files: [
      {
        path: "ui/spinner/index.tsx",
        type: "registry:ui",
        target: "components/ui/spinner.tsx",
      },
    ],
    dependencies: [
      "tailwind-variants",
      "tailwind-merge",
      "@base-ui/react",
      "clsx",
    ],
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
        target: "components/ui/textarea.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
  },
  // Toast
  {
    name: "toast",
    type: "registry:ui",
    title: "Toast",
    description: "A customizable toast component",
    files: [
      {
        path: "ui/toast/index.tsx",
        type: "registry:ui",
        target: "components/ui/toast.tsx",
      },
    ],
    registryDependencies: ["button", "spinner"],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
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
        target: "components/ui/tooltip.tsx",
      },
    ],
    dependencies: ["@base-ui/react", "clsx", "tailwind-merge"],
  },
];
