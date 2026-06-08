import React, { useState } from 'react';
import { motion } from 'framer-motion';

const theories = [
  'Muku had a secret biryani rehearsal.',
  'The trip was actually a surprise nap mission.',
  'She was abducted by a gang of late-night snack vendors.',
  'The map was replaced with a biryani delivery menu.',
];

export default function TripIncident({ addSunflower }) {
  const [showTheories, setShowTheories] = useState(false);

  return (
    <section id="trip" className="py-24 px-6 md:px-16 bg-sunflower-50/50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">The Mysterious Trip</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">A messy investigation board where the clues are more suspicious than the trip itself.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glassmorphism rounded-3xl p-10 shadow-xl border border-white/80">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Investigation board</h3>
          <ul className="space-y-4 text-slate-700">
            <li>• Friend informed everyone where she was.</li>
            <li>• Muku vanished.</li>
            <li>• Suddenly went on trip.</li>
            <li>• No proper announcement.</li>
            <li>• Case remains unsolved.</li>
          </ul>
          <button
            onClick={() => {
              setShowTheories(!showTheories);
              addSunflower(9);
            }}
            className="mt-8 rounded-full bg-sunflower-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600"
          >
            Reopen Investigation
          </button>
        </motion.div>
        <div className="glassmorphism rounded-3xl p-10 shadow-xl border border-white/80">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Conspiracy theories</h3>
          {showTheories ? (
            <ul className="space-y-3 text-slate-700">
              {theories.map((theory) => (
                <li key={theory}>• {theory}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-700">Press the button to reopen the case and expose the chaos.</p>
          )}
        </div>
      </div>
      <div className="mt-10 text-center">
        <button onClick={() => addSunflower(10)} className="rounded-full bg-sunflower-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600">
          Another sneaky sunflower
        </button>
      </div>
    </section>
  );
}
