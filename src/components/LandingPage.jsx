import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const phrases = [
  'Listener of bad dreams.',
  'Collector of colds.',
  'Professional trip informer forgetter.',
  'Biryani enthusiast.',
  'Certified gadha.',
];

export default function LandingPage({ addSunflower }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrase = phrases[phraseIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const hiddenSunflower = useMemo(() => Math.random() > 0.2, []);

  return (
    <section id="landing" className="relative min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,222,124,0.25),_transparent_40%),_linear-gradient(180deg,_#fff9e6_0%,_#f0e1cd_100%)] overflow-hidden px-6 py-10">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(255,244,179,0.8),_transparent_35%)]"></div>
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-5 handwritten">The Official Muku Archive</h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto text-slate-700 mb-8 leading-8">Documenting years of chatar patar, biryani betrayals, questionable decisions, and one very stubborn friend.</p>
          <div className="inline-flex items-center justify-center gap-2 text-xl md:text-2xl text-sunflower-800 handwritten pb-1 border-b border-sunflower-200 mb-10">
            <span className="typewriter-text max-w-[28rem] inline-block">
              {phrase}
            </span>
          </div>
          <a href="#timeline" className="inline-flex items-center justify-center rounded-full bg-sunflower-500 px-8 py-4 text-white font-semibold shadow-lg shadow-sunflower-200/60 transition hover:bg-sunflower-600">
            Enter the Archive
          </a>
        </motion.div>
      </div>
      {hiddenSunflower && (
        <button
          onClick={() => addSunflower(0)}
          className="absolute bottom-10 left-10 text-4xl animate-bounce"
          aria-label="Hidden sunflower"
        >
          🌻
        </button>
      )}
    </section>
  );
}
