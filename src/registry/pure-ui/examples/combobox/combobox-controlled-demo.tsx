"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/pure-ui/ui/combobox";
import { useState } from "react";

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

export function ComboboxControlledDemo() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="flex flex-col gap-5 max-w-xs w-full">
      <Combobox
        items={users}
        itemToStringLabel={(user: User) => user.name}
        value={selectedUser}
        onValueChange={setSelectedUser}
      >
        <ComboboxInput placeholder="Select a user..." />
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

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Selected User:</p>
        <div className="relative bg-muted p-4 rounded-md">
          <pre>{JSON.stringify(selectedUser, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
