import Link from "next/link";
import { Suspense } from "react";

import { GithubIcon } from "@/core/icons/pack1";
import { Button } from "@/registry/pure-ui/ui/button";

export async function StarsCount() {
  try {
    const data = await fetch("https://api.github.com/repos/MusKRI/pure-ui", {
      next: {
        revalidate: 3600,
      },
    });

    if (!data.ok) {
      throw new Error(`GitHub API returned ${data.status}`);
    }

    const json = await data.json();

    const formattedCount =
      json.stargazers_count >= 1000
        ? json.stargazers_count % 1000 === 0
          ? `${Math.floor(json.stargazers_count / 1000)}k`
          : `${(json.stargazers_count / 1000).toFixed(1)}k`
        : json.stargazers_count.toLocaleString();

    return (
      <span className="text-muted-foreground w-fit text-xs tabular-nums">
        {formattedCount.replace(".0k", "k")}
      </span>
    );
  } catch (error) {
    return (
      <span className="text-muted-foreground w-fit text-xs tabular-nums"></span>
    );
  }
}

export function GithubButton() {
  return (
    <Button
      nativeButton={false}
      render={
        <Link
          href="https://github.com/MusKRI/pure-ui"
          target="_blank"
          rel="noreferrer"
        />
      }
      variant="ghost"
      className="h-8"
    >
      <GithubIcon className="size-4.5" />
      <Suspense>
        <StarsCount />
      </Suspense>
    </Button>
  );
}
