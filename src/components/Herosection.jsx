import { motion } from "framer-motion";

function Herosection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/pageja/image/upload/v1759075507/um-homem-com-uma-tatuagem-no-braco_1_cz8tzj_cf8pez.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-40">
        <motion.img
          src="https://res.cloudinary.com/pageja/image/upload/v1759197786/Mauro_barros_logo_png_branco_kpvwob.png"
          alt="Logo"
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] max-w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="font-parisienne text-5xl sm:text-6xl md:text-7xl lg:text-9xl mt-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mauro Barros
        </motion.p>

        <motion.a
          className="mt-8 px-8 py-3 cursor-pointer bg-gold text-black font-bold text-lg rounded-full shadow-lg hover:bg-white hover:text-gold transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          href="#contact"
        >
          Agende seu horário
        </motion.a>
      </div>
    </section>
  );
}

export default Herosection;
