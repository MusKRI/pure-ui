import { OpenPanelComponent } from "@openpanel/nextjs";

const isProd = process.env.NODE_ENV === "production";

export const Analytics = () => {
  return (
    <OpenPanelComponent
      clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
      trackAttributes={true}
      trackScreenViews={isProd}
      trackOutgoingLinks={isProd}
    />
  );
};
