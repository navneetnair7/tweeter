import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SideNav() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <div>
      <nav className="sticky top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
          <li>
            <Link href="/">Home</Link>
          </li>
          {user != null && <Link href={`/profiles/${user.id}`}>Profile</Link>}
          {user == null ? (
            <li>
              <button onClick={() => void signIn()}>Log In</button>
            </li>
          ) : (
            <li>
              <button onClick={() => void signOut()}>Log Out</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
