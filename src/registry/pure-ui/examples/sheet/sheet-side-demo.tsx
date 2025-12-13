import {
  Sheet,
  SheetClose,
  SheetPopup,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/pure-ui/ui/sheet";
import { Button } from "@/registry/pure-ui/ui/button";

import { Label } from "@/registry/pure-ui/ui/label";
import { Input } from "@/registry/pure-ui/ui/input";

export function SheetSideDemo() {
  const sides = ["top", "right", "bottom", "left"] as const;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger
            render={<Button variant="outline" className="capitalize" />}
          >
            {side}
          </SheetTrigger>
          <SheetPopup side={side}>
            <SheetHeader className="group-data-[side=top]:max-w-lg group-data-[side=top]:mx-auto group-data-[side=bottom]:max-w-lg group-data-[side=bottom]:mx-auto w-full">
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="group-data-[side=top]:max-w-lg group-data-[side=top]:mx-auto group-data-[side=bottom]:max-w-lg group-data-[side=bottom]:mx-auto w-full">
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name</Label>
                  <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Username</Label>
                  <Input id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
              </div>
            </div>
            <SheetFooter className="group-data-[side=top]:max-w-lg group-data-[side=top]:mx-auto group-data-[side=bottom]:max-w-lg group-data-[side=bottom]:mx-auto w-full">
              <Button type="submit" className="w-full">
                Save changes
              </Button>
              <SheetClose
                render={<Button variant="outline" className="w-full" />}
              >
                Close
              </SheetClose>
            </SheetFooter>
          </SheetPopup>
        </Sheet>
      ))}
    </div>
  );
}
