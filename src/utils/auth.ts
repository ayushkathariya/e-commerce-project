import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/utils/prisma-client";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      session.user.id = user?.id as number;
      session.user.role = user?.role as any;

      return session;
    },
    async signIn({ user }) {
      const isUserAuthenticated = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (isUserAuthenticated) {
        return true;
      }

      await prisma.user.create({
        data: {
          name: user?.name as string,
          email: user?.email as string,
          image: user?.image as string,
        },
      });

      return true;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
