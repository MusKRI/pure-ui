import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/pure-ui/ui/input-otp";

export const InputOTPPatternDemo = () => {
  const patternConfig = [
    {
      name: "Only lowercase letters (a-z):",
      value: "^[a-z]*$",
    },
    {
      name: "Only uppercase letters (A-Z):",
      value: "^[A-Z]*$",
    },
    {
      name: "Numbers only (0-9):",
      value: "^[0-9]*$",
    },
    {
      name: "Letters only (a-z, A-Z):",
      value: "^[a-zA-Z]*$",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {patternConfig.map((config) => (
        <div className="flex flex-col gap-1" key={config.name}>
          <InputOTP maxLength={6} pattern={config.value}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">{config.name}</p>
        </div>
      ))}
    </div>
  );
};
