import React from 'react';
import { Sun, Music2, Volume2 } from 'lucide-react';

export default function ControlPanel({ soundEnabled, setSoundEnabled, musicEnabled, setMusicEnabled, sunflowerCount }) {
  return (
    <div className="fixed top-4 right-4 z-40 flex flex-col gap-3 p-3 rounded-3xl glassmorphism shadow-xl max-w-xs">
      <div className="flex items-center justify-between gap-2 text-sm text-slate-700">
        <span className="font-semibold">Friendship control</span>
        <span className="text-sunflower-500">{sunflowerCount}/10 🌻</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`flex items-center gap-2 rounded-2xl px-3 py-2 w-full transition ${soundEnabled ? 'bg-sunflower-100 text-sunflower-800' : 'bg-white text-slate-500'}`}
        >
          <Volume2 size={18} />
          SFX
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setMusicEnabled(!musicEnabled)}
          className={`flex items-center gap-2 rounded-2xl px-3 py-2 w-full transition ${musicEnabled ? 'bg-sunflower-100 text-sunflower-800' : 'bg-white text-slate-500'}`}
        >
          <Music2 size={18} />
          Music
        </button>
      </div>
      <div className="flex items-center gap-2 text-yellow-700">
        <Sun size={18} />
        <span className="text-xs">Hidden petals unlock the final secret.</span>
      </div>
    </div>
  );
}
