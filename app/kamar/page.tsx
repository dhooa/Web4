import { RoomCard } from '../../components/RoomCard';
import { motion } from 'framer-motion';

const kamar = [
  {
    id: 1,
    nama: 'Suite Kopi Hijau',
    harga: 1500000,
    gambar: '/images/kamar1.jpg',
    deskripsi: 'Suite luas dengan dekorasi hijau alami dan fasilitas modern.',
  },
  {
    id: 2,
    nama: 'Kamar Standar Mocha',
    harga: 1000000,
    gambar: '/images/kamar2.jpg',
    deskripsi: 'Kamar nyaman dengan sentuhan cokelat mocha untuk relaksasi.',
  },
  {
    id: 3,
    nama: 'Suite Keluarga Espresso',
    harga: 2000000,
    gambar: '/images/kamar3.jpg',
    deskripsi: 'Suite besar dengan nuansa espresso untuk keluarga.',
  },
];

export default function Kamar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-coffee-brown">
        Kamar Kami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kamar.map((kamar) => (
          <RoomCard key={kamar.id} kamar={kamar} />
        ))}
      </div>
    </motion.div>
  );
}
