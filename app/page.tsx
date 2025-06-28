import { Hero } from '../components/Hero';
import { SearchForm } from '../components/SearchForm';
import { Testimonials } from '../components/Testimonials';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <SearchForm />
      <section className="py-16 bg-green-coffee/10">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8 text-coffee-brown"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Selamat Datang di Shelter Haven
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto text-light-coffee">
            Nikmati pengalaman menginap dengan nuansa green coffee yang men奇妙な体験をしてください。
          </p>
        </div>
      </section>
      <Testimonials />
    </motion.div>
  );
}
