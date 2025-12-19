import { Label } from "@/registry/pure-ui/ui/label";
import { Radio, RadioGroup } from "@/registry/pure-ui/ui/radio-group";

export function RadioGroupOrientationDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium">
        How would you rate your experience?
      </div>
      <RadioGroup orientation="horizontal">
        {[1, 2, 3, 4, 5].map((item) => (
          <Label key={item}>
            <Radio value={item} /> {item}
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
