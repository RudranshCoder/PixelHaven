"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  Menu,
  Bookmark,
  ChevronDown,
  Sparkles,
  Monitor,
  Smartphone,
} from "lucide-react";
import { CATEGORIES } from "@/types";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Browse", href: "/search" },
  { label: "Categories", href: "/categories", hasDropdown: true },
  { label: "Trending", href: "/search?sort=downloads" },
  { label: "New", href: "/search?sort=newest" },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B0F17]/95 backdrop-blur-xl border-b border-[#273244]/60 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B7CFF] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_12px_rgba(91,124,255,0.4)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-[#F5F7FB] tracking-tight">
              Pixel<span className="text-[#5B7CFF]">Haven</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setCatOpen((v) => !v)}
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        catOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {catOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#121826] border border-[#273244] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-2 grid grid-cols-2 gap-1 animate-[scaleIn_0.15s_ease-out]">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/category/${cat.slug}`}
                          onClick={() => setCatOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
                        >
                          <span>{cat.emoji}</span>
                          <span>{cat.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop search bar */}
            <form
              onSubmit={handleSearch}
              className={cn(
                "hidden md:flex items-center gap-2 bg-[#121826] border border-[#273244] rounded-lg px-3 py-2 transition-all duration-300",
                searchOpen
                  ? "w-72 border-[#5B7CFF] shadow-[0_0_10px_rgba(91,124,255,0.2)]"
                  : "w-44"
              )}
            >
              <Search className="w-4 h-4 text-[#A7B0C0] shrink-0" />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
                placeholder="Search wallpapers…"
                className="bg-transparent text-sm text-[#F5F7FB] placeholder-[#A7B0C0] outline-none w-full"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")}>
                  <X className="w-3.5 h-3.5 text-[#A7B0C0] hover:text-[#F5F7FB]" />
                </button>
              )}
            </form>

            {/* Device quick filters */}
            <div className="hidden lg:flex items-center gap-1 border border-[#273244] rounded-lg p-0.5">
              <Link
                href="/search?device=desktop"
                className="p-1.5 rounded-md text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
                title="Desktop wallpapers"
              >
                <Monitor className="w-4 h-4" />
              </Link>
              <Link
                href="/search?device=mobile"
                className="p-1.5 rounded-md text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
                title="Mobile wallpapers"
              >
                <Smartphone className="w-4 h-4" />
              </Link>
            </div>

            {/* Saved */}
            <Link
              href="/saved"
              className="p-2 rounded-lg text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
              title="Saved wallpapers"
            >
              <Bookmark className="w-4.5 h-4.5" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#273244] space-y-1 animate-[slideUp_0.2s_ease-out]">
            {/* Mobile search */}
            <form onSubmit={handleSearch} className="flex items-center gap-2 bg-[#121826] border border-[#273244] rounded-lg px-3 py-2.5 mb-3">
              <Search className="w-4 h-4 text-[#A7B0C0] shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search wallpapers…"
                className="bg-transparent text-sm text-[#F5F7FB] placeholder-[#A7B0C0] outline-none w-full"
              />
            </form>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.hasDropdown ? "/categories" : link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link href="/search?device=desktop" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-[#A7B0C0] hover:bg-[#182033] border border-[#273244] transition-all">
                <Monitor className="w-4 h-4" /> Desktop
              </Link>
              <Link href="/search?device=mobile" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-[#A7B0C0] hover:bg-[#182033] border border-[#273244] transition-all">
                <Smartphone className="w-4 h-4" /> Mobile
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
