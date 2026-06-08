import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const petalVariants = {
  animate: {
    y: ['0%', '120%'],
    rotate: [0, 360],
    opacity: [1, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export default function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, index) => ({
        id: index,
        left: Math.random() * 100,
        size: Math.random() * 16 + 24,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="floating-petal"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size,
            top: '-10%',
          }}
          variants={petalVariants}
          animate="animate"
          transition={{ delay: petal.delay, duration: 12 + petal.delay }}
        >
          <span className="block text-2xl">🌼</span>
        </motion.div>
      ))}
    </div>
  );
}
