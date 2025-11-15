import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/registry/default/components/ui/dialog";

import { Button } from "@/registry/default/components/ui/button";
import { Input } from "@/registry/default/components/ui/input";
import { Label } from "@/registry/default/components/ui/label";

export const DialogNestedDemo = () => {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>View details</DialogTrigger>
      <DialogPopup showCloseButton={false} animationPreset="topFlip">
        <DialogHeader>
          <DialogTitle>Manage team member</DialogTitle>
          <DialogDescription>
            View and manage a user in your team.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-sm font-medium">Krishna</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-sm font-medium">krishna@kam-ui.com</p>
          </div>
        </div>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Edit details
            </DialogTrigger>
            <DialogPopup showCloseButton={false} animationPreset="topFlip">
              <DialogHeader>
                <DialogTitle>Edit details</DialogTitle>
                <DialogDescription>
                  Make changes to the member&apos;s information.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="input-type-name">Name</Label>
                  <Input
                    id="input-type-name"
                    placeholder="Krishna"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="input-type-email">Email</Label>
                  <Input
                    id="input-type-email"
                    placeholder="krishna@example.com"
                    type="text"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  Cancel
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};
