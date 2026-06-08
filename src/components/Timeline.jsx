import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Hours spent talking', value: 999, suffix: '+' },
  { label: 'Movies watched from recommendations', value: 1 },
  { label: 'Biryani loyalty', value: 100, suffix: '%' },
  { label: 'Trips informed beforehand', value: 50, suffix: '%' },
  { label: 'Monthly cold appearances', value: 12, note: 'Every month' },
  { label: 'Bad dreams discussed', value: 999, suffix: '+' },
];

const timeline = [
  { year: 'Year 1', note: 'Barely talked.' },
  { year: 'Year 2', note: 'Somehow started talking.' },
  { year: 'Year 3', note: 'Still talking somehow.' },
];

export default function Timeline({ addSunflower }) {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1300;
    const start = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(stats.map((stat) => Math.round((stat.value || 0) * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="timeline" className="relative py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl handwritten text-slate-900 mb-3">How did we get here?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A chaotic timeline and tiny stats from the archive of two friends who never stop talking.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white/80 glassmorphism p-8 rounded-3xl shadow-xl"
          >
            {timeline.map((item, idx) => (
              <div key={item.year} className="relative pl-8">
                <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-sunflower-500"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.year}</h3>
                <p className="text-slate-600 handwritten">{item.note}</p>
              </div>
            ))}
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-3xl p-6 shadow-lg border border-white/80"
              >
                <div className="text-4xl font-bold text-sunflower-600 mb-2">{counts[index]}{stat.suffix || ''}</div>
                <p className="text-slate-700">{stat.label}</p>
                {stat.note && <p className="text-sm text-slate-500 mt-2">{stat.note}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => addSunflower(1)}
        className="absolute right-8 top-8 text-3xl"
        aria-label="Hidden sunflower"
      >
        🌻
      </button>
    </section>
  );
}
