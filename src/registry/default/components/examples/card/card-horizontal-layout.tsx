import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/registry/default/components/ui/card";
import { Button } from "@/registry/default/components/ui/button";

export function CardHorizontalLayout() {
  return (
    <Card className="w-full items-stretch md:flex-row">
      <img
        alt="Demon Slayer: Kimetsu no Yaiba"
        className="rounded-lg pointer-events-none aspect-square w-full select-none object-cover md:max-w-[146px]"
        loading="lazy"
        src="https://pbs.twimg.com/media/G2co19tXoAAnWT8?format=jpg&name=large"
      />
      <div className="flex flex-1 flex-col gap-3">
        <CardHeader className="gap-1 py-1">
          <CardTitle>Demon Slayer: Kimetsu no Yaiba</CardTitle>
          <CardDescription>
            Follow Tanjiro Kamado as he embarks on a journey to become a demon
            slayer and find a cure for his sister Nezuko, who has been turned
            into a demon. An epic tale of courage, family bonds, and
            breathtaking battles.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex w-full flex-row items-center justify-between">
          <div className="flex flex-col">
            <span
              aria-label="Rating: 8.6 out of 10"
              className="text-foreground text-sm font-medium"
            >
              ★ 8.6/10
            </span>
            <span
              aria-label="Total episodes: 26 episodes"
              className="text-muted-foreground text-xs"
            >
              26 episodes
            </span>
          </div>
          <Button size="sm">Watch Now</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
