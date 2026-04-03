import React, { useState, useRef } from 'react';
import { Settings, Layers, Server, Maximize, Play, Pause } from 'lucide-react';

const servers = [
  { id: 'S1', name: 'Hydra-1', url: 'https://server1.cdn.com/stream' },
  { id: 'S2', name: 'Kraken-2', url: 'https://server2.cdn.com/stream' }
];

export default function AniPlayer({ animeTitle, episodeNum }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentServer, setCurrentServer] = useState(servers[0]);
  const [mode, setMode] = useState('Sub'); // Sub or Dub
  const videoRef = useRef(null);

  const togglePlay = () => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="group relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
      {/* Actual Video Element */}
      <video 
        ref={videoRef}
        className="w-full h-full"
        src={`${currentServer.url}/${mode.toLowerCase()}.mp4`}
      />

      {/* Custom Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="p-3 bg-white text-black rounded-full hover:scale-110 transition">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <div>
              <h3 className="font-bold text-lg">{animeTitle}</h3>
              <p className="text-sm text-gray-400 font-mono">Episode {episodeNum}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Sub/Dub Toggle */}
            <div className="flex bg-white/10 rounded-lg p-1 border border-white/10">
              {['Sub', 'Dub'].map((type) => (
                <button
                  key={type}
                  onClick={() => setMode(type)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition ${mode === type ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Server Selector */}
            <div className="relative group/servers">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                <Server size={20} />
              </button>
              <div className="absolute bottom-full right-0 mb-2 w-48 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden hidden group-hover/servers:block shadow-2xl">
                {servers.map((s) => (
                  <button 
                    key={s.id}
                    onClick={() => setCurrentServer(s)}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-indigo-600 transition ${currentServer.id === s.id ? 'text-indigo-400' : ''}`}
                  >
                    {s.name} {currentServer.id === s.id && '•'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
