import Link from 'next/link';
import { motion } from 'framer-motion';

interface Kamar {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  deskripsi: string;
}

interface RoomCardProps {
  kamar: Kamar;
}

export function RoomCard({ kamar }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={kamar.gambar} alt={kamar.nama} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-coffee-brown">{kamar.nama}</h3>
        <p className="text-light-coffee mt-2">{kamar.deskripsi}</p>
        <p className="text-green-coffee font-semibold mt-4">
          Rp{kamar.harga.toLocaleString()}/malam
        </p>
        <Link
          href="/pemesanan"
          className="mt-4 inline-block bg-green-coffee text-white px-4 py-2 rounded-full hover:bg-green-coffee/80"
        >
          Pesan Sekarang
        </Link>
      </div>
    </motion.div>
  );
}
