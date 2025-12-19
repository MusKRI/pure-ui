import { Label } from "@/registry/pure-ui/ui/label";
import { Radio, RadioGroup } from "@/registry/pure-ui/ui/radio-group";

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="dhoni">
      <div className="text-sm font-medium">
        Choose your favorite cricket player
      </div>
      <Label>
        <Radio value="virat" /> Virat Kohli
      </Label>
      <Label>
        <Radio value="rohit" disabled /> Rohit Sharma
      </Label>
      <Label>
        <Radio value="sachin" disabled /> Sachin Tendulkar
      </Label>
      <Label>
        <Radio value="dhoni" /> MS Dhoni
      </Label>
    </RadioGroup>
  );
}
