import { Badge } from "@/registry/pure-ui/ui/badge";

export function BadgeCustomDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Badge
        className="dark:bg-[#1c120d] bg-[#f1763a] border border-[#f1763a] dark:text-[#f1763a] text-[#1c120d]"
        shape="bar"
      >
        L. Norris
      </Badge>
      <Badge
        className="dark:bg-[#091917] bg-[#0ad4b4] border border-[#0ad4b4] dark:text-[#0ad4b4] text-[#091917]"
        shape="bar"
      >
        G. Russel
      </Badge>
      <Badge
        className="dark:bg-[#151515] bg-[#9c9ea1] border border-[#9c9ea1] dark:text-[#9c9ea1] text-[#151515]"
        shape="bar"
      >
        O. Bearman
      </Badge>
      <Badge
        className="dark:bg-[#0e1319] bg-[#4680d6] border border-[#4680d6] dark:text-[#4680d6] text-white"
        shape="bar"
      >
        M. Verstappen
      </Badge>
      <Badge
        className="dark:bg-[#0a111a] bg-[#1568da] border border-[#1568da] dark:text-[#1568da] text-white"
        shape="bar"
      >
        C. Sainz
      </Badge>
      <Badge
        className="dark:bg-[#09180a] bg-[#0cbf10] border border-[#0cbf10] dark:text-[#0cbf10] text-white"
        shape="bar"
      >
        N. Hulkenberg
      </Badge>
      <Badge
        className="dark:bg-[#1b0a0c] bg-[#eb1131] border border-[#eb1131] dark:text-[#eb1131] text-white"
        shape="bar"
      >
        L. Stroll
      </Badge>
    </div>
  );
}
