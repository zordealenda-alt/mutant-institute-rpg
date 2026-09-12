'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Rich Lore',
    description: 'Explore the deep history and world of Mutant Institute',
  },
  {
    title: 'Mutations Database',
    description: 'Discover unique mutations with multiple power levels',
  },
  {
    title: 'Character Management',
    description: 'Create and develop your mutant characters',
  },
  {
    title: 'Campaigns & Missions',
    description: 'Lead epic campaigns with custom missions',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Home() {
  return (
    <div className="mutant-bg">
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-mutant-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-display font-bold text-center mb-6 text-transparent bg-clip-text bg-mutant-gradient neon-text"
          >
            MUTANT INSTITUTE
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-center text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Welcome to the ultimate RPG platform for mutant-powered adventures. Manage campaigns, explore mutations, and lead your team to victory.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link
              href="/auth/register"
              className="px-8 py-3 bg-mutant-600 hover:bg-mutant-500 text-white font-bold rounded-lg transition hover:shadow-neon-glow"
            >
              Get Started
            </Link>
            <Link
              href="/lore"
              className="px-8 py-3 border border-mutant-500 text-mutant-400 hover:bg-mutant-500/10 font-bold rounded-lg transition"
            >
              Explore Lore
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-display font-bold text-center mb-16 text-mutant-400"
          >
            Platform Features
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border border-mutant-600 hover:border-mutant-400 bg-slate-900/50 hover:bg-slate-800/50 transition neon-glow-box"
              >
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-display font-bold mb-6 text-mutant-400"
          >
            Ready to Begin Your Mutant Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 mb-8 text-lg"
          >
            Join thousands of players in epic campaigns and unlock your mutant potential.
          </motion.p>
          <Link
            href="/auth/register"
            className="px-8 py-3 bg-mutant-600 hover:bg-mutant-500 text-white font-bold rounded-lg transition hover:shadow-neon-glow inline-block"
          >
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
}
