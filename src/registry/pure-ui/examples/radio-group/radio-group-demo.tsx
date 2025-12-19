import { Label } from "@/registry/pure-ui/ui/label";
import { Radio, RadioGroup } from "@/registry/pure-ui/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="next">
      <div className="text-sm font-medium">
        Choose your favorite cricket player
      </div>
      <Label>
        <Radio value="virat" /> Virat Kohli
      </Label>
      <Label>
        <Radio value="rohit" /> Rohit Sharma
      </Label>
      <Label>
        <Radio value="sachin" /> Sachin Tendulkar
      </Label>
      <Label>
        <Radio value="dhoni" /> MS Dhoni
      </Label>
    </RadioGroup>
  );
}
