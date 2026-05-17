"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Heart } from "lucide-react";

interface Wallpaper {
  id: string;
  title: string;
  slug: string;
  thumbnail_url: string;
  resolution: string;
}

export default function WallpaperCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <div className="masonry-item group relative overflow-hidden rounded-xl bg-surface border border-border animate-fade-in">
      <Link href={`/wallpaper/${wallpaper.slug}`}>
        <div className="relative aspect-auto overflow-hidden">
          <img
            src={wallpaper.thumbnail_url}
            alt={wallpaper.title}
            className="card-image w-full h-auto object-cover"
            loading="lazy"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-wider">
            {wallpaper.resolution}
          </div>

          {/* Actions */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-sm font-semibold text-text-primary truncate pr-2">
              {wallpaper.title}
            </h3>
            <div className="flex gap-2">
              <button className="p-2 bg-surface/80 backdrop-blur-md rounded-full hover:text-primary transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2 bg-primary rounded-full text-white hover:bg-primary-hover transition-colors shadow-lg">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
