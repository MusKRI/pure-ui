import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/components/ui/dialog";

import { Button } from "@/registry/default/components/ui/button";

export const DialogLeftSlideDemo = () => {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Open</DialogTrigger>

      <DialogPopup animationPreset="leftSlide">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read the following terms of service carefully.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" radius="full" className="w-full sm:w-auto">
            Decline
          </Button>
          <Button type="submit" radius="full" className="w-full sm:w-auto">
            Accept
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};
