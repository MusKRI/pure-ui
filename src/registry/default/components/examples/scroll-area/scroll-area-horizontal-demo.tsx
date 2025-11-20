import { ScrollArea } from "@/registry/default/components/ui/scroll-area";

const legendaryIndianCricketers = [
  "Sachin Tendulkar",
  "Virat Kohli",
  "MS Dhoni",
  "Kapil Dev",
  "Sunil Gavaskar",
  "Rahul Dravid",
  "Sourav Ganguly",
  "Virender Sehwag",
  "Anil Kumble",
  "Zaheer Khan",
  "Harbhajan Singh",
  "Yuvraj Singh",
  "Gautam Gambhir",
  "VVS Laxman",
  "Javagal Srinath",
  "Mohammad Azharuddin",
  "Ravi Shastri",
  "Jasprit Bumrah",
  "Rohit Sharma",
  "Hardik Pandya",
];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="max-w-96 rounded-md border" orientation="horizontal">
      <div className="flex w-max gap-4 p-4">
        {legendaryIndianCricketers.map((player) => (
          <div
            className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
            key={player}
          >
            <span className="font-medium text-center text-sm">{player}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
