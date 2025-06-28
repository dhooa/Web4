'use client';

import { BookingForm } from '../../components/BookingForm';
import { motion } from 'framer-motion';

export default function Pemesanan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-coffee-brown">
        Pesan Penginapan Anda
      </h1>
      <BookingForm />
    </motion.div>
  );
}
