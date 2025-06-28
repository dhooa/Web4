import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-coffee-brown text-white py-8"
    >
      <div className="container mx-auto text-center">
        <p>© 2025 Shelter Haven. Hak cipta dilindungi.</p>
        <p className="mt-2">Kontak: info@shelterhaven.com | +62 123 456 789</p>
      </div>
    </motion.footer>
  );
}
