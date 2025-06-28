'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

export function BookingForm() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      setError('Silakan masuk untuk membuat pemesanan.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userId: session.user?.id || session.user?.email,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Pemesanan berhasil dibuat!');
        setFormData({ name: '', email: '', checkIn: '', checkOut: '', roomType: '' });
        setError('');
      } else {
        setError(data.message || 'Gagal membuat pemesanan.');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-coffee mb-4">{success}</p>}
      <div className="mb-4">
        <label className="block text-coffee-brown">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded text-light-coffee"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-coffee-brown">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded text-light-coffee"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-coffee-brown">Tanggal Check-In</label>
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          className="w-full p-2 border rounded text-light-coffee"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-coffee-brown">Tanggal Check-Out</label>
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          className="w-full p-2 border rounded text-light-coffee"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-coffee-brown">Tipe Kamar</label>
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="w-full p-2 border rounded text-light-coffee"
          required
        >
          <option value="">Pilih Kamar</option>
          <option value="deluxe">Suite Kopi Hijau</option>
          <option value="standar">Kamar Standar Mocha</option>
          <option value="keluarga">Suite Keluarga Espresso</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green-coffee text-white p-2 rounded-full hover:bg-green-coffee/80"
        disabled={!session}
      >
        Kirim Pemesanan
      </button>
    </motion.form>
  );
          }
