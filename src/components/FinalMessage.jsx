import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export default function FinalMessage({ sunflowerCount, totalSunflowers }) {
  useEffect(() => {
    if (sunflowerCount >= totalSunflowers) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  }, [sunflowerCount, totalSunflowers]);

  return (
    <section id="final" className="py-24 px-6 md:px-16 bg-[radial-gradient(circle_at_center,_rgba(255,244,179,0.95),_transparent_55%)]">
      <div className="max-w-5xl mx-auto text-center glassmorphism rounded-3xl border border-white/80 p-12 shadow-2xl">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="text-6xl mb-6">🌻🌻🌻</div>
          <h2 className="text-4xl handwritten text-slate-900 mb-6">Final Secret Section</h2>
          <p className="text-slate-700 leading-9 text-left max-w-3xl mx-auto">Thank you for listening to my endless chatar patar, my overthinking, my bad dreams, and all the things that probably made no sense.</p>
          <p className="text-slate-700 leading-9 text-left max-w-3xl mx-auto mt-5">Thank you for being one of the good parts of my college life.</p>
          <p className="text-slate-700 leading-9 text-left max-w-3xl mx-auto mt-5">You always say everyone leaves. So here's your notice: I'm still here.</p>
          <p className="mt-8 text-slate-900 font-semibold text-xl">Happy Best Friends Day, gadha. 🌻</p>
        </motion.div>
      </div>
    </section>
  );
}
