import React, { useState } from 'react';
import { motion } from 'framer-motion';

const recommendations = [
  { label: 'Movies', message: 'Recommendation ignored successfully.' },
  { label: 'Series', message: 'System confirms Muku watched something else.' },
  { label: 'Advice', message: 'Ignored with a 100% success rate.' },
  { label: 'Health Tips', message: 'Medicine was replaced by biryani.' },
  { label: 'Sleep Schedule', message: 'Does not compute.' },
  { label: 'Every card', message: 'What recommendation? Not today.' },
];

export default function ThingsIgnored({ addSunflower }) {
  const [clicked, setClicked] = useState(null);

  return (
    <section id="ignored" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">Things Muku Never Listens To</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">A wall of the best and most ignored suggestions from the archive.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => setClicked(index)}
            whileHover={{ y: -5 }}
            className="relative rounded-3xl bg-white/90 glassmorphism border border-slate-200 p-8 shadow-lg text-left min-h-[220px]"
          >
            <div className="absolute top-4 right-4 text-4xl rotate-[-12deg] text-red-500 font-bold stamp">IGNORED</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.label}</h3>
            <p className="text-slate-600">Click to reveal the status.</p>
            {clicked === index && (
              <div className="mt-4 rounded-3xl bg-sunflower-50 p-4 border border-sunflower-100 text-slate-700">
                {item.message}
              </div>
            )}
          </motion.button>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button onClick={() => addSunflower(3)} className="rounded-full bg-sunflower-500 px-8 py-3 text-white text-lg font-semibold shadow-lg transition hover:bg-sunflower-600">
          Spot the sunflower
        </button>
      </div>
    </section>
  );
}
