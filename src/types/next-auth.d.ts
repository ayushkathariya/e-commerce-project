import type { Session } from "next-auth";
import { Role } from "@/utils/constants";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      image: string;
      role: Role;
    };
  }
}
