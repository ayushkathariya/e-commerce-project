import { getAuthSession } from "@/utils/auth";
import { Role } from "@/utils/constants";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getAuthSession();

  if (session?.user.role !== Role.Admin) {
    redirect("/access-denied");
  }

  return (
    <>
      <h1>Welcome Admin</h1>
      <Separator orientation="vertical" className="h-full w-2" />
    </>
  );
}
