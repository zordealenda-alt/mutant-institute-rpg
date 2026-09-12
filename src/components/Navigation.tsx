'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

export function Navigation() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950 border-b border-mutant-600 sticky top-0 z-50 neon-glow-box">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-display font-bold text-transparent bg-clip-text bg-mutant-gradient">
            MUTANT INSTITUTE
          </Link>

          <div className="hidden md:flex space-x-1">
            <Link href="/" className="px-3 py-2 text-sm hover:text-mutant-400 transition">Home</Link>
            <Link href="/lore" className="px-3 py-2 text-sm hover:text-mutant-400 transition">Lore</Link>
            <Link href="/mutations" className="px-3 py-2 text-sm hover:text-mutant-400 transition">Mutations</Link>
            <Link href="/characters" className="px-3 py-2 text-sm hover:text-mutant-400 transition">Characters</Link>
            <Link href="/campaigns" className="px-3 py-2 text-sm hover:text-mutant-400 transition">Campaigns</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <>
                <span className="text-sm text-mutant-400">{session.user?.name}</span>
                <button onClick={() => signOut()} className="px-4 py-2 bg-mutant-600 hover:bg-mutant-500 text-white rounded transition">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="px-4 py-2 text-sm hover:text-mutant-400 transition">Login</Link>
                <Link href="/auth/register" className="px-4 py-2 bg-mutant-600 hover:bg-mutant-500 text-white rounded transition">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
