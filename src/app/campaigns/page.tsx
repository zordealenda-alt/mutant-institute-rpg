'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CampaignsPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="mutant-bg min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-6">Please Login</h1>
          <p className="text-gray-400 mb-8">You need to be logged in to manage campaigns</p>
          <Link
            href="/auth/login"
            className="px-8 py-3 bg-mutant-600 hover:bg-mutant-500 text-white font-bold rounded-lg transition"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mutant-bg min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-16 flex-wrap gap-4"
        >
          <h1 className="text-5xl font-display font-bold text-transparent bg-clip-text bg-mutant-gradient">
            Campaigns
          </h1>
          <Link
            href="/campaigns/create"
            className="px-6 py-3 bg-mutant-600 hover:bg-mutant-500 text-white font-bold rounded-lg transition"
          >
            Create Campaign
          </Link>
        </motion.div>

        <div className="text-center text-gray-400">
          <p>No campaigns yet. Start your first epic adventure!</p>
        </div>
      </div>
    </div>
  );
}
