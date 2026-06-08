import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BiryaniCourt({ addSunflower }) {
  const [verdict, setVerdict] = useState(null);
  const [choiceResult, setChoiceResult] = useState(null); // { value, id }
  const [guess, setGuess] = useState(null);
  const resultTick = useRef(0);
  const confettiRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  const playChoice = (selected) => {
    const actual = Math.random() < 0.78 ? 'Biryani' : 'Me';
    setGuess(selected);
    // store as object with id so repeated identical strings still trigger updates
    setChoiceResult({ value: actual, id: Date.now() + resultTick.current++ });

    if (actual === 'Me') {
      addSunflower(8);
    }
  };

  useEffect(() => {
    // Trigger a visual celebration when a rare 'Me' is chosen
    if (choiceResult && choiceResult.value === 'Me') {
      const canvas = confettiRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w = (canvas.width = canvas.offsetWidth);
      let h = (canvas.height = canvas.offsetHeight);

      const colors = ['#FFD54A', '#FF8A65', '#81C784', '#4FC3F7', '#BA68C8'];

      // randomly pick an effect: cracker (burst) or flower (petal rain)
      const effect = Math.random() < 0.5 ? 'cracker' : 'flower';

      if (effect === 'cracker') {
        // central burst
        const cx = w / 2;
        const cy = Math.max(60, h / 4);
        particlesRef.current = Array.from({ length: 80 }).map(() => ({
          x: cx,
          y: cy,
          vx: (Math.random() - 0.5) * 12,
          vy: (Math.random() - 0.8) * 12,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 60 + 40,
        }));

        const renderCracker = () => {
          ctx.clearRect(0, 0, w, h);
          particlesRef.current.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.25; // gravity
            p.life -= 1;

            // draw as small rotated rectangles/lines
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 2);
            ctx.restore();
          });

          particlesRef.current = particlesRef.current.filter((p) => p.life > 0 && p.y < h + 50);
          if (particlesRef.current.length > 0) animationRef.current = requestAnimationFrame(renderCracker);
        };

        const onResize = () => {
          w = canvas.width = canvas.offsetWidth;
          h = canvas.height = canvas.offsetHeight;
        };
        window.addEventListener('resize', onResize);
        renderCracker();

        const cleanupTimer = setTimeout(() => {
          cancelAnimationFrame(animationRef.current);
          ctx.clearRect(0, 0, w, h);
          particlesRef.current = [];
          window.removeEventListener('resize', onResize);
        }, 3000);

        return () => {
          clearTimeout(cleanupTimer);
          cancelAnimationFrame(animationRef.current);
          window.removeEventListener('resize', onResize);
        };
      } else {
        // flower petal rain
        particlesRef.current = Array.from({ length: 90 }).map(() => ({
          x: Math.random() * w,
          y: Math.random() * -h,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 2 + 1,
          size: Math.random() * 10 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.06,
        }));

        const renderFlower = () => {
          ctx.clearRect(0, 0, w, h);
          particlesRef.current.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.rotSpeed;

            // draw simple flower: 5 petals as circles around center
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            const petal = p.size * 0.4;
            ctx.fillStyle = p.color;
            for (let i = 0; i < 5; i++) {
              const angle = (i / 5) * Math.PI * 2;
              const px = Math.cos(angle) * petal;
              const py = Math.sin(angle) * petal;
              ctx.beginPath();
              ctx.ellipse(px, py, petal * 0.7, petal * 0.5, 0, 0, Math.PI * 2);
              ctx.fill();
            }
            // center
            ctx.beginPath();
            ctx.fillStyle = '#FFF8E1';
            ctx.arc(0, 0, petal * 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          });

          particlesRef.current = particlesRef.current.filter((p) => p.y < h + 50);
          if (particlesRef.current.length > 0) animationRef.current = requestAnimationFrame(renderFlower);
        };

        const onResize = () => {
          w = canvas.width = canvas.offsetWidth;
          h = canvas.height = canvas.offsetHeight;
        };
        window.addEventListener('resize', onResize);
        renderFlower();

        const cleanupTimer = setTimeout(() => {
          cancelAnimationFrame(animationRef.current);
          ctx.clearRect(0, 0, w, h);
          particlesRef.current = [];
          window.removeEventListener('resize', onResize);
        }, 3800);

        return () => {
          clearTimeout(cleanupTimer);
          cancelAnimationFrame(animationRef.current);
          window.removeEventListener('resize', onResize);
        };
      }
    }
  }, [choiceResult]);

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
          <div className="mt-10 rounded-3xl bg-white/90 border border-slate-200 p-6 relative">
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
            <canvas
              ref={confettiRef}
              className="pointer-events-none"
              style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
            />
            {choiceResult && (
              <div className="mt-6 rounded-3xl bg-sunflower-50 border border-sunflower-200 p-5 text-slate-800">
                <p className="text-lg font-semibold">
                  {choiceResult.value === guess ? 'Bang on!' : 'Oops, surprise verdict!'}
                </p>
                <p className="mt-3">Muku chose <span className="font-bold">{choiceResult.value}</span> this time.</p>
                <p className="mt-2 text-slate-600">
                  {choiceResult.value === 'Biryani'
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
