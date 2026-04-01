import React, { useState } from 'react';
import { Play, Info, Flame, LayoutGrid, Library, Users, Bell } from 'lucide-react';

const AnimeDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-100 font-sans selection:bg-cyan-500/30">
      
      {/* 1. GLASSMORPHIC SIDEBAR */}
      <aside className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 border-r border-white/10 backdrop-blur-xl bg-black/20 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
             onMouseEnter={() => setSidebarOpen(true)}
             onMouseLeave={() => setSidebarOpen(false)}>
        <nav className="flex flex-col items-center py-8 gap-10 h-full">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20" />
          
          <div className="flex flex-col gap-8 flex-1">
            <NavItem icon={<LayoutGrid size={24} />} label="Home" active isOpen={isSidebarOpen} />
            <NavItem icon={<Flame size={24} />} label="Seasonal" isOpen={isSidebarOpen} />
            <NavItem icon={<Library size={24} />} label="Library" isOpen={isSidebarOpen} />
            <NavItem icon={<Users size={24} />} label="Community" isOpen={isSidebarOpen} />
          </div>

          <div className="mb-4">
             <Bell size={24} className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors" />
          </div>
        </nav>
      </aside>

      <main className="pl-20">
        
        {/* 2. PARALLAX HERO SECTION */}
        <section className="relative h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E14]/50 to-[#0B0E14] z-10" />
          <img 
            src="https://images.alphacoders.com/131/1318047.jpeg" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          
          <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-16 max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-widest">
                Trending #1
              </span>
              <span className="flex items-center gap-1 text-orange-400 font-semibold">
                <Flame size={16} /> 42.5k Hype
              </span>
            </div>
            <h1 className="text-7xl font-black mb-6 tracking-tight leading-none italic">JUJUTSU KAISEN</h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl line-clamp-3 leading-relaxed">
              Experience the Shibuya Incident. A series of unfortunate events unfolds as curses and sorcerers collide in the heart of Tokyo.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-all active:scale-95 shadow-xl shadow-white/5">
                <Play fill="currentColor" /> WATCH NOW
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                <Info /> DETAILS
              </button>
            </div>
          </div>
        </section>

        {/* 3. ASYMMETRIC MASONRY GRID */}
        <section className="px-16 py-12">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold border-l-4 border-cyan-500 pl-4">Continue Watching</h2>
            <span className="text-cyan-400 hover:underline cursor-pointer font-medium">View All Schedule</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimeCard title="Chainsaw Man" image="https://images5.alphacoders.com/127/1273390.jpg" episode="Ep 12" />
            <AnimeCard title="Cyberpunk: Edgerunners" image="https://images8.alphacoders.com/125/1251642.jpg" episode="Ep 10" />
            <AnimeCard title="Oshi no Ko" image="https://images8.alphacoders.com/131/1310185.png" episode="Ep 04" />
            <AnimeCard title="Solo Leveling" image="https://images.alphacoders.com/134/1344606.jpeg" episode="Ep 08" />
          </div>
        </section>

      </main>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

const NavItem = ({ icon, label, active, isOpen }) => (
  <div className={`flex items-center gap-4 cursor-pointer group transition-all px-4 py-2 rounded-xl ${active ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>
    <div className="min-w-[24px]">{icon}</div>
    {isOpen && <span className="font-bold tracking-wide transition-opacity duration-300">{label}</span>}
  </div>
);

const AnimeCard = ({ title, image, episode }) => (
  <div className="group relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2">
    <img src={image} alt={title} className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    <div className="absolute bottom-0 left-0 p-5 w-full">
      <div className="text-xs font-bold text-cyan-400 uppercase mb-1">{episode}</div>
      <div className="text-lg font-bold group-hover:text-cyan-400 transition-colors truncate">{title}</div>
    </div>
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all" />
  </div>
);

export default AnimeDashboard;
