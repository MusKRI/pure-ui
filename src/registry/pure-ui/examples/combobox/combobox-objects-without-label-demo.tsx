"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/pure-ui/ui/combobox";

const users = [
  { id: "u1", name: "Alice Johnson", email: "alice@example.com" },
  { id: "u2", name: "Bob Lee", email: "bob@example.com" },
  { id: "u3", name: "Cathy Kim", email: "cathy@example.com" },
  { id: "u4", name: "David Smith", email: "david@example.com" },
  { id: "u5", name: "Emily Davis", email: "emily@example.com" },
  { id: "u6", name: "Frank Miller", email: "frank@example.com" },
  { id: "u7", name: "Grace Lee", email: "grace@example.com" },
  { id: "u8", name: "Henry Walker", email: "henry@example.com" },
];

type User = (typeof users)[number];

export function ComboboxObjectsWithoutLabelDemo() {
  return (
    <Combobox items={users}>
      <div className="max-w-xs w-full">
        <ComboboxInput placeholder="Select a user..." />
      </div>
      <ComboboxPopup>
        <ComboboxEmpty>No users found.</ComboboxEmpty>
        <ComboboxList>
          {(user: User) => (
            <ComboboxItem key={user.id} value={user}>
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-muted-foreground">
                  {user.email}
                </div>
              </div>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
