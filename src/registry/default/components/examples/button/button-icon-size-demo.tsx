import { Button } from "@/registry/default/components/ui/button";
import { MoreHorizontal, Settings2, Trash2 } from "lucide-react";

export function ButtonIconSizeDemo() {
  const iconSizes = ["icon-sm", "icon", "icon-lg", "icon-xl"] as const;

  return (
    <div className="flex flex-col gap-5">
      {iconSizes.map((iconSize) => {
        return (
          <div key={iconSize} className="flex gap-3">
            <Button variant="secondary" size={iconSize} radius="full">
              <MoreHorizontal />
            </Button>
            <Button variant="default" size={iconSize} radius="full">
              <Settings2 />
            </Button>
            <Button variant="destructive" size={iconSize} radius="full">
              <Trash2 />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
