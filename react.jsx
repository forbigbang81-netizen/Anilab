import React, { useState, useEffect } from 'react';
import { Search, Bookmark, User, Play, Info } from 'lucide-react';

const CrunchyrollClone = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle Navbar opacity on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cr-black min-h-screen text-white font-sans selection:bg-cr-orange">
      
      {/* GLOBAL NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-colors duration-300 px-8 py-4 flex items-center justify-between ${scrolled ? 'bg-cr-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="flex items-center gap-8">
          <div className="text-cr-orange font-black text-2xl tracking-tighter">CRUNCHYROLL</div>
          <div className="hidden md:flex gap-6 font-semibold text-sm uppercase tracking-wide">
            <a href="#" className="hover:text-cr-orange">Browse</a>
            <a href="#" className="hover:text-cr-orange">Manga</a>
            <a href="#" className="hover:text-cr-orange">Games</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Search size={22} className="cursor-pointer hover:text-cr-orange" />
          <Bookmark size={22} className="cursor-pointer hover:text-cr-orange" />
          <div className="w-8 h-8 bg-cr-anthracite rounded-full border border-gray-700 flex items-center justify-center cursor-pointer">
            <User size={18} />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.alphacoders.com/133/1338421.png" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Art"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cr-black via-cr-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cr-black via-transparent to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col justify-center px-12 max-w-2xl gap-4">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter">JUJUTSU KAISEN</h1>
          <div className="flex gap-2 text-xs font-bold">
            <span className="bg-white text-black px-2 py-0.5 rounded-sm">SUB | DUB</span>
            <span className="text-cr-grey self-center">Series • 2 Seasons • TV-14</span>
          </div>
          <p className="text-lg text-gray-200 line-clamp-3">
            Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. 
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-cr-orange text-black font-black px-8 py-3 flex items-center gap-2 hover:brightness-110 transition">
              <Play fill="black" size={20} /> START WATCHING S1 E1
            </button>
            <button className="bg-cr-anthracite border border-gray-600 p-3 hover:bg-gray-700 transition">
              <Bookmark size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <main className="px-12 -mt-20 relative z-20 pb-20">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-cr-orange" />
          UP NEXT FOR YOU
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-poster bg-cr-anthracite overflow-hidden border-b-2 border-transparent group-hover:border-cr-orange transition-all duration-300">
                <img 
                  src={`https://via.placeholder.com/300x450?text=Anime+${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Thumbnail"
                />
                <div className="absolute top-2 left-2 bg-cr-orange text-[10px] font-black px-1.5 py-0.5 rounded-sm">
                  TOP PICK
                </div>
              </div>
              <h3 className="mt-2 font-bold text-sm truncate">Anime Title {i}</h3>
              <p className="text-cr-grey text-xs">Subtitled</p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default CrunchyrollClone;
