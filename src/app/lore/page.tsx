'use client';

import { motion } from 'framer-motion';

const loreEntries = [
  {
    title: 'The Beginning',
    category: 'History',
    content: 'Centuries ago, a cosmic event transformed ordinary humans into beings with extraordinary abilities. This transformation marked the beginning of a new era.',
  },
  {
    title: 'The Institute',
    category: 'Institute',
    content: 'Founded in 1962, Mutant Institute has been the beacon of hope for mutantkind, providing sanctuary, education, and a community for those with powers.',
  },
  {
    title: 'The Powers',
    category: 'World',
    content: 'Mutations manifest in countless ways, from telepathy to telekinesis, each unique and powerful. Understanding these powers is key to the institute.',
  },
  {
    title: 'The Council',
    category: 'Institute',
    content: 'The ruling council of the Institute makes decisions that shape the future of mutantkind. They are the guardians of wisdom and power.',
  },
  {
    title: 'Ancient Prophecies',
    category: 'History',
    content: 'Old texts speak of prophecies about the rise of powerful mutants who will shape the destiny of the world and bring balance to all.',
  },
  {
    title: 'The Outside World',
    category: 'World',
    content: 'Beyond the Institute walls, the outside world slowly learns about and adapts to the existence of mutants in their society.',
  },
];

export default function LorePage() {
  return (
    <div className="mutant-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold text-center mb-16 text-transparent bg-clip-text bg-mutant-gradient"
        >
          Institute Lore
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loreEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-mutant-600 bg-slate-900/50 neon-glow-box hover:neon-glow-pink transition"
            >
              <div className="text-sm text-mutant-400 font-bold mb-2 uppercase">{entry.category}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{entry.title}</h3>
              <p className="text-gray-300">{entry.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
