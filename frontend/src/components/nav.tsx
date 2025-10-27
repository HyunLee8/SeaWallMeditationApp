'use client';

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="mt-5">
      <nav className="flex">
        <Link href="/">
          <h1 className="font-bold text-3xl ml-10">SEA WALL</h1>
        </Link>
        <div className="text-xs mt-2 ml-auto mr-10 space-x-4">
          <Link href="/Account">Account</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/subscription">Subscription</Link>
        </div>
      </nav>
    </div>
  )
}