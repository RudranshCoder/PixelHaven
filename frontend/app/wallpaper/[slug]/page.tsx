"use client";

import { useState } from "react";
import { Download, Heart, Share2, Info, ArrowLeft, ShieldCheck, Maximize } from "lucide-react";
import Link from "next/link";

export default function WallpaperDetail({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false);

  // Mock data for the demonstration
  const wallpaper = {
    title: "Neon Forest Explorer",
    author: "DigitalDreamer",
    resolution: "5120 x 2880",
    quality: "5K Ultra HD",
    size: "12.4 MB",
    downloads: "42,901",
    views: "158,290",
    category: "Cyberpunk",
    tags: ["Neon", "Forest", "Futuristic", "Art"],
    image_url: "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=2000",
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary pb-20">
      {/* Navigation */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-bg/50 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold text-sm">Back to Gallery</span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-surface rounded-full transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full transition-colors ${isLiked ? 'text-danger bg-danger/10' : 'hover:bg-surface'}`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Preview (8 columns) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="relative group overflow-hidden rounded-2xl bg-surface border border-border shadow-2xl">
            <img 
              src={wallpaper.image_url} 
              alt={wallpaper.title}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <button className="absolute bottom-6 right-6 p-3 bg-black/60 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                {wallpaper.author[0]}
              </div>
              <div>
                <h2 className="font-bold text-lg">{wallpaper.author}</h2>
                <p className="text-sm text-text-muted">Professional Artist</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-surface hover:bg-surface2 border border-border rounded-full font-bold text-sm transition-all">
              Follow
            </button>
          </div>
        </div>

        {/* Sidebar (4 columns) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-tight">{wallpaper.title}</h1>
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>PixelHaven Verified Quality</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface rounded-xl border border-border">
              <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Resolution</p>
              <p className="font-bold">{wallpaper.resolution}</p>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-border">
              <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Quality</p>
              <p className="font-bold">{wallpaper.quality}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-around py-4 bg-surface/30 rounded-xl border border-border">
            <div className="text-center">
              <p className="text-xl font-black">{wallpaper.downloads}</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider">Downloads</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-xl font-black">{wallpaper.views}</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider">Views</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-4">
            <button className="w-full py-5 bg-primary hover:bg-primary-hover text-white font-black text-lg rounded-2xl transition-all glow shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]">
              <Download className="w-6 h-6" />
              Download Wallpaper
            </button>
            <p className="text-[10px] text-center text-text-muted italic">
              Free for personal use. Attribution appreciated.
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {wallpaper.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-surface2 border border-border rounded-md text-xs font-medium hover:border-primary transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Report */}
          <div className="pt-6">
            <button className="flex items-center gap-2 text-[10px] text-text-muted hover:text-danger transition-colors">
              <Info className="w-3 h-3" />
              Report inappropriate content
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
