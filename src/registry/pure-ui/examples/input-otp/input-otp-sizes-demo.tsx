import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/pure-ui/ui/input-otp";

export const InputOTPSizesDemo = () => {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col items-center gap-4">
      {sizes.map((size) => (
        <InputOTP key={size} maxLength={6} slotSize={size}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      ))}
    </div>
  );
};
