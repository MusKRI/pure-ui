import {
  ScrollArea,
  ScrollAreaContent,
} from "@/registry/default/components/ui/scroll-area";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-64 rounded-md max-w-sm w-full">
      <ScrollAreaContent className="flex flex-col gap-4 py-3 pr-6 pl-4 pb-4 text-sm leading-5.5 text-foreground">
        <p>
          Cricket is a bat-and-ball game played between two teams of eleven
          players each. It originated in England and has become incredibly
          popular in countries such as India, Australia, and South Africa. The
          game is played on a large oval field with a rectangular 22-yard-long
          pitch at the center, where the main action takes place between the
          bowler and the batter.
        </p>
        <p>
          Matches can last between several hours and up to five days, depending
          on the format. Cricket is known for its strategic depth, unique rules,
          and traditions such as tea breaks in longer matches. Whether it's the
          excitement of a fast-paced T20 game or the endurance challenge of Test
          cricket, the sport captivates millions of fans worldwide.
        </p>
        <p>
          A fundamental aspect of cricket is the balance between batting,
          bowling, and fielding. Teams strategize not only to score runs but
          also to restrict their opponents through clever bowling changes and
          careful placement of fielders. Batsmen employ a wide range of shots to
          counter the bowlers’ tactics, while bowlers use variations in speed,
          spin, and swing to outwit the batsmen.
        </p>
        <p>
          Cricket also boasts a rich culture of iconic tournaments, such as the
          Cricket World Cup and the Indian Premier League (IPL), which attract
          players and fans from all over the globe. These events feature
          passionate rivalries, legendary performances, and create lifelong
          memories for cricket enthusiasts.
        </p>
        <p>
          Beyond its competitive thrills, cricket is often celebrated for its
          spirit of sportsmanship, highlighted by traditions like shaking hands
          after the match and the concept of the "Spirit of Cricket," which
          emphasizes respect for opponents, officials, and the game’s rules.
          This ethos has helped cricket build a reputation as not only a
          spectacle of athletic prowess but also a game that values integrity
          and camaraderie.
        </p>
      </ScrollAreaContent>
    </ScrollArea>
  );
}
