import Link from "next/link";
import {
  ArchiveIcon,
  BackpackIcon,
  GearIcon,
  PersonIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Command, CommandItem } from "./ui/command";
import LogoutLink from "./logout-link";

export default function SidebarLink() {
  return (
    <Command className="flex flex-col gap-2">
      <Link href={"/"}>
        <CommandItem className="cursor-pointer">
          <HomeIcon className="mr-2 h-4 w-4" />
          <span>Home</span>
        </CommandItem>
      </Link>
      <Link href={"/admin/users"}>
        <CommandItem className="cursor-pointer">
          <PersonIcon className="mr-2 h-4 w-4" />
          <span>Users</span>
        </CommandItem>
      </Link>
      <Link href={"/admin/orders"}>
        <CommandItem className="cursor-pointer">
          <BackpackIcon className="mr-2 h-4 w-4" />
          <span>Orders</span>
        </CommandItem>
      </Link>
      <Link href={"/admin/products"}>
        <CommandItem className="cursor-pointer">
          <ArchiveIcon className="mr-2 h-4 w-4" />
          <span>Products</span>
        </CommandItem>
      </Link>
      <LogoutLink />
      <Link href={"/admin/settings"}>
        <CommandItem className="cursor-pointer">
          <GearIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </CommandItem>
      </Link>
    </Command>
  );
}
