import { Quality, CopyrightType } from "@prisma/client";

export interface WallpaperWithRelations {
  id: string;
  title: string;
  slug: string;
  image_url: string;
  thumbnail_url: string;
  resolution: string;
  width: number;
  height: number;
  aspect_ratio: string;
  quality: Quality;
  file_size: number;
  views: number;
  downloads: number;
  is_featured: boolean;
  copyright_type: CopyrightType;
  color: string | null;
  device_type: string;
  category_id: string;
  created_at: Date;
  updated_at: Date;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  tags: {
    tag: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
}

export interface CategoryWithCount {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  cover_url: string | null;
  _count: {
    wallpapers: number;
  };
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  resolution?: string;
  aspect_ratio?: string;
  device_type?: string;
  quality?: Quality;
  sort?: "downloads" | "views" | "newest" | "featured";
  page?: number;
  limit?: number;
}

export type SortOption = "downloads" | "views" | "newest" | "featured";

export const QUALITY_LABELS: Record<Quality, string> = {
  HD: "HD",
  FULL_HD: "Full HD",
  TWO_K: "2K",
  FOUR_K: "4K",
};

export const COPYRIGHT_LABELS: Record<CopyrightType, string> = {
  ORIGINAL: "Original",
  LICENSED: "Licensed",
  USER_SUBMITTED: "User Submitted",
  PUBLIC_DOMAIN: "Public Domain",
};

export const DEVICE_TYPES = [
  { value: "all", label: "All Devices" },
  { value: "desktop", label: "Desktop" },
  { value: "mobile", label: "Mobile" },
];

export const ASPECT_RATIOS = [
  { value: "16:9", label: "16:9 Landscape" },
  { value: "9:16", label: "9:16 Portrait" },
  { value: "4:3", label: "4:3 Classic" },
  { value: "1:1", label: "1:1 Square" },
  { value: "21:9", label: "21:9 Ultrawide" },
];

export const QUALITY_OPTIONS = [
  { value: "HD", label: "HD (720p)" },
  { value: "FULL_HD", label: "Full HD (1080p)" },
  { value: "TWO_K", label: "2K (1440p)" },
  { value: "FOUR_K", label: "4K (2160p)" },
];

export const CATEGORIES = [
  { name: "Aesthetic", slug: "aesthetic", emoji: "✨" },
  { name: "Nature", slug: "nature", emoji: "🌿" },
  { name: "Anime", slug: "anime", emoji: "⛩️" },
  { name: "Gaming", slug: "gaming", emoji: "🎮" },
  { name: "Minimal", slug: "minimal", emoji: "◽" },
  { name: "Cars", slug: "cars", emoji: "🚗" },
  { name: "Space", slug: "space", emoji: "🌌" },
  { name: "Abstract", slug: "abstract", emoji: "🎨" },
  { name: "Dark", slug: "dark", emoji: "🌑" },
  { name: "Architecture", slug: "architecture", emoji: "🏛️" },
  { name: "Animals", slug: "animals", emoji: "🦁" },
  { name: "4K Ultra", slug: "4k-ultra", emoji: "💎" },
];
