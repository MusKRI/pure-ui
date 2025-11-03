import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Base UI?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Base UI is a library of high-quality unstyled React components for
            design systems and web apps.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Head to the “Quick start” guide in the docs. If you’ve used unstyled
            libraries before, you’ll feel at home.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Of course! Base UI is free and open source.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Yes! All components follow WAI-ARIA guidelines and have been
            thoroughly tested for keyboard navigation and screen reader
            compatibility.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I customize the animations?</AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Absolutely! Base UI offers multiple animation presets out of the
            box, and you can also create your own custom animations to match
            your design system.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
