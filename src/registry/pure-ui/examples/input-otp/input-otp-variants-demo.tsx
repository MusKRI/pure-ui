import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/pure-ui/ui/input-otp";

export const InputOTPVariantsDemo = () => {
  const variants = ["bordered", "underlined"] as const;

  return (
    <div className="flex flex-col items-center gap-4">
      {variants.map((variant) => (
        <InputOTP key={variant} maxLength={6} variant={variant}>
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
