import Link from "next/link";
import { Sparkles, Github, Twitter, Mail, Shield } from "lucide-react";
import { CATEGORIES } from "@/types";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F17] border-t border-[#273244] mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B7CFF] to-[#8B5CF6] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                Pixel<span className="text-[#5B7CFF]">Haven</span>
              </span>
            </Link>
            <p className="text-sm text-[#A7B0C0] leading-relaxed mb-4">
              Premium wallpapers for every screen. Curated, categorized, and
              always free to download.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="mailto:hello@pixelhaven.app" className="p-2 rounded-lg text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033] transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F7FB] mb-4 uppercase tracking-wider">
              Categories
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-[#A7B0C0] hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{cat.emoji}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F7FB] mb-4 uppercase tracking-wider">
              More
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-[#A7B0C0] hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{cat.emoji}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F7FB] mb-4 uppercase tracking-wider">
              Legal & Support
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About PixelHaven", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "DMCA / Copyright", href: "/dmca" },
                { label: "Report Wallpaper", href: "/report" },
                { label: "Admin", href: "/admin" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A7B0C0] hover:text-[#F5F7FB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#273244] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A7B0C0]">
            © {new Date().getFullYear()} PixelHaven. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#A7B0C0]">
            <Shield className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>All wallpapers are labeled with their copyright status.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
