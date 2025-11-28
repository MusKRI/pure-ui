import { generateRegistryRssFeed } from "@wandry/analytics-sdk";
import type { NextRequest } from "next/server";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin;

  const rssXml = await generateRegistryRssFeed({
    baseUrl,
    componentsUrl: "/components",
    rss: {
      title: "@pure-ui",
      description: "Subscribe to @pure-ui updates",
      link: "https://pure.kam-ui.com/",
      pubDateStrategy: "githubLastEdit",
    },
    /**
     * They don’t generate RSS items for these types of registry items because there’s no link for them on the site.
     * Once you add them to be displayed on the site, you can simply remove them from the array
     * */
    excludeItemTypes: ["registry:example", "registry:style", "registry:lib"],
    github: {
      owner: "MusKRI",
      repo: "pure-ui",
      /**
       *
       * You need to enter your GitHub token here.
       * I don't store it anywhere.
       * It is needed to send a request to the GitHub API and get the date of the last commit for the registry item.
       * This is necessary to generate a valid date of change for the item.
       *
       */
      token: process.env.GITHUB_TOKEN,
    },
  });

  if (!rssXml) {
    return new Response("RSS feed not available", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
