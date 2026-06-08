import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BudhaProfile({ addSunflower }) {
  const [accepted, setAccepted] = useState(false);

  return (
    <section id="budha" className="py-24 px-6 md:px-16 bg-[radial-gradient(circle_at_top_left,_rgba(255,245,205,0.9),_transparent_40%)]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">The Legend of Budha</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">A comedy profile for the one who thinks candlelight dinners and biryani can solve everything.</p>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glassmorphism rounded-3xl border border-white/80 p-10 shadow-xl max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-center text-slate-900">
            <h3 className="text-3xl font-semibold mb-2">Budha</h3>
            <p className="text-slate-600">Professional candlelight dinner planner</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 text-slate-700">
            <div className="rounded-3xl bg-white/90 p-5">Occupation: Professional candlelight dinner planner</div>
            <div className="rounded-3xl bg-white/90 p-5">Special Skill: Cooking Muku's favorite biryani</div>
            <div className="rounded-3xl bg-white/90 p-5">Relationship Status: Still waiting</div>
            <div className="rounded-3xl bg-white/90 p-5">Compatibility: 100%</div>
          </div>
          <button
            onClick={() => {
              setAccepted(true);
              addSunflower(8);
            }}
            className="mx-auto rounded-full bg-sunflower-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600"
          >
            Accept Proposal
          </button>
          {accepted && (
            <div className="mt-6 rounded-3xl bg-sunflower-50 border border-sunflower-200 p-6 text-slate-700">
              <p className="text-xl font-semibold text-slate-900">Wedding invitation in progress...</p>
              <p className="mt-3">Pure comedy section unlocked. Budha is still waiting for the RSVP.</p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
