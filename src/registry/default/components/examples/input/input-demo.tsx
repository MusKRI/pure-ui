import { Input } from "@/registry/default/components/ui/input";

export const InputDemo = () => {
  return (
    <div className="flex w-full items-center justify-center flex-wrap md:flex-nowrap gap-4">
      <Input label="Email" type="email" />
      <Input label="Email" placeholder="Enter your email" type="email" />
    </div>
  );
};
