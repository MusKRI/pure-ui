import { Button } from "@/registry/pure-ui/ui/button";

import {
  Sheet,
  SheetPopup,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/registry/pure-ui/ui/sheet";
import {
  ScrollArea,
  ScrollAreaContent,
} from "@/registry/pure-ui/ui/scroll-area";
import { Label } from "@/registry/pure-ui/ui/label";
import { Input } from "@/registry/pure-ui/ui/input";
import { Textarea } from "@/registry/pure-ui/ui/textarea";

export function SheetNestedDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        The Road Not Taken
      </SheetTrigger>
      <SheetPopup>
        <SheetHeader>
          <SheetTitle className="text-xl">The Road Not Taken</SheetTitle>
          <SheetDescription>
            "The Road Not Taken" is a renowned poem by Robert Frost that
            explores choices and their consequences. It reflects on how
            decisions shape one's path in life.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="p-4 border-0" scrollShadow="vertical">
          <ScrollAreaContent className="flex flex-col gap-4">
            <p>
              Two roads diverged in a yellow wood, And sorry I could not travel
              both And be one traveler, long I stood And looked down one as far
              as I could To where it bent in the undergrowth;
            </p>
            <p>
              Then took the other, as just as fair, And having perhaps the
              better claim, Because it was grassy and wanted wear; Though as for
              that the passing there Had worn them really about the same,
            </p>
            <p>
              And both that morning equally lay In leaves no step had trodden
              black. Oh, I kept the first for another day! Yet knowing how way
              leads on to way, I doubted if I should ever come back.
            </p>
            <p>
              I shall be telling this with a sigh Somewhere ages and ages hence:
              Two roads diverged in a wood, and I— I took the one less traveled
              by, And that has made all the difference.
            </p>
            <p>
              Two roads diverged in a yellow wood, And sorry I could not travel
              both And be one traveler, long I stood And looked down one as far
              as I could To where it bent in the undergrowth;
            </p>
            <p>
              Then took the other, as just as fair, And having perhaps the
              better claim, Because it was grassy and wanted wear; Though as for
              that the passing there Had worn them really about the same,
            </p>
            <p>
              And both that morning equally lay In leaves no step had trodden
              black. Oh, I kept the first for another day! Yet knowing how way
              leads on to way, I doubted if I should ever come back.
            </p>
            <p>
              I shall be telling this with a sigh Somewhere ages and ages hence:
              Two roads diverged in a wood, and I— I took the one less traveled
              by, And that has made all the difference.
            </p>
          </ScrollAreaContent>
        </ScrollArea>
        <SheetFooter>
          <Sheet>
            <SheetTrigger
              render={<Button variant="outline" className="w-full" />}
            >
              Edit Info
            </SheetTrigger>
            <SheetPopup>
              <SheetHeader>
                <SheetTitle>Edit Info</SheetTitle>
                <SheetDescription>
                  This sheet demonstrates nesting—open a sheet within another to
                  create layered panels. Use this pattern for advanced workflows
                  or editing details without losing context.
                </SheetDescription>
              </SheetHeader>
              <div className="w-full">
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" defaultValue="The Road Not Taken" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth;"
                    />
                  </div>
                </div>
              </div>
              <SheetFooter className="w-full">
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
          <Button type="submit" className="w-full">
            Mark Completed
          </Button>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  );
}
