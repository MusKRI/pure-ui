import { SVGProps } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/registry/pure-ui/ui/tabs";

export function TabsSegmentedDemo() {
  return (
    <Tabs defaultValue="india" variant="segmented">
      <TabsList className="*:data-[slot=tabs-trigger]:h-10 *:data-[slot=tabs-trigger]:[&_svg]:size-5">
        <TabsTrigger value="india">
          <IndiaFlag />
          India
        </TabsTrigger>
        <TabsTrigger value="france">
          <FranceFlag />
          France
        </TabsTrigger>
        <TabsTrigger value="belgium">
          <BelgiumFlag />
          Belgium
        </TabsTrigger>
        <TabsTrigger value="switzerland">
          <SwitzerlandFlag />
          Switzerland
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function IndiaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      {...props}
    >
      <path fill="#138808" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z" />
      <path fill="#EEE" d="M0 13h36v10H0z" />
      <path fill="#F93" d="M36 13V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36z" />
      <circle fill="navy" cx="18" cy="18" r="4" />
      <circle fill="#EEE" cx="18" cy="18" r="3" />
      <path
        fill="#6666B3"
        d="M18 15l.146 2.264l1.001-2.035l-.73 2.147l1.704-1.498l-1.497 1.705l2.147-.731l-2.035 1.002L21 18l-2.264.146l2.035 1.001l-2.147-.73l1.497 1.704l-1.704-1.497l.73 2.147l-1.001-2.035L18 21l-.146-2.264l-1.002 2.035l.731-2.147l-1.705 1.497l1.498-1.704l-2.147.73l2.035-1.001L15 18l2.264-.146l-2.035-1.002l2.147.731l-1.498-1.705l1.705 1.498l-.731-2.147l1.002 2.035z"
      />
      <circle fill="navy" cx="18" cy="18" r="1" />
    </svg>
  );
}

function FranceFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      {...props}
    >
      <path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z" />
      <path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z" />
      <path fill="#EEE" d="M12 5h12v26H12z" />
    </svg>
  );
}

function BelgiumFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      {...props}
    >
      <path fill="#f9cb38" d="M22 10h20v44H22z" />
      <path
        fill="#25333a"
        d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z"
      />
      <path
        fill="#ec1c24"
        d="M54 10H42v44h12c6.627 0 10-4.925 10-11V21c0-6.075-3.373-11-10-11"
      />
    </svg>
  );
}

function SwitzerlandFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#ec1c24"
        d="M10 11C3.373 11 0 15.925 0 22v22c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V22c0-6.075-3.373-11-10-11"
      />
      <path fill="#fff" d="M19 38h8v8h9v-8h8v-9h-8v-8h-9v8h-8z" />
    </svg>
  );
}
