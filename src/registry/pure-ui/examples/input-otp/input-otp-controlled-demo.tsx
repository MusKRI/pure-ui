"use client";

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/pure-ui/ui/input-otp";

export const InputOTPControlledDemo = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <InputOTP
        variant="underlined"
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-sm text-muted-foreground">
        Value: <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
};
