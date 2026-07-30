"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NextApp
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {status === "loading" ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
          ) : session ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-1"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                {session.user?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User Avatar"}
                    className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 font-semibold text-sm">
                    {session.user?.name?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300 max-w-[120px] truncate">
                  {session.user?.name}
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-900 dark:ring-white/10">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Signed in as</p>
                    <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                      {session.user?.email}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      signOut();
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 dark:text-red-400 dark:hover:bg-gray-800 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => signIn("google")}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all active:scale-[0.98]"
              >
                Login / Register
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50">
        <div className="flex justify-around py-3">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
