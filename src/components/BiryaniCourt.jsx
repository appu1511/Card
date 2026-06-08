import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BiryaniCourt({ addSunflower }) {
  const [verdict, setVerdict] = useState(null);
  const [choiceResult, setChoiceResult] = useState(null);
  const [guess, setGuess] = useState(null);

  const playChoice = (selected) => {
    const actual = Math.random() < 0.78 ? 'Biryani' : 'Me';
    setGuess(selected);
    setChoiceResult(actual);

    if (actual === 'Me') {
      addSunflower(8);
    }
  };

  return (
    <section id="court" className="py-24 px-6 md:px-16 bg-cream">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">The Case of Biryani vs Friendship</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">A courtroom filled with evidence, drama, and the truth about biryani priorities.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-3xl p-10 shadow-xl border border-white/80"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Evidence Board</h3>
          <ul className="space-y-4 text-slate-700">
            <li>• Evidence #1: Muku chose biryani.</li>
            <li>• Evidence #2: No regret detected.</li>
            <li>• Evidence #3: Still choosing biryani.</li>
          </ul>
        </motion.div>
        <div className="glassmorphism rounded-3xl p-10 shadow-xl border border-white/80 text-left">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Court Result</h3>
          <p className="text-slate-700 mb-6">Click below to deliver the verdict and sentence the betrayer to eternal teasing.</p>
          <button
            onClick={() => {
              setVerdict('Guilty');
              addSunflower(6);
            }}
            className="rounded-full bg-sunflower-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600"
          >
            Declare Verdict
          </button>
          {verdict && (
            <div className="mt-8 rounded-3xl bg-sunflower-50 border border-sunflower-200 p-6 text-slate-700">
              <p className="text-xl font-semibold text-slate-900">{verdict}.</p>
              <p className="mt-3">Sentence: Lifetime teasing.</p>
            </div>
          )}
          <div className="mt-10 rounded-3xl bg-white/90 border border-slate-200 p-6">
            <h4 className="text-xl font-semibold text-slate-900 mb-4">What would Muku choose now?</h4>
            <p className="text-slate-700 mb-4">Pick your guess and see if Muku goes for you or biryani in this silly court challenge.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => playChoice('Me')}
                className="rounded-full bg-sky-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-sky-600"
              >
                I think Me
              </button>
              <button
                onClick={() => playChoice('Biryani')}
                className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-orange-600"
              >
                I think Biryani
              </button>
            </div>
            {choiceResult && (
              <div className="mt-6 rounded-3xl bg-sunflower-50 border border-sunflower-200 p-5 text-slate-800">
                <p className="text-lg font-semibold">
                  {choiceResult === guess ? 'Bang on!' : 'Oops, surprise verdict!'}
                </p>
                <p className="mt-3">Muku chose <span className="font-bold">{choiceResult}</span> this time.</p>
                <p className="mt-2 text-slate-600">
                  {choiceResult === 'Biryani'
                    ? 'Your heart loses to the biryani cravings, but at least the court is entertained.'
                    : 'Wow! Muku picked you. A secret sunflower has been earned for the rare moment.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button onClick={() => addSunflower(7)} className="mt-10 rounded-full bg-sunflower-500 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600">
        Unlock evidence sunflower
      </button>
    </section>
  );
}
