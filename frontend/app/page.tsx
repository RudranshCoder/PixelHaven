import HeroSection from "@/components/home/HeroSection";
import CategoryChips from "@/components/home/CategoryChips";
import MasonryGrid from "@/components/home/MasonryGrid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <header className="fixed top-0 left-0 right-0 h-16 bg-bg/50 backdrop-blur-xl border-b border-border z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg rotate-12 flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30">
            P
          </div>
          <span className="text-xl font-black tracking-tighter text-text-primary">
            PIXEL<span className="text-primary">HAVEN</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-text-muted">
          <a href="#" className="text-text-primary hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-text-primary transition-colors">Categories</a>
          <a href="#" className="hover:text-text-primary transition-colors">Premium</a>
          <a href="#" className="hover:text-text-primary transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-text-muted hover:text-text-primary transition-colors">
            Login
          </button>
          <button className="px-5 py-2 bg-text-primary text-bg font-bold rounded-full text-sm hover:bg-primary hover:text-white transition-all active:scale-95">
            Join Now
          </button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <HeroSection />
        <CategoryChips />
        <MasonryGrid />
      </main>

      <footer className="w-full py-12 px-6 border-t border-border mt-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center font-bold text-[12px] text-white">P</div>
            <span className="text-lg font-black tracking-tighter text-text-primary">PIXELHAVEN</span>
          </div>
          <p className="text-sm text-text-muted">
            The worlds most beautiful wallpaper platform. Designed for the aesthetics.
          </p>
          <div className="flex justify-center gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Contact</a>
          </div>
          <p className="text-[10px] text-text-muted/50 pt-4">
            © 2026 PixelHaven. All rights reserved.BY Rudransh
          </p>
        </div>
      </footer>
    </div>
  );
}
