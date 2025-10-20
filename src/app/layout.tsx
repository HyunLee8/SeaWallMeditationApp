"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../components/nav"
import SmootherScroll from '../components/SmoothScroll'
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();

  const showNavBar = pathname !== "/";

  return (
    <html lang="en">
      <body className="relative">
            <SmoothScroll/>
            <motion.main
              key={pathname}
              className={showNavBar ? "" : ""}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {showNavBar && (
                <div className="fixed w-full top-0 left-0 z-[9999]">
                  <NavBar />
                </div>
              )}
              {children}
            </motion.main>
      </body>
    </html>
  );
}
