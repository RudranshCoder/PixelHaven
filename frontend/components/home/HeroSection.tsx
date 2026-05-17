"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary animate-fade-in">
          Elevate Your <span className="text-transparent bg-clip-text gradient-primary">Digital Space</span>
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
          Discover thousands of premium 4K, 5K, and Ultra-Wide wallpapers curated for your unique style.
        </p>

        <form 
          onSubmit={handleSearch}
          className="relative max-w-2xl mx-auto mt-10 animate-fade-in [animation-delay:200ms]"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-6 text-text-muted w-6 h-6" />
            <input
              type="text"
              placeholder="Search for wallpapers (e.g. Cyberpunk, Nature, 8K)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-16 pl-16 pr-32 bg-surface border border-border rounded-full text-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-text-muted/50"
            />
            <button
              type="submit"
              className="absolute right-3 px-8 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-all glow active:scale-95"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-4 pt-4 text-sm text-text-muted animate-fade-in [animation-delay:300ms]">
          <span>Trending:</span>
          {["Cyberpunk", "Minimal", "Anime", "Dark"].map((tag) => (
            <a 
              key={tag} 
              href={`/search?q=${tag}`}
              className="hover:text-primary transition-colors border-b border-transparent hover:border-primary"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
