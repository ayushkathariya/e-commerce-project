import AvatarIcon from "@/components/avatar";
import { getAuthSession } from "@/utils/auth";
import SideBarMobile from "./sidebar-mobile";
import { Input } from "@/components/ui/input";
import SidebarDesktop from "./sidebar-desktop";
import { PersonIcon } from "@radix-ui/react-icons";

export default async function AdminLayout() {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 z-20 w-full flex justify-between px-1">
      <div className="flex">
        <div>
          <span className="lg:hidden">
            <SideBarMobile />
          </span>
          <span className="hidden lg:block">
            <SidebarDesktop />
          </span>
        </div>
        <div className="lg:ml-[21.5rem] flex items-center gap-2 lg:gap-4">
          <PersonIcon width={24} height={24} />
          <Input
            type="text"
            placeholder="Search"
            className="w-40 sm:w-56 md:w-72"
          />
        </div>
      </div>
      <div>
        <AvatarIcon image={session?.user.image as string} />
      </div>
    </div>
  );
}
