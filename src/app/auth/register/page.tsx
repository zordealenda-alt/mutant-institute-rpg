'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Registration failed');
      } else {
        router.push('/auth/login');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mutant-bg min-h-screen flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-900/50 border border-mutant-600 rounded-lg p-8 neon-glow-box">
          <h1 className="text-3xl font-display font-bold text-center mb-8 text-mutant-400">REGISTER</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-mutant-400">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-mutant-600 rounded focus:outline-none focus:border-mutant-400 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-mutant-400">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-mutant-600 rounded focus:outline-none focus:border-mutant-400 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-mutant-400">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-mutant-600 rounded focus:outline-none focus:border-mutant-400 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-mutant-400">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-mutant-600 rounded focus:outline-none focus:border-mutant-400 text-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-mutant-600 hover:bg-mutant-500 disabled:opacity-50 text-white font-bold rounded transition"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-mutant-400 hover:text-mutant-300 font-bold">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
