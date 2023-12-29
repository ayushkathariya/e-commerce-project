"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import SidebarLink from "./sidebar-link";

export default function SideBarMobile() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="outline">
            <HamburgerMenuIcon width={20} height={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Admin Panel</SheetTitle>
          </SheetHeader>
          {/* Content */}
          <div className="mt-48">
            <SidebarLink />
          </div>
          <SheetFooter className="mt-4">
            <SheetClose asChild>
              <span>
                <h1 className="text-center">
                  Developed by
                  <span className="font-bold ml-1">Ayush Kathariya</span>
                </h1>
                <h1 className="text-center mt-1 flex items-center gap-1">
                  © 2023 All rights reserved. Contact me
                  <span>
                    <a target="_blank" href={"https://twitter.com/Ayush44810"}>
                      <TwitterLogoIcon
                        className="text-blue-500 hover:text-blue-800"
                        width={18}
                        height={18}
                      />
                    </a>
                  </span>
                </h1>
              </span>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
