'use client';

import { motion } from 'framer-motion';

const mutations = [
  {
    name: 'Telepathy',
    type: 'Mental',
    levels: 10,
    description: 'Read and control minds from afar',
  },
  {
    name: 'Telekinesis',
    type: 'Force',
    levels: 10,
    description: 'Move objects with the power of thought',
  },
  {
    name: 'Regeneration',
    type: 'Biological',
    levels: 10,
    description: 'Heal injuries and restore health rapidly',
  },
  {
    name: 'Energy Projection',
    type: 'Energy',
    levels: 10,
    description: 'Project powerful energy blasts',
  },
  {
    name: 'Enhanced Strength',
    type: 'Physical',
    levels: 10,
    description: 'Superhuman physical power and endurance',
  },
  {
    name: 'Invisibility',
    type: 'Illusion',
    levels: 10,
    description: 'Bend light to become invisible to the naked eye',
  },
  {
    name: 'Time Manipulation',
    type: 'Temporal',
    levels: 10,
    description: 'Control the flow of time in limited areas',
  },
  {
    name: 'Elemental Control',
    type: 'Elemental',
    levels: 10,
    description: 'Master the elements of fire, water, earth, and air',
  },
];

export default function MutationsPage() {
  return (
    <div className="mutant-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-center mb-16 text-transparent bg-clip-text bg-mutant-gradient"
        >
          Mutations Database
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mutations.map((mutation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-mutant-600 bg-slate-900/50 neon-glow-box hover:neon-glow-cyan transition cursor-pointer"
            >
              <div className="text-xs text-mutant-400 font-bold mb-2 uppercase">{mutation.type}</div>
              <h3 className="text-xl font-display font-bold mb-2">{mutation.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{mutation.description}</p>
              <div className="flex justify-between items-center text-xs text-mutant-400">
                <span>Levels: {mutation.levels}</span>
                <span className="px-2 py-1 bg-mutant-600 rounded">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
