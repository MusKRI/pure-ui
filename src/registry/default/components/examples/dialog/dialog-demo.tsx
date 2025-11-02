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

export const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open parent</Button>
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Manage team member</DialogTitle>
          <DialogDescription>
            View and manage a user in your team.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="text-sm font-medium">Bora Baloglu</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-sm font-medium">bora@example.com</p>
          </div>
        </div>
        <DialogFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit details</Button>
            </DialogTrigger>
            <DialogPopup showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Edit details</DialogTitle>
                <DialogDescription>
                  Make changes to the member&apos;s information.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Input />
                <Input />
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
