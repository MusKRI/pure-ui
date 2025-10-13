import { LinkIcon } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/default/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>PAYMENT</CardTitle>
        <CardDescription>You can now withdraw on crypto.</CardDescription>
      </CardHeader>
      <CardContent id="payment-content">
        <p>Add your wallet in settings to withdraw</p>
      </CardContent>
      <CardFooter>
        <Link
          aria-label="Go to settings (opens in new tab)"
          href="https://kam-ui.com"
          target="_blank"
          className="inline-flex items-center gap-2 hover:underline"
        >
          Go to settings
          <LinkIcon aria-hidden="true" className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
