"use client";

import { useState } from "react";

import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/components/ui/popover";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/default/components/ui/card";
import { Button } from "@/registry/default/components/ui/button";

export const PopoverCustomTriggerDemo = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Popover openOnHover>
      <PopoverTrigger
        render={<button className="flex items-center gap-2 cursor-pointer" />}
      >
        <img
          src="https://pbs.twimg.com/profile_images/1829339621072809984/xNqEQbYK_400x400.jpg"
          alt="Avatar"
          className="size-8 rounded-full"
        />
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">Gukesh D</span>
          <span className="text-xs text-foreground/70">
            World Chess Champion
          </span>
        </div>
      </PopoverTrigger>
      <PopoverPopup>
        <Card className="min-w-[260px] border-none p-1 shadow-none!">
          <CardHeader className="justify-between flex flex-row">
            <div className="flex gap-3">
              <img
                className="size-8 rounded-full"
                src="https://pbs.twimg.com/profile_images/1829339621072809984/xNqEQbYK_400x400.jpg"
              />
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-sm font-semibold leading-none text-foreground">
                  Gukesh D
                </h4>
                <h5 className="text-xs tracking-tight text-foreground/70">
                  @DGukesh
                </h5>
              </div>
            </div>
            <Button
              size="sm"
              radius="full"
              variant={isFollowing ? "outline" : "default"}
              className="text-xs"
              onClick={() => setIsFollowing(!isFollowing)}
            >
              <span>{isFollowing ? "Unfollow" : "Follow"}</span>
            </Button>
          </CardHeader>
          <CardContent className="py-0">
            <p className="text-[12.5px] text-foreground/70">
              World Chess Champion! <br /> 18 th & The Youngest ever!!
            </p>
          </CardContent>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-foreground text-sm">570</p>
              <p className=" text-foreground/70 text-sm">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-600 text-sm">210.4K</p>
              <p className="text-foreground/70 text-sm">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </PopoverPopup>
    </Popover>
  );
};
