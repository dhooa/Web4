import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Budi Santoso',
    text: 'Penginapan yang sangat nyaman dengan nuansa green coffee yang unik. Pelayanan luar biasa!',
  },
  {
    name: 'Siti Aisyah',
    text: 'Kamar bersih, suasana tenang, dan desainnya elegan. Pasti kembali lagi!',
  },
  {
    name: 'Rudi Hartono',
    text: 'Proses pemesanan mudah dan staf sangat ramah. Pengalaman menginap yang menyenangkan.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-green-coffee/10">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-coffee-brown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Apa Kata Pelanggan Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <p className="text-light-coffee mb-4">"{testimonial.text}"</p>
              <h3 className="text-coffee-brown font-semibold">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
