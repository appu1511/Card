import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-4"
        >
          🌻
        </motion.div>
        <h1 className="text-4xl font-bold text-sunflower-400 mb-4 handwritten">
          The Official Muku Archive
        </h1>
        <div className="loader mx-auto mb-4"></div>
        <p className="text-lg text-light-brown">Loading your friendship museum...</p>
      </motion.div>
    </div>
  );
}
