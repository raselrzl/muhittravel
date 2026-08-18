"use client";

import Link from "next/link";
import { Compass, Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "./Navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030712]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center border border-blue-400/20 bg-blue-500/10 transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
            <Compass className="h-5 w-5 text-blue-400 transition-transform duration-500 group-hover:rotate-45" />
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-white">
              MK<span className="text-blue-400">World</span>
            </div>

            <div className="hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:block">
              Study • Travel • Explore
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.2)] transition hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] sm:flex"
        >
          Talk to Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-blue-400/30 hover:text-white md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#030712]/95 px-5 py-5 backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-7xl">
            <Navigation mobile onNavigate={() => setMobileOpen(false)} />

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex h-12 items-center justify-center bg-blue-500 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
