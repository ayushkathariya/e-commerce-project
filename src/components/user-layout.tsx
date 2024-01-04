import { getAuthSession } from "@/utils/auth";
import SignOutButton from "./buttons/signout-button";
import SignInButton from "./buttons/signin-button";
import Cart from "./buttons/cart-sidebar";

export default async function UserLayout() {
  const session = await getAuthSession();

  return (
    <nav className="flex justify-between">
      <div>
        <h1>Home</h1>
      </div>
      <div className="flex items-center gap-4">
        <span>
          <Cart />
        </span>
        <span>{session ? <SignOutButton /> : <SignInButton />}</span>
      </div>
    </nav>
  );
}
