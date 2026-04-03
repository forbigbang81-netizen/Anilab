import React, { useState } from 'react';
import { Heart, MessageCircle, Reply } from 'lucide-react';

export default function CommentSection() {
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);

  const characters = [
    { name: 'Gojo', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gojo' },
    { name: 'Makima', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Makima' },
    { name: 'Zenitsu', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zenitsu' }
  ];

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Community Discussion</h2>
        <div className="flex -space-x-3">
          {characters.map(c => (
            <img key={c.name} src={c.img} className="w-8 h-8 rounded-full border-2 border-[#0f0f0f]" alt={c.name} />
          ))}
        </div>
      </div>

      {/* Single Comment Example */}
      <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5">
        <div className="flex gap-4">
          <img src={characters[0].img} className="w-10 h-10 rounded-full bg-indigo-500/20 p-1" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-indigo-400">LimitlessUser</span>
              <span className="text-xs text-gray-500">2h ago</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              That animation in the final sequence was insane! AniDoki's servers are actually holding up for once lol.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <button 
                onClick={() => {setLikes(hasLiked ? likes-1 : likes+1); setHasLiked(!hasLiked)}}
                className={`flex items-center gap-1.5 text-xs font-bold transition ${hasLiked ? 'text-pink-500' : 'text-gray-500'}`}
              >
                <Heart size={14} fill={hasLiked ? "currentColor" : "none"} /> {likes}
              </button>
              <button className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-white transition">
                <Reply size={14} /> Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
