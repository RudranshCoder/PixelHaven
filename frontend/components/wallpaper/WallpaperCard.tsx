"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bookmark, Download, Eye } from "lucide-react";
import { QualityBadge } from "@/components/ui/Badge";
import { cn, formatDownloads } from "@/lib/utils";
import { WallpaperWithRelations } from "@/types";

interface WallpaperCardProps {
  wallpaper: WallpaperWithRelations;
  priority?: boolean;
}

export default function WallpaperCard({ wallpaper, priority = false }: WallpaperCardProps) {
  const [saved, setSaved] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="masonry-item group relative">
      <Link href={`/wallpaper/${wallpaper.slug}`} className="block rounded-lg overflow-hidden bg-[#121826] border border-[#273244]/50 hover:border-[#5B7CFF]/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(91,124,255,0.15)]">
        {/* Image */}
        <div className="relative overflow-hidden">
          {/* Skeleton while loading */}
          {!imgLoaded && (
            <div className="skeleton w-full h-48" />
          )}
          <Image
            src={wallpaper.thumbnail_url || wallpaper.image_url}
            alt={wallpaper.title}
            width={wallpaper.width}
            height={wallpaper.height}
            priority={priority}
            onLoad={() => setImgLoaded(true)}
            className={cn(
              "w-full h-auto object-cover card-image transition-opacity duration-300",
              imgLoaded ? "opacity-100" : "opacity-0"
            )}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Top badges */}
          <div className="absolute top-2 left-2 flex gap-1.5">
            <QualityBadge quality={wallpaper.quality} />
            {wallpaper.is_featured && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-[5px] text-[9px] font-bold bg-gradient-to-r from-[#5B7CFF] to-[#8B5CF6] text-white uppercase tracking-wide">
                ⭐
              </span>
            )}
          </div>

          {/* Bottom info — visible on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-xs font-medium text-[#F5F7FB] truncate mb-1.5">
              {wallpaper.title}
            </p>
            <div className="flex items-center gap-2 text-[10px] text-[#A7B0C0]">
              <span className="flex items-center gap-1">
                <Download className="w-2.5 h-2.5" />
                {formatDownloads(wallpaper.downloads)}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-2.5 h-2.5" />
                {formatDownloads(wallpaper.views)}
              </span>
              <span className="ml-auto text-[#A7B0C0]/70">
                {wallpaper.aspect_ratio}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Save button — always visible */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setSaved((v) => !v);
        }}
        title={saved ? "Remove from saved" : "Save wallpaper"}
        className={cn(
          "absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100",
          saved
            ? "bg-[#5B7CFF] text-white shadow-[0_0_10px_rgba(91,124,255,0.4)]"
            : "bg-[#0B0F17]/70 backdrop-blur-sm text-[#A7B0C0] hover:text-[#F5F7FB] hover:bg-[#182033]"
        )}
      >
        <Bookmark className={cn("w-3.5 h-3.5", saved && "fill-current")} />
      </button>
    </div>
  );
}
