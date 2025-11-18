import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/components/ui/accordion";

export function AccordionSwissVariantDemo() {
  return (
    <Accordion variant="swiss" className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-2">
          What Is Football?
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            A global sport where two teams aim to score goals by getting the
            ball into the opponent’s net.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center gap-2">
          Duration of the Game
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            A match lasts 90 minutes, divided into two halves, with added
            stoppage time as needed.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center gap-2">
          Basic Rules
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Players can use any body part except their hands (goalkeepers
            excluded). Fouls, offsides, and penalties shape the game.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="flex items-center gap-2">
          Player Positions
        </AccordionTrigger>
        <AccordionPanel className="flex flex-col gap-4 text-balance">
          <p className="text-[15px] text-muted-foreground">
            Teams have defenders, midfielders, forwards, and a goalkeeper—each
            with specific responsibilities on the field.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
