import React, { useState } from 'react';
import { motion } from 'framer-motion';

const notes = [
  'Random late-night talks.',
  'Bad dreams at 4 a.m.',
  'Random arguments over nothing.',
  'Overthinking sessions that turned into snacks.',
  'Laughing at nothing and everything.',
  'Biryani betrayal analysis at 3 a.m.',
];

export default function MemoryWall({ addSunflower }) {
  const [active, setActive] = useState(null);

  return (
    <section id="memory" className="py-24 px-6 md:px-16 bg-[radial-gradient(circle_at_bottom,_rgba(255,244,206,0.8),transparent_40%)]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">Memory Wall</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Sticky notes pinned to the board from the days nobody really knew what was happening.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, index) => (
          <motion.button
            key={note}
            onClick={() => setActive(active === index ? null : index)}
            whileHover={{ y: -5 }}
            className="relative rounded-3xl bg-[#fff4c8] p-8 shadow-2xl border border-[#ffe3a5] text-left"
          >
            <div className="absolute -top-3 left-6 w-16 h-6 bg-[#f5d67f] rotate-2 rounded-b-full"></div>
            <p className="text-slate-900 font-semibold mb-3">{note}</p>
            {active === index && <p className="text-slate-700">This memory glows brighter every time Muku laughs at nothing.</p>}
          </motion.button>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button onClick={() => addSunflower(12)} className="rounded-full bg-sunflower-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600">
          Pin the secret sunflower
        </button>
      </div>
    </section>
  );
}
