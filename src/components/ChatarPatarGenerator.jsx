import React, { useState } from 'react';
import { motion } from 'framer-motion';

const topics = [
  'Why pigeons are suspicious.',
  'Why sleep is important.',
  'Why biryani isn’t a personality.',
  'Things Muku should stop doing.',
  'The science of overthinking.',
  'How to make biryani a religion.',
  'Why umbrellas are overrated.',
  'The secret language of late-night snacks.',
  'Why everyone is always late.',
  'The hidden meaning of group memes.',
];

export default function ChatarPatarGenerator({ addSunflower }) {
  const [topic, setTopic] = useState('Why friendships need nonsense.');

  const generateTopic = () => {
    const next = topics[Math.floor(Math.random() * topics.length)];
    setTopic(next);
    addSunflower(11);
  };

  return (
    <section id="generator" className="py-24 px-6 md:px-16 bg-white/90">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">Chatar Patar Generator</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">A random topic machine for all the nonsensical conversations that never end.</p>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glassmorphism rounded-3xl p-12 shadow-xl border border-white/80 max-w-4xl mx-auto">
        <p className="text-xl text-slate-900 mb-8">{topic}</p>
        <button onClick={generateTopic} className="rounded-full bg-sunflower-500 px-8 py-4 text-white font-semibold shadow-lg transition hover:bg-sunflower-600">
          Generate Topic
        </button>
      </motion.div>
    </section>
  );
}
