import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

import { pureUISidebarConfig } from "../sidebar/data";
import {
  isSidebarLink,
  SidebarGroupItem,
  SidebarItem,
  SidebarLinkItem,
} from "@/types/sidebar.types";

import { useSidebar } from "../sidebar/use-sidebar";
import { usePathname } from "next/navigation";

export function MobileMenuNav() {
  const { close: closeSidebar } = useSidebar();

  const pathname = usePathname();

  const isComponentsPage = pathname.startsWith("/docs/components");
  const isDocsPage = !isComponentsPage && pathname.startsWith("/docs");
  const isBlocksPage = pathname.startsWith("/blocks");

  return (
    <div className="flex flex-col gap-3 px-6 py-6 overflow-y-auto">
      <Link href="/" onClick={closeSidebar}>
        <span className="text-2xl font-medium">Home</span>
      </Link>

      <CollapsiblePrimitive.Root
        className="flex flex-col"
        defaultOpen={isDocsPage}
      >
        <CollapsiblePrimitive.Trigger className="group flex items-center gap-2 text-2xl font-medium cursor-pointer">
          Docs
          <ChevronDownIcon className="size-5 transition-all ease-out group-data-panel-open:rotate-180 ml-auto" />
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Panel className="flex [&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150">
          <div className="mt-1 flex cursor-text flex-col gap-1 py-2">
            {pureUISidebarConfig.docs.map((item) => (
              <MobileMenuNavItem
                key={item.id}
                item={item}
                closeSidebar={closeSidebar}
              />
            ))}
          </div>
        </CollapsiblePrimitive.Panel>
      </CollapsiblePrimitive.Root>

      <CollapsiblePrimitive.Root
        className="flex flex-col"
        defaultOpen={isComponentsPage}
      >
        <CollapsiblePrimitive.Trigger className="group flex items-center gap-2 text-2xl font-medium cursor-pointer">
          Components
          <ChevronDownIcon className="size-5 transition-all ease-out group-data-panel-open:rotate-180 ml-auto" />
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Panel className="flex [&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150">
          <div className="mt-1 flex cursor-text flex-col gap-1 py-2">
            {pureUISidebarConfig.components.map((item) => (
              <MobileMenuNavItem
                key={item.id}
                item={item}
                closeSidebar={closeSidebar}
              />
            ))}
          </div>
        </CollapsiblePrimitive.Panel>
      </CollapsiblePrimitive.Root>

      <CollapsiblePrimitive.Root
        className="flex flex-col"
        defaultOpen={isBlocksPage}
      >
        <CollapsiblePrimitive.Trigger className="group flex items-center gap-2 text-2xl font-medium cursor-pointer">
          Blocks
          <ChevronDownIcon className="size-5 transition-all ease-out group-data-panel-open:rotate-180 ml-auto" />
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Panel className="flex [&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150">
          <div className="mt-1 flex cursor-text flex-col gap-1 py-2">
            {pureUISidebarConfig.blocks.map((item) => (
              <MobileMenuNavItem
                key={item.id}
                item={item}
                closeSidebar={closeSidebar}
              />
            ))}
          </div>
        </CollapsiblePrimitive.Panel>
      </CollapsiblePrimitive.Root>
    </div>
  );
}

function MobileMenuNavItem({
  item,
  closeSidebar,
}: {
  item: SidebarItem;
  closeSidebar: () => void;
}) {
  const ifLink = isSidebarLink(item);
  if (ifLink) {
    return <MobileMenuNavLink item={item} closeSidebar={closeSidebar} />;
  }
  return <MobileMenuNavGroup item={item} closeSidebar={closeSidebar} />;
}

function MobileMenuNavLink({
  item,
  closeSidebar,
}: {
  item: SidebarLinkItem;
  closeSidebar: () => void;
}) {
  return (
    <Link
      key={item.id}
      href={item.href}
      className="text-lg flex items-center gap-2 py-1.5 px-4 font-normal text-foreground/80 hover:text-foreground"
      onClick={closeSidebar}
    >
      {item.title}
      {item.tag && (
        <span className="text-[10px] text-amber-600 font-medium">
          {item.tag}
        </span>
      )}
    </Link>
  );
}

function MobileMenuNavGroup({
  item,
  closeSidebar,
}: {
  item: SidebarGroupItem;
  closeSidebar: () => void;
}) {
  return (
    <CollapsiblePrimitive.Root className="flex flex-col" key={item.id}>
      <CollapsiblePrimitive.Trigger className="group flex items-center gap-2 text-lg font-medium cursor-pointer py-1.5 px-4 text-foreground/80 hover:text-foreground">
        {item.title}
        <ChevronDownIcon className="size-5 transition-all ease-out group-data-panel-open:rotate-180" />
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Panel className="flex [&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0 duration-150">
        <div className="flex cursor-text flex-col pl-5">
          {item.children.map((child) => (
            <MobileMenuNavLink
              key={child.id}
              item={child}
              closeSidebar={closeSidebar}
            />
          ))}
        </div>
      </CollapsiblePrimitive.Panel>
    </CollapsiblePrimitive.Root>
  );
}
