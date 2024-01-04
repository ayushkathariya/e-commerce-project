import Link from "next/link";
import {
  ArchiveIcon,
  BackpackIcon,
  GearIcon,
  PersonIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Command, CommandItem } from "../ui/command";
import LogoutLink from "./logout-link";

export default function SidebarLink() {
  return (
    <Command className="flex flex-col gap-2">
      <Link href={"/"}>
        <CommandItem className="cursor-pointer">
          <HomeIcon className="mr-2 h-4 w-4 lg:h-5 lg:w-5 lg:mr-3" />
          <span className="lg:text-lg font-medium">Home</span>
        </CommandItem>
      </Link>
      <Link href={"/admin/users"}>
        <CommandItem className="cursor-pointer">
          <PersonIcon className="mr-2 h-4 w-4  lg:h-5 lg:w-5 lg:mr-3" />
          <span className="lg:text-lg font-medium">Users</span>
        </CommandItem>
      </Link>
      <Link href={"/admin/orders"}>
        <CommandItem className="cursor-pointer">
          <BackpackIcon className="mr-2 h-4 w-4 lg:h-5 lg:w-5 lg:mr-3" />
          <span className="lg:text-lg font-medium">Orders</span>
        </CommandItem>
      </Link>
      <Link href={"/admin/products"}>
        <CommandItem className="cursor-pointer">
          <ArchiveIcon className="mr-2 h-4 w-4 lg:h-5 lg:w-5 lg:mr-3" />
          <span className="lg:text-lg font-medium">Products</span>
        </CommandItem>
      </Link>
      <LogoutLink />
      <Link href={"/admin/settings"}>
        <CommandItem className="cursor-pointer">
          <GearIcon className="mr-2 h-4 w-4 lg:h-5 lg:w-5 lg:mr-3" />
          <span className="lg:text-lg font-medium">Settings</span>
        </CommandItem>
      </Link>
    </Command>
  );
}
