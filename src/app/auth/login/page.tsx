'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push('/characters');
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
          <h1 className="text-3xl font-display font-bold text-center mb-8 text-mutant-400">LOGIN</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-mutant-400">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-mutant-600 rounded focus:outline-none focus:border-mutant-400 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-mutant-400">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-mutant-600 rounded focus:outline-none focus:border-mutant-400 text-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-mutant-600 hover:bg-mutant-500 disabled:opacity-50 text-white font-bold rounded transition"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-mutant-400 hover:text-mutant-300 font-bold">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
