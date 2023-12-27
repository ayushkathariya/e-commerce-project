import AccessDenied from "@/components/access-denied";
import { getAuthSession } from "@/utils/auth";
import { Role } from "@/utils/constants";

export default async function Page() {
  const session = await getAuthSession();

  if (session?.user.role !== Role.Admin) {
    return <AccessDenied />;
  }

  return <p>Welcome in Admin Page</p>;
}
