"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const param = usePathname();

  return (
    <header className="w-full font-sans z-50 absolute top-0 left-0 text-white">
      {/* Container matching standard layout widths */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:px-12 md:py-8">
        {/* Navigation Wrapper */}
        <nav className="flex items-center justify-between w-full text-xs uppercase tracking-[0.2em] font-medium">
          {/* Left Links */}
          <div className="flex gap-8 items-center">
            <Link
              href="/shop"
              className={`${
                param === "/shop" ? "bg-black" : ""
              } hover:scale-105 rounded-full p-2 font-bold transition duration-200`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`${
                param === "/about" ? "bg-black" : ""
              } hover:scale-105 rounded-full p-2 font-bold transition duration-200`}
            >
              About
            </Link>
          </div>

          <Link
            href="/"
            className="hover:scale-105 hover:btn text-xl  tracking-[0.25em] md:text-2xl rounded-full p-2 font-bold transition duration-200"
          >
            ELÀRÀ
          </Link>

          {/* Right Links */}
          <div className="flex gap-8 items-center">
            <Link
              href="/login"
              className={`${
                param === "/login" ? "bg-black" : ""
              } hover:scale-105 rounded-full p-2 font-bold transition duration-200`}
            >
              Login
            </Link>
            <Link
              href="/blog"
              className={`${
                param === "/blog" ? "bg-black" : ""
              } hover:scale-105 rounded-full p-2 font-bold transition duration-200`}
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
