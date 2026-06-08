import React from 'react';

export default function SunflowerCollector({ foundSunflowers }) {
  return (
    <div className="fixed bottom-4 left-4 z-40 glassmorphism rounded-3xl border border-white/50 p-4 shadow-2xl max-w-sm">
      <h3 className="handwritten text-lg text-sunflower-600 mb-2">Secret Sunflower Hunt</h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 13 }).map((_, index) => (
          <span
            key={index}
            className={`rounded-full w-8 h-8 flex items-center justify-center transition ${foundSunflowers.includes(index) ? 'bg-sunflower-400 text-white' : 'bg-white/70 text-slate-300'}`}
          >
            🌻
          </span>
        ))}
      </div>
    </div>
  );
}
