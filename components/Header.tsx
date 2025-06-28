'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Header() {
  const { data: session } = useSession();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-coffee text-white py-4 sticky top-0 z-50"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Shelter Haven
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/kamar" className="hover:underline">
              Kamar
            </Link>
          </li>
          <li>
            <Link href="/pemesanan" className="hover:underline">
              Pemesanan
            </Link>
          </li>
          <li>
            <Link href="/tentang" className="hover:underline">
              Tentang
            </Link>
          </li>
          {session ? (
            <li>
              <button onClick={() => signOut()} className="hover:underline">
                Keluar ({session.user?.name})
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => signIn('google')} className="hover:underline">
                Masuk
              </button>
            </li>
          )}
        </ul>
      </nav>
    </motion.header>
  );
}
