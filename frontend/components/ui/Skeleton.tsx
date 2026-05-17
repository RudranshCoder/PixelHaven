import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton rounded-md",
        className
      )}
    />
  );
}

export function WallpaperCardSkeleton() {
  const heights = ["h-48", "h-64", "h-52", "h-72", "h-56", "h-44"];
  const randomHeight = heights[Math.floor(Math.random() * heights.length)];

  return (
    <div className="masonry-item">
      <div className={cn("skeleton rounded-lg w-full", randomHeight)} />
    </div>
  );
}

export function WallpaperGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="masonry-grid">
      {Array.from({ length: count }).map((_, i) => (
        <WallpaperCardSkeleton key={i} />
      ))}
    </div>
  );
}
