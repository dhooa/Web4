import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/penginapan.jpg)' }}
    >
      <div className="absolute inset-0 bg-green-coffee/60 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shelter Haven - Green Coffee Retreat
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nikmati kenyamanan premium dengan nuansa green coffee.
          </p>
          <Link
            href="/pemesanan"
            className="bg-light-coffee text-white px-6 py-3 rounded-full hover:bg-light-coffee/80"
          >
            Pesan Sekarang
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
