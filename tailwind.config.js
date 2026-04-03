import React, { useState } from 'react';
import { Ghost, Play, Shield, User } from 'lucide-react'; // Using Lucide for clean iconography

const AuthLanding = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      {/* 1. Animated Parallax Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-pink-900/50 mix-blend-overlay" />
        <img 
          src="https://images.alphacoders.com/605/605333.jpg" 
          className="w-full h-full object-cover scale-110 animate-pulse-slow"
          alt="Anime Backdrop"
        />
      </div>

      {/* 2. Authentication Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
        {/* Favicon / Logo Above Button */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full shadow-lg mb-4">
            <Ghost size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            AniDoki
          </h1>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Email or Username</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl focus:border-indigo-500 outline-none transition-all text-white"
              placeholder="Enter your credentials..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 bg-black/40 border border-white/5 rounded-xl focus:border-indigo-500 outline-none transition-all text-white"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="button"
            onClick={onLogin}
            className="w-full py-3 mt-4 font-bold text-white bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            {isLogin ? 'Sign In' : 'Join the Community'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already a member? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};
