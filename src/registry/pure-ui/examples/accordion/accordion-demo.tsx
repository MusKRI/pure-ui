import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/pure-ui/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Next.js?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-sm text-muted-foreground">
            Next.js is a React framework that makes building fast, SEO-friendly
            web apps easy with server rendering and automatic routing.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Use the App Router?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-sm text-muted-foreground">
            The App Router offers layouts, server components, and better
            data-fetching, giving you cleaner structure and faster performance.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Data Fetching in Next.js</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-sm text-muted-foreground">
            Next.js supports static, dynamic, and server-side data fetching,
            letting you choose the best method per component.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>SEO Benefits of Static Generation</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-sm text-muted-foreground">
            Static generation ensures pages are pre-rendered with content,
            improving SEO by providing fully-rendered HTML at build time.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>File-Based Routing</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-sm text-muted-foreground">
            Pages and routes are created automatically from your folder
            structure, including support for dynamic and nested routes.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
