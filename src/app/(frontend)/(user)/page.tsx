import Link from "next/link";
import { getAuthSession } from "@/utils/auth";
import SignInButton from "@/components/buttons/signin-button";
import SignOutButton from "@/components/buttons/signout-button";

export default async function Page() {
  const session = await getAuthSession();

  return (
    <div>
      <h1>Home</h1>
      {session ? <SignOutButton /> : <SignInButton />}
      <Link className="underline ml-6" href="/admin">
        Admin
      </Link>
    </div>
  );
}
