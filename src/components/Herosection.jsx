import { motion } from "framer-motion";

function Herosection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/pageja/image/upload/v1759069853/um-homem-com-uma-tatuagem-no-braco_1_l1zl5q.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.img
          src="https://res.cloudinary.com/pageja/image/upload/v1758934756/Mauro_barros_logo_png_branco_kpvwob.png"
          alt="Logo"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="font-parisienne text-6xl sm:text-6xl md:text-7xl lg:text-9xl mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mauro Barros
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 bg-gold text-black font-bold text-lg rounded-full shadow-lg "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Agende seu horário
        </motion.button>
      </div>
    </div>
  );
}

export default Herosection;
