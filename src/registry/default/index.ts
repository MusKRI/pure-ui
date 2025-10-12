import { z } from "zod";

import { getAppUrl } from "@/lib/env";
import { type Registry, registryItemSchema } from "@/lib/registry/schemas";
import { pureUIAllComponents } from "./components";

export const pureUIComponentsRegistry = {
  name: "pure-ui",
  homepage: `${getAppUrl()}`,
  items: z.array(registryItemSchema).parse([...pureUIAllComponents]),
} satisfies Registry;
