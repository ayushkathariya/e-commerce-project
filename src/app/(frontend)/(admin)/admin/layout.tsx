import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/(frontend)/(user)/globals.css";
import ReduxProvider from "@/components/providers/redux-provider";
import AuthProvider from "@/components/providers/auth-provider";
import AdminLayout from "@/components/admin-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Application",
  description: "Created by Ayush Kathariya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
