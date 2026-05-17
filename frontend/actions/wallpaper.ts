import { prisma } from "@/lib/db";
import { SearchFilters, WallpaperWithRelations } from "@/types";
import { Quality } from "@prisma/client";

const wallpaperInclude = {
  category: { select: { id: true, name: true, slug: true } },
  tags: { include: { tag: { select: { id: true, name: true, slug: true } } } },
};

export async function getWallpapers(filters: SearchFilters = {}): Promise<{
  wallpapers: WallpaperWithRelations[];
  total: number;
}> {
  const {
    query,
    category,
    device_type,
    quality,
    aspect_ratio,
    sort = "newest",
    page = 1,
    limit = 24,
  } = filters;

  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};

  if (query) {
    where.OR = [
      { title: { contains: query, mode: "insensitive" } },
      { tags: { some: { tag: { name: { contains: query, mode: "insensitive" } } } } },
      { category: { name: { contains: query, mode: "insensitive" } } },
    ];
  }

  if (category) where.category = { slug: category };
  if (device_type && device_type !== "all") {
    where.OR = [{ device_type }, { device_type: "both" }];
  }
  if (quality) where.quality = quality;
  if (aspect_ratio) where.aspect_ratio = aspect_ratio;

  const orderBy =
    sort === "downloads"
      ? { downloads: "desc" as const }
      : sort === "views"
      ? { views: "desc" as const }
      : sort === "featured"
      ? { is_featured: "desc" as const }
      : { created_at: "desc" as const };

  const [wallpapers, total] = await Promise.all([
    prisma.wallpaper.findMany({
      where,
      include: wallpaperInclude,
      orderBy,
      skip,
      take: limit,
    }),
    prisma.wallpaper.count({ where }),
  ]);

  return { wallpapers: wallpapers as WallpaperWithRelations[], total };
}

export async function getWallpaperBySlug(
  slug: string
): Promise<WallpaperWithRelations | null> {
  const wallpaper = await prisma.wallpaper.findUnique({
    where: { slug },
    include: wallpaperInclude,
  });
  return wallpaper as WallpaperWithRelations | null;
}

export async function getFeaturedWallpapers(
  limit = 12
): Promise<WallpaperWithRelations[]> {
  const wallpapers = await prisma.wallpaper.findMany({
    where: { is_featured: true },
    include: wallpaperInclude,
    orderBy: { downloads: "desc" },
    take: limit,
  });
  return wallpapers as WallpaperWithRelations[];
}

export async function getTrendingWallpapers(
  limit = 12
): Promise<WallpaperWithRelations[]> {
  const wallpapers = await prisma.wallpaper.findMany({
    include: wallpaperInclude,
    orderBy: { downloads: "desc" },
    take: limit,
  });
  return wallpapers as WallpaperWithRelations[];
}

export async function getLatestWallpapers(
  limit = 24
): Promise<WallpaperWithRelations[]> {
  const wallpapers = await prisma.wallpaper.findMany({
    include: wallpaperInclude,
    orderBy: { created_at: "desc" },
    take: limit,
  });
  return wallpapers as WallpaperWithRelations[];
}

export async function getSimilarWallpapers(
  wallpaperId: string,
  categoryId: string,
  limit = 8
): Promise<WallpaperWithRelations[]> {
  const wallpapers = await prisma.wallpaper.findMany({
    where: {
      category_id: categoryId,
      id: { not: wallpaperId },
    },
    include: wallpaperInclude,
    orderBy: { downloads: "desc" },
    take: limit,
  });
  return wallpapers as WallpaperWithRelations[];
}

export async function incrementWallpaperViews(id: string) {
  await prisma.wallpaper.update({
    where: { id },
    data: { views: { increment: 1 } },
  });
}

export async function getCategories() {
  return prisma.category.findMany({
    include: { _count: { select: { wallpapers: true } } },
    orderBy: { name: "asc" },
  });
}

export async function getPopularTags(limit = 20) {
  return prisma.tag.findMany({
    include: { _count: { select: { wallpapers: true } } },
    orderBy: { wallpapers: { _count: "desc" } },
    take: limit,
  });
}
