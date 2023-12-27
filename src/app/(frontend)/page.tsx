import React from "react";
import { getAuthSession } from "@/utils/auth";
import SignInButton from "@/components/buttons/signin-button";
import SignOutButton from "@/components/buttons/signout-button";

export default async function Page() {
  const session = await getAuthSession();

  return (
    <div>
      <h1>Home</h1>
      {session ? <SignOutButton /> : <SignInButton />}
    </div>
  );
}
