'use client';

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="mt-5">
      <nav className="flex">
        <Link href="/">
          <h1 className="font-bold text-3xl ml-10">SEA WALL</h1>
        </Link>
      </nav>
    </div>
  )
}