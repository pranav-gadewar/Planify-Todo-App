"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-black border-b border-purple-900/40">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
          Planify
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-300 font-medium hover:text-purple-400 transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <Link href="/auth/login" className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:opacity-90 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-900/40 bg-black/90 backdrop-blur-md">
          <div className="flex flex-col items-center py-6 gap-6">

            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-300 text-lg font-medium hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}

            <Link href="/auth/login" className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md">
              Login
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}