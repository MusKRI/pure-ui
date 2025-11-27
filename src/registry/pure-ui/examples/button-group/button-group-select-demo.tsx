"use client";

import * as React from "react";
import { ArrowRightIcon, ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import { ButtonGroup } from "@/registry/pure-ui/ui/button-group";
import { Input } from "@/registry/pure-ui/ui/input";
import {
  Select,
  SelectPopup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectList,
  SelectIcon,
} from "@/registry/pure-ui/ui/select";

interface Currency {
  value: string;
  label: string;
}

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];

export function ButtonGroupSelectDemo() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select
          defaultValue={CURRENCIES[0]}
          itemToStringValue={(currency) => (currency as Currency)?.value}
        >
          <SelectTrigger className="w-fit min-w-none">
            <SelectValue>{(currency: Currency) => currency.value}</SelectValue>
            <SelectIcon>
              <ChevronsUpDownIcon className="size-3.5" />
            </SelectIcon>
          </SelectTrigger>
          <SelectPopup className="min-w-48" alignItemWithTrigger>
            <SelectList>
              {CURRENCIES.map((curr) => (
                <SelectItem key={curr.value} value={curr}>
                  {curr.value}{" "}
                  <span className="text-muted-foreground">{curr.label}</span>
                </SelectItem>
              ))}
            </SelectList>
          </SelectPopup>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
