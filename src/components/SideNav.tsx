import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IconHoverEffect } from "./IconHoverEffect";
import { VscAccount, VscHome, VscSignIn, VscSignOut } from "react-icons/vsc";

export default function SideNav() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <div>
      <nav className="sticky top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
          <li>
            <Link href="/">
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscHome height={8} width={8} />
                  <span className="hidden text-lg md:inline">Home</span>
                </span>
              </IconHoverEffect>
            </Link>
          </li>
          {user != null && (
            <Link href={`/profiles/${user.id}`}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscAccount height={8} width={8} />
                  <span className="hidden text-lg md:inline">Profile</span>
                </span>
              </IconHoverEffect>
            </Link>
          )}
          {user == null ? (
            <li>
              <button onClick={() => void signIn()}>
                <IconHoverEffect>
                  <span className="flex items-center gap-4">
                    <VscSignIn height={8} width={8} className="fill-green-700"/>
                    <span className="hidden text-lg md:inline text-green-700">Login</span>
                  </span>
                </IconHoverEffect>
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => void signOut()}><IconHoverEffect>
                  <span className="flex items-center gap-4">
                    <VscSignOut height={8} width={8} className="fill-red-700"/>
                    <span className="hidden text-lg md:inline text-red-700">Log Out</span>
                  </span>
                </IconHoverEffect></button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
