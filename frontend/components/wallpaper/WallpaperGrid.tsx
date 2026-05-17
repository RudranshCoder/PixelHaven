import WallpaperCard from "./WallpaperCard";
import { WallpaperWithRelations } from "@/types";

interface WallpaperGridProps {
  wallpapers: WallpaperWithRelations[];
  priorityCount?: number;
}

export default function WallpaperGrid({
  wallpapers,
  priorityCount = 4,
}: WallpaperGridProps) {
  if (wallpapers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#121826] border border-[#273244] flex items-center justify-center mb-4 text-3xl">
          🖼️
        </div>
        <h3 className="text-lg font-semibold text-[#F5F7FB] mb-2">
          No wallpapers found
        </h3>
        <p className="text-sm text-[#A7B0C0] max-w-xs">
          Try adjusting your filters or search query to discover more wallpapers.
        </p>
      </div>
    );
  }

  return (
    <div className="masonry-grid">
      {wallpapers.map((wallpaper, i) => (
        <WallpaperCard
          key={wallpaper.id}
          wallpaper={wallpaper}
          priority={i < priorityCount}
        />
      ))}
    </div>
  );
}
