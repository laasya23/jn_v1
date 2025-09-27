"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
export function Navbar() {
  return (
    <header className="sticky top-0 border-b z-50 w-full bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/images/logo.png"
            alt="JNB Networks Logo"
            width={100}
            height={25}
            className="object-contain dark:bg-white dark:rounded-md"
          />
        </Link>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="p-2 -m-2 inline-flex items-center justify-center rounded-md hover:bg-accent"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem asChild>
                <Link href="/" className="w-full cursor-pointer">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#plans" className="w-full cursor-pointer">
                  Plans
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#contact" className="w-full cursor-pointer">
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://user.jnetworksbroadband.com/"
                  className="w-full cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User Portal
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/#plans"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Plans
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="https://user.jnetworksbroadband.com/"
            className="text-sm font-medium transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Portal
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
