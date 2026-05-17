import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PixelHaven — Premium Wallpapers for Mobile & Desktop",
    template: "%s | PixelHaven",
  },
  description:
    "Discover and download stunning HD, 4K, and ultra-wide wallpapers for your phone and desktop. Browse thousands of curated wallpapers by category, resolution, and style.",
  keywords: [
    "wallpapers",
    "4K wallpapers",
    "HD wallpapers",
    "phone wallpapers",
    "desktop wallpapers",
    "free wallpapers",
    "anime wallpapers",
    "nature wallpapers",
    "minimal wallpapers",
    "dark wallpapers",
  ],
  openGraph: {
    title: "PixelHaven — Premium Wallpapers",
    description: "Find the perfect wallpaper for every screen.",
    type: "website",
    siteName: "PixelHaven",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelHaven — Premium Wallpapers",
    description: "Find the perfect wallpaper for every screen.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0F17] text-[#F5F7FB] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
