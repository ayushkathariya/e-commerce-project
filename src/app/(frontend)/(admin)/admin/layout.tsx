import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/(frontend)/(user)/globals.css";
import ReduxProvider from "@/components/providers/redux-provider";
import AuthProvider from "@/components/providers/auth-provider";
import AdminLayout from "@/components/admin/admin-layout";
import { getAuthSession } from "@/utils/auth";
import { Role } from "@/utils/constants";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Created by Ayush Kathariya",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (session?.user.role !== Role.Admin) {
    redirect("/access-denied");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProvider>
            <div>
              <AdminLayout />
              <div className="mt-10 lg:ml-[21.5rem]">{children}</div>
            </div>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
