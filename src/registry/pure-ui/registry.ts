import { registryItemSchema, type Registry } from "shadcn/schema";
import { z } from "zod";

import { pureUIComponents } from "./ui/_registry";
import { pureUILib } from "./lib/_registry";
import { pureUICompExamples } from "./examples/_registry";

const PURE_UI_STYLE = {
  type: "registry:style",
  dependencies: ["lucide-react", "tailwind-variants"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["classes"],
  cssVars: {},
  files: [],
};

export const registry = {
  name: "Pure UI",
  homepage: "https://pure.kam-ui.com",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      ...PURE_UI_STYLE,
    },
    ...pureUIComponents,
    ...pureUILib,
    ...pureUICompExamples,
  ]),
} satisfies Registry;
