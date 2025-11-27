import { MailIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";

export function ButtonIconSizeDemo() {
  const iconSizes = ["icon-sm", "icon", "icon-lg", "icon-xl"] as const;

  return (
    <div className="flex items-center gap-5">
      {iconSizes.map((iconSize) => {
        return (
          <div key={iconSize} className="flex flex-col items-center gap-3">
            <Button variant="outline" size={iconSize}>
              <MailIcon />
            </Button>

            <span className="text-sm text-muted-foreground">{iconSize}</span>
          </div>
        );
      })}
    </div>
  );
}
