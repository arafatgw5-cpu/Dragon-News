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
    <nav className="sticky top-0 z-50 w-full bg-gray-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Logo / Empty Left */}
        <div className="hidden sm:block sm:w-32"></div>

        {/* Menu Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium sm:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 transition ${
                pathname === link.href
                  ? "border-b-2 border-black font-semibold text-black"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* User + Login/Logout */}
        <div className="flex items-center justify-center gap-3 sm:justify-end sm:w-32">
          {!isPending && (
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
                  className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900">
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