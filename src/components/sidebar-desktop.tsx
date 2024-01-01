"use client";

import { TwitterLogoIcon } from "@radix-ui/react-icons";
import SidebarLink from "./sidebar-link";

export default function SideBarDesktop() {
  return (
    <div className="lg:w-[21rem] h-full fixed z-10 top-0 left-0 border-r">
      <div className="h-full flex flex-col justify-around">
        <div>
          <h1 className="text-center text-xl font-bold">Admin Panel</h1>
        </div>
        <div>
          <SidebarLink />
        </div>
        <div>
          <h1 className="text-center">
            Developed by
            <span className="font-bold ml-1">Ayush Kathariya</span>
          </h1>
          <h1 className="text-center mt-1 flex items-center gap-1">
            © 2023 All rights reserved. Contact me
            <span>
              <a target="_blank" href={process.env.NEXT_PUBLIC_TWITTER_URL!}>
                <TwitterLogoIcon
                  className="text-blue-500 hover:text-blue-800"
                  width={18}
                  height={18}
                />
              </a>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
