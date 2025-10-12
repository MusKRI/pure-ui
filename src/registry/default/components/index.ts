import { type RegistryItem } from "@/lib/registry/schemas";

import { pureUIShadcnComponents } from "./pure-ui-components";
import { pureUICompExamples } from "./pure-ui-comp-examples";

export const pureUIAllComponents: RegistryItem[] = [
  ...pureUIShadcnComponents,
  ...pureUICompExamples,
];
