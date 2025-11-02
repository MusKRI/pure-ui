import { Input } from "@/registry/default/components/ui/input";

export const InputVariantsDemo = () => {
  const variants = ["flat", "bordered", "underlined", "faded"] as const;

  return (
    <div className="w-full flex flex-col gap-4">
      {variants.map((variant) => (
        <div
          key={variant}
          className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <Input label="Email" type="email" variant={variant} />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
};
