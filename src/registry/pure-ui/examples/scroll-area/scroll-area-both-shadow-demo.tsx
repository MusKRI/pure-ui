import {
  ScrollArea,
  ScrollAreaContent,
} from "@/registry/pure-ui/ui/scroll-area";

export function ScrollAreaBothShadowDemo() {
  return (
    <ScrollArea
      className="max-w-96 h-96 rounded-md border"
      orientation="both"
      scrollShadow="both"
    >
      <ScrollAreaContent className="p-5">
        <ul className="m-0 grid list-none grid-cols-[repeat(10,6.25rem)] grid-rows-[repeat(10,6.25rem)] gap-3 p-0">
          {Array.from({ length: 100 }, (_, i) => (
            <li
              key={i}
              className="flex items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground"
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </ScrollAreaContent>
    </ScrollArea>
  );
}
