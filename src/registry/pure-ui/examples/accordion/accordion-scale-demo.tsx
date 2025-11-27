import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/pure-ui/ui/accordion";

export function AccordionScaleDemo() {
  return (
    <Accordion animationPreset="scale" className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-2">
          What Is Cricket?
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            A bat-and-ball sport played between two teams of eleven, focused on
            scoring runs and taking wickets.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center gap-2">
          Formats of the Game
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Cricket has three main formats: Test, ODI, and T20—each with
            different lengths and strategies.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center gap-2">
          Basic Rules
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Teams take turns batting and bowling. The batting side scores runs,
            while the bowling side tries to dismiss batters.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="flex items-center gap-2">
          Key Player Roles
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Players specialize as batters, bowlers, all-rounders, or
            wicketkeepers—each contributing differently to the team.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
