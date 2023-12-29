"use client";

import { ExitIcon } from "@radix-ui/react-icons";
import { CommandItem } from "./ui/command";
import { signOut } from "next-auth/react";

export default function LogoutLink() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL });
  };

  return (
    <span onClick={handleLogout}>
      <CommandItem className="cursor-pointer">
        <ExitIcon className="mr-2 h-4 w-4" />
        <span>Logout</span>
      </CommandItem>
    </span>
  );
}
