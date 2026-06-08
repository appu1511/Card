import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { label: 'Water', emoji: '💧', points: 15, good: true },
  { label: 'Healthy Food', emoji: '🥗', points: 20, good: true },
  { label: 'Medicine', emoji: '💊', points: 25, good: true },
  { label: 'Sleep', emoji: '🛌', points: 30, good: true },
  { label: 'Cold Virus', emoji: '🤧', points: -20, good: false },
  { label: 'Injury', emoji: '🤕', points: -25, good: false },
  { label: 'Stress', emoji: '💥', points: -15, good: false },
];

export default function MiniGame({ addSunflower }) {
  const [gameItems, setGameItems] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Catch the healthy stuff and avoid the chaos.');
  const [completed, setCompleted] = useState(false);

  const spawnItem = () => {
    const next = items[Math.floor(Math.random() * items.length)];
    setGameItems((prev) => [...prev, { ...next, id: Date.now() + Math.random() }]);
  };

  useEffect(() => {
    if (completed) return;
    const interval = setInterval(spawnItem, 1200);
    return () => clearInterval(interval);
  }, [completed]);

  useEffect(() => {
    if (score >= 150) {
      setMessage('Congratulations. Muku survived this month.');
      setCompleted(true);
      addSunflower(4);
    } else if (score < -20) {
      setMessage('Careful! Muku is in danger of a cold spiral.');
    }
  }, [score]);

  const catchItem = (item) => {
    setGameItems((prev) => prev.filter((current) => current.id !== item.id));
    setScore(score + item.points);
    setMessage(item.good ? `Nice catch! +${item.points} health.` : `Ouch! ${item.label} hit Muku.`);
  };

  return (
    <section id="minigame" className="py-24 px-6 md:px-16 bg-[radial-gradient(circle_at_top,_rgba(255,243,206,0.6),_transparent_45%)]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl handwritten text-slate-900 mb-3">Save Muku Mini Game</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Catch the good icons, dodge the bad ones, and keep Muku alive this month.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] items-start">
        <div className="glassmorphism rounded-3xl p-8 shadow-xl border border-white/80 min-h-[360px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,249,215,0.8),transparent_35%)]"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Score</h3>
                <p className="text-5xl font-bold text-sunflower-600">{score}</p>
              </div>
              <div className="text-right text-slate-600">
                <p>{completed ? 'Mission complete' : 'Game in progress'}</p>
              </div>
            </div>
            <p className="text-slate-700 mb-6">{message}</p>
            <div className="grid grid-cols-3 gap-4">
              {gameItems.slice(-6).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => catchItem(item)}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-3xl p-5 border transition ${item.good ? 'bg-sunflower-50 border-sunflower-200' : 'bg-white border-red-200'}`}
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className={`text-xs ${item.good ? 'text-green-600' : 'text-red-600'}`}>{item.points > 0 ? `+${item.points}` : item.points}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        <div className="glassmorphism rounded-3xl p-8 shadow-xl border border-white/80">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">How to play</h3>
          <ul className="space-y-3 text-slate-700">
            <li>• Tap water, food, medicine, and sleep icons.</li>
            <li>• Avoid cold viruses, injuries, and stress.</li>
            <li>• Reach 150 points to win the month.</li>
            <li>• Hidden sunflowers will burst into view once you win.</li>
          </ul>
          <button onClick={() => addSunflower(5)} className="mt-8 rounded-full bg-sunflower-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-sunflower-600">
            Find hidden sunflower
          </button>
        </div>
      </div>
    </section>
  );
}
