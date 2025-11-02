import { Input } from "@/registry/default/components/ui/input";

export const InputSizesDemo = () => {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {sizes.map((size) => (
        <div
          key={size}
          className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 "
        >
          <Input label="Email" size={size} type="email" />
          <Input
            label="Email"
            placeholder="Enter your email"
            size={size}
            type="email"
          />
        </div>
      ))}
    </div>
  );
};
