"use client";

import Link from "next/link";

const categories = [
  { name: "All", slug: "all", emoji: "✨" },
  { name: "Abstract", slug: "abstract", emoji: "🎨" },
  { name: "Cyberpunk", slug: "cyberpunk", emoji: "🤖" },
  { name: "Nature", slug: "nature", emoji: "🌿" },
  { name: "Minimal", slug: "minimal", emoji: "◻️" },
  { name: "Anime", slug: "anime", emoji: "🌸" },
  { name: "Space", slug: "space", emoji: "🚀" },
  { name: "Cars", slug: "cars", emoji: "🏎️" },
  { name: "Architecture", slug: "architecture", emoji: "🏛️" },
  { name: "Animals", slug: "animals", emoji: "🐾" },
];

export default function CategoryChips() {
  return (
    <div className="w-full py-6 px-6 overflow-hidden">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug === "all" ? "/" : `/category/${cat.slug}`}
            className="flex items-center gap-2 px-6 py-3 bg-surface border border-border hover:border-primary hover:bg-surface2 rounded-full whitespace-nowrap transition-all group active:scale-95"
          >
            <span className="text-xl group-hover:scale-125 transition-transform">{cat.emoji}</span>
            <span className="font-medium text-text-muted group-hover:text-text-primary">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
