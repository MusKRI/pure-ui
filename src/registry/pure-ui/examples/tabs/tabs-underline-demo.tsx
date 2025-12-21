import { SVGProps } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/registry/pure-ui/ui/tabs";
import { Badge } from "@/registry/pure-ui/ui/badge";

export function TabsUnderlineDemo() {
  return (
    <div className="flex flex-col gap-10">
      <Tabs defaultValue="source-code" variant="underline">
        <div className="border-b max-w-full overflow-hidden">
          <TabsList>
            <TabsTrigger value="source-code">
              <SourceCodeIcon />
              Code
            </TabsTrigger>
            <TabsTrigger value="chart-bubble">
              <ChartBubbleIcon />
              Issues
              <Badge variant="secondary" className="border-border text-[11px]">
                10
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="git-pull-request">
              <GitPullRequestIcon />
              Pull Requests
            </TabsTrigger>
            <TabsTrigger value="actions">
              <PlayCircleIcon />
              Actions
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <Tabs defaultValue="beachfront" variant="underline">
        <div className="border-b max-w-full overflow-hidden">
          <TabsList className="*:data-[slot=tabs-trigger]:flex-col *:data-[slot=tabs-trigger]:gap-1 *:data-[slot=tabs-trigger]:[&_svg]:size-5">
            <TabsTrigger value="beachfront">
              <BeachIcon />
              Beachfront
            </TabsTrigger>
            <TabsTrigger value="cabins">
              <BxBxsCabinet />
              Cabins
            </TabsTrigger>
            <TabsTrigger value="boats">
              <BoatIcon />
              Boats
            </TabsTrigger>
            <TabsTrigger value="castles">
              <CastleIcon />
              Castles
            </TabsTrigger>
            <TabsTrigger value="moutains">
              <MountainsIcon />
              Mountains
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}

function SourceCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m17 8l1.84 1.85c.773.778 1.16 1.167 1.16 1.65s-.387.872-1.16 1.65L17 15M7 8L5.16 9.85C4.387 10.628 4 11.017 4 11.5s.387.872 1.16 1.65L7 15m7.5-11l-5 16"
      />
    </svg>
  );
}

function ChartBubbleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="5" cy="7" r="3" />
        <circle cx="8" cy="18" r="4" />
        <circle cx="17" cy="7" r="5" />
      </g>
    </svg>
  );
}

function GitPullRequestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 8v8m12 0v-4c0-2.828 0-4.243-.879-5.121C16.243 6 14.828 6 12 6h-1m0 0c0-.7 1.994-2.008 2.5-2.5M11 6c0 .7 1.994 2.008 2.5 2.5"
        />
        <circle cx="6" cy="18" r="2" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
      </g>
    </svg>
  );
}

function PlayCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinejoin="round"
          d="M15.945 12.395c-.176.627-1.012 1.07-2.682 1.955c-1.615.856-2.422 1.285-3.073 1.113a1.66 1.66 0 0 1-.712-.393C9 14.62 9 13.746 9 12s0-2.62.478-3.07c.198-.186.443-.321.712-.392c.65-.173 1.458.256 3.073 1.112c1.67.886 2.506 1.329 2.682 1.955c.073.259.073.531 0 .79Z"
        />
      </g>
    </svg>
  );
}

function BeachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M7 38c1.368-5.675 8.458-10 17-10s15.632 4.325 17 10m-6-27c4.771 0 9 3.907 9 9m-8.86 1c2.572-2.773 2.431-7.227-.14-10m-1.61-8.352C36.228 4.286 36.638 8.162 35 11m0 0c-3.005-4.52-8.356-5.396-12-1.669" />
        <path d="M19 28c0-9.389 7.611-17 17-17c-5.007 0-9.067 7.611-9.067 17M3 45c1.89 0 3.78-.556 5.42-1.67a2.86 2.86 0 0 1 3.16 0A9.64 9.64 0 0 0 17 45c1.89 0 3.78-.556 5.42-1.67a2.86 2.86 0 0 1 3.16 0A9.64 9.64 0 0 0 31 45c1.89 0 3.78-.556 5.42-1.67a2.86 2.86 0 0 1 3.16 0A9.64 9.64 0 0 0 45 45" />
      </g>
    </svg>
  );
}

function BxBxsCabinet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M21 4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v7h18V4zm-5 4H8V5h2v1h4V5h2v3zM5 22h14c1.103 0 2-.897 2-2v-7H3v7c0 1.103.897 2 2 2zm3-6h2v1h4v-1h2v3H8v-3z"
        fill="currentColor"
      />
    </svg>
  );
}

function BoatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path fill="currentColor" d="M21 31V5L7 31zm6 0V13l14 18z" />
        <path d="M5 37h38l-5 6H10z" />
      </g>
    </svg>
  );
}

function CastleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M15.75 4h-7.5c-.702 0-1.053 0-1.306.169a1 1 0 0 0-.275.275C6.5 4.697 6.5 5.048 6.5 5.75s0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169h7.5c.702 0 1.053 0 1.306-.169a1 1 0 0 0 .275-.275c.169-.253.169-.604.169-1.306s0-1.053-.169-1.306a1 1 0 0 0-.275-.275C16.803 4 16.452 4 15.75 4ZM15 22l-.671-4.027c-.114-.681-.17-1.022-.336-1.28a1.5 1.5 0 0 0-.675-.573C13.036 16 12.691 16 12 16c-.69 0-1.036 0-1.318.12a1.5 1.5 0 0 0-.675.572c-.165.259-.222.6-.336 1.28L9 22" />
        <path d="M16 7.5H8L6 22h12z" />
        <path d="M17.794 22c2.127 0 3.19 0 3.788-.683c.598-.682.457-1.737.176-3.846l-.266-2C21.066 12.276 20.092 12 17 12M6.207 22c-2.128 0-3.192 0-3.79-.683c-.597-.682-.456-1.737-.175-3.846l.266-2C2.933 12.285 3.898 12 7 12m1-8V2m4 2V2m4 2V2" />
      </g>
    </svg>
  );
}

function MountainsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m90.88 155.92l-54.56-92.08A15.87 15.87 0 0 0 186.55 96a15.85 15.85 0 0 0-13.76 7.84L146.63 148l-44.84-76.1a16 16 0 0 0-27.58 0L1.11 195.94A8 8 0 0 0 8 208h240a8 8 0 0 0 6.88-12.08M88 80l23.57 40H64.43ZM22 192l33-56h66l18.74 31.8L154 192Zm150.57 0l-16.66-28.28L186.55 112L234 192Z"
      />
    </svg>
  );
}
