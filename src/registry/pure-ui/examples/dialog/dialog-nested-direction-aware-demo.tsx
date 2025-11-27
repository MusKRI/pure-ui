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

export const DialogNestedDirectionAwareDemo = () => {
  const flips = ["topFlip", "bottomFlip", "leftFlip", "rightFlip"] as const;
  const slides = [
    "topSlide",
    "bottomSlide",
    "leftSlide",
    "rightSlide",
  ] as const;

  return (
    <div className="grid gap-4">
      <div className="flex flex-col gap-4">
        <div>Flip Animations in nested dialogs</div>
        <div className="flex flex-wrap items-center gap-4">
          {flips.map((flip) => (
            <Dialog key={flip}>
              <DialogTrigger render={<Button />}>
                <span className="capitalize">{flip}</span>
              </DialogTrigger>
              <DialogPopup showCloseButton={false} animationPreset={flip}>
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
                    <DialogPopup showCloseButton={false} animationPreset={flip}>
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
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>Slide Animations in nested dialogs</div>
        <div className="flex flex-wrap items-center gap-4">
          {slides.map((slide) => (
            <Dialog key={slide}>
              <DialogTrigger render={<Button />}>
                <span className="capitalize">{slide}</span>
              </DialogTrigger>
              <DialogPopup showCloseButton={false} animationPreset={slide}>
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
                    <DialogPopup
                      showCloseButton={false}
                      animationPreset={slide}
                    >
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
          ))}
        </div>
      </div>
    </div>
  );
};
