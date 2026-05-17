import { cn } from "@/lib/utils";
import { CopyrightType, Quality } from "@prisma/client";

type BadgeVariant =
  | "quality"
  | "device"
  | "copyright"
  | "trending"
  | "featured"
  | "new"
  | "ratio"
  | "default";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  quality:
    "bg-[#5B7CFF]/15 text-[#5B7CFF] border border-[#5B7CFF]/30",
  device:
    "bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30",
  copyright:
    "bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/25",
  trending:
    "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30",
  featured:
    "bg-gradient-to-r from-[#5B7CFF] to-[#8B5CF6] text-white border-0",
  new:
    "bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30",
  ratio:
    "bg-[#182033] text-[#A7B0C0] border border-[#273244]",
  default:
    "bg-[#182033] text-[#A7B0C0] border border-[#273244]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-[6px] text-[10px] font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function QualityBadge({ quality }: { quality: Quality }) {
  const labels: Record<Quality, string> = {
    HD: "HD",
    FULL_HD: "FHD",
    TWO_K: "2K",
    FOUR_K: "4K",
  };
  return <Badge variant="quality">{labels[quality]}</Badge>;
}

export function CopyrightBadge({ type }: { type: CopyrightType }) {
  const labels: Record<CopyrightType, string> = {
    ORIGINAL: "Original",
    LICENSED: "Licensed",
    USER_SUBMITTED: "Community",
    PUBLIC_DOMAIN: "Free Use",
  };
  return <Badge variant="copyright">{labels[type]}</Badge>;
}

export function TrendingBadge() {
  return <Badge variant="trending">🔥 Trending</Badge>;
}

export function NewBadge() {
  return <Badge variant="new">✨ New</Badge>;
}

export function FeaturedBadge() {
  return <Badge variant="featured">⭐ Featured</Badge>;
}
