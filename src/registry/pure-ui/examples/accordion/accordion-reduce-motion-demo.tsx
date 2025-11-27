import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/pure-ui/ui/accordion";

export function AccordionReduceMotionDemo() {
  return (
    <Accordion className="w-full max-w-xl" reduceMotion>
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
    </Accordion>
  );
}
