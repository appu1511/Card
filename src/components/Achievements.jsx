import React, { useState } from 'react';
import { motion } from 'framer-motion';

const badges = [
  { label: 'Listener of 4 A.M. Bad Dreams', detail: 'Doesn’t sleep until every nightmare becomes a saga.' },
  { label: 'Survived Endless Chatar Patar', detail: 'Could talk for days without a single coffee break.' },
  { label: 'Professional Trip Informer Forgetter', detail: 'Announces the trip after it’s already happening.' },
  { label: 'Monthly Cold Collector', detail: 'Collects more sniffles than souvenirs.' },
  { label: 'Biryani Over Friend Champion', detail: 'Chooses biryani over group calls 80% of the time.' },
  { label: 'Ignorer of Movie Recommendations', detail: 'Still recommends the worst movies with confidence.' },
];

export default function Achievements({ addSunflower }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="achievements" className="py-24 px-6 md:px-16 bg-soft-yellow/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl handwritten text-slate-900 mb-3">Muku's Achievements</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Badges earned for surviving friendship, bad decisions, and endless biryani debates.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge, index) => (
            <motion.button
              key={badge.label}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="glassmorphism p-7 rounded-3xl shadow-xl border border-white/80 text-left transition"
            >
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{badge.label}</h3>
              <p className="text-slate-600">Tap to see the real verdict.</p>
              {activeIndex === index && (
                <div className="mt-4 p-4 rounded-3xl bg-sunflower-50 border border-sunflower-100 text-slate-700">
                  {badge.detail}
                </div>
              )}
            </motion.button>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => addSunflower(2)} className="rounded-full bg-sunflower-500 px-8 py-3 text-white text-lg font-semibold shadow-lg transition hover:bg-sunflower-600">
            Find the sunflower
          </button>
        </div>
      </div>
    </section>
  );
}
