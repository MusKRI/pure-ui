import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/registry/pure-ui/ui/dialog";

import { Button } from "@/registry/pure-ui/ui/button";
import { Input } from "@/registry/pure-ui/ui/input";
import { Label } from "@/registry/pure-ui/ui/label";

export const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Edit profile
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="">
            <Label>Name</Label>
            <Input type="text" defaultValue="Krishna" />
          </div>
          <div className="">
            <Label>Username</Label>
            <Input type="text" defaultValue="@krishna" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};
