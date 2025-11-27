import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/pure-ui/ui/dialog";

import { Button } from "@/registry/pure-ui/ui/button";

export const DialogReduceMotionDemo = () => {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Open</DialogTrigger>

      <DialogPopup reduceMotion>
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
