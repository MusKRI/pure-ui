import { SVGProps } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/registry/pure-ui/ui/tabs";

export function TabsCardDemo() {
  return (
    <Tabs defaultValue="credit-card" variant="card">
      <TabsList className="*:data-[slot=tabs-trigger]:[&_svg]:size-5 *:data-[slot=tabs-trigger]:flex-col *:data-[slot=tabs-trigger]:items-start *:data-[slot=tabs-trigger]:py-2 *:data-[slot=tabs-trigger]:gap-1 gap-3">
        <TabsTrigger value="credit-card">
          <CreditCardIcon />
          Credit Card
        </TabsTrigger>
        <TabsTrigger value="bank">
          <BankIcon />
          Bank Debit
        </TabsTrigger>
        <TabsTrigger value="apple">
          <AppleIcon />
          Apple Pay
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function CreditCardIcon(props: SVGProps<SVGSVGElement>) {
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
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          d="M2 12c0-3.537 0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 6.693 22 8.463 22 12s0 5.306-1.053 6.487a4.4 4.4 0 0 1-.555.522C19.138 20 17.26 20 13.5 20h-3c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12"
        />
        <path
          strokeLinecap="round"
          strokeMiterlimit="10"
          d="M10 16h1.5m3 0H18"
        />
        <path d="M2 9h20" />
      </g>
    </svg>
  );
}

function BankIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <path
          strokeWidth="1.5"
          d="M2 8.57c0-1.197.482-1.93 1.48-2.486l4.11-2.287C9.743 2.6 10.82 2 12 2s2.257.6 4.41 1.797l4.11 2.287C21.517 6.64 22 7.373 22 8.57c0 .324 0 .487-.035.62c-.186.7-.821.811-1.434.811H3.469c-.613 0-1.247-.11-1.434-.811C2 9.056 2 8.893 2 8.569Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.996 7h.009"
        />
        <path
          strokeWidth="1.5"
          d="M4 10v8.5M8 10v8.5m8-8.5v8.5m4-8.5v8.5m-1 0H5a3 3 0 0 0-3 3a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5a3 3 0 0 0-3-3Z"
        />
      </g>
    </svg>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
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
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 5.75c0-2 1.5-4 3.5-4c0 2-1.5 4-3.5 4Zm.5 2.34c-.515 0-.913-.164-1.359-.346c-.563-.232-1.202-.494-2.248-.494C7.023 7.25 4 8.75 4 12.75c0 4.652 3.105 9.5 5.105 9.5c.67 0 1.272-.263 1.849-.514c.527-.23 1.033-.45 1.546-.45s1.018.22 1.546.45c.577.251 1.18.514 1.85.514c1.392 0 3.061-2.35 4.104-5.35c-1.62-.68-2.662-2.282-2.662-4.15c0-1.629.866-2.71 2.162-3.5c-1-1.5-2.487-2-3.555-2c-1.046 0-1.685.262-2.248.494c-.446.182-.682.346-1.197.346Z"
      />
    </svg>
  );
}
