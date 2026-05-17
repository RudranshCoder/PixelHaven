"use client";

import WallpaperCard from "./WallpaperCard";

const mockWallpapers = [
  { id: "1", title: "Cyber Neon City", slug: "cyber-neon-city", thumbnail_url: "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=800", resolution: "4K" },
  { id: "2", title: "Minimal Mountain", slug: "minimal-mountain", thumbnail_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800", resolution: "8K" },
  { id: "3", title: "Deep Space Nebula", slug: "deep-space-nebula", thumbnail_url: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800", resolution: "5K" },
  { id: "4", title: "Forest at Dawn", slug: "forest-at-dawn", thumbnail_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800", resolution: "4K" },
  { id: "5", title: "Abstract Flow", slug: "abstract-flow", thumbnail_url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", resolution: "UltraWide" },
  { id: "6", title: "Future Tech", slug: "future-tech", thumbnail_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", resolution: "4K" },
];

export default function MasonryGrid() {
  return (
    <div className="w-full px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-text-primary">Latest Wallpapers</h2>
        <div className="flex gap-4">
          <button className="text-sm font-medium text-primary hover:underline">Newest</button>
          <button className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Popular</button>
        </div>
      </div>
      
      <div className="masonry-grid">
        {mockWallpapers.map((wp) => (
          <WallpaperCard key={wp.id} wallpaper={wp} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-10 py-4 bg-surface border border-border hover:border-primary rounded-full font-bold text-text-primary transition-all active:scale-95 shadow-xl hover:shadow-primary/10">
          Load More
        </button>
      </div>
    </div>
  );
}
