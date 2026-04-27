"use client";

import Image from "next/image";
import Link from "next/link";
import defaultUser from "@/assets/user.png";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const loggedInUser = session?.user;

  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
  ];

  return (
    <nav className="w-full bg-gray-100 sticky top-0 z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-3">
        <div></div>

        <div className="flex justify-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 ${
                pathname === link.href
                  ? "border-b-2 border-black font-semibold text-black"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-end items-center gap-3">
          {isPending ? null : (
            <>
              <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-500 bg-white">
                <Image
                  src={loggedInUser?.image || defaultUser}
                  alt={loggedInUser?.name || "user"}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>

              {loggedInUser ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-6 py-2 text-sm font-semibold text-white"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="bg-gray-800 px-6 py-2 text-sm font-semibold text-white">
                    Login
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;