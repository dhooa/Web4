'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function SearchForm() {
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-12"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
          Cari Kamar Anda
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-coffee-brown">Check-In</label>
            <input
              type="date"
              name="checkIn"
              value={searchData.checkIn}
              onChange={handleChange}
              className="w-full p-2 border rounded text-light-coffee"
            />
          </div>
          <div>
            <label className="block text-coffee-brown">Check-Out</label>
            <input
              type="date"
              name="checkOut"
              value={searchData.checkOut}
              onChange={handleChange}
              className="w-full p-2 border rounded text-light-coffee"
            />
          </div>
          <div>
            <label className="block text-coffee-brown">Tipe Kamar</label>
            <select
              name="roomType"
              value={searchData.roomType}
              onChange={handleChange}
              className="w-full p-2 border rounded text-light-coffee"
            >
              <option value="">Pilih Kamar</option>
              <option value="deluxe">Suite Kopi Hijau</option>
              <option value="standar">Kamar Standar Mocha</option>
              <option value="keluarga">Suite Keluarga Espresso</option>
            </select>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link
            href="/kamar"
            className="bg-green-coffee text-white px-6 py-3 rounded-full hover:bg-green-coffee/80"
          >
            Cari Kamar
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
