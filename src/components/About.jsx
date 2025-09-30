"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [current, setCurrent] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // só roda a animação uma vez
    threshold: 0.2, // ativa quando 20% da seção estiver visível
  });

  const images = [
    "https://res.cloudinary.com/pageja/image/upload/v1759060272/05_rjaoez.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934815/SaveInsta.to_281451126_736778704427666_5817965141509993858_n_fmcuo1.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934815/SaveInsta.to_281905022_1424989287974249_1225882886015369562_n_zex2ek.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934816/SaveInsta.to_282142476_413737917375788_1850095637421557225_n_y4b0ca.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      ref={ref}
      className="bg-dark min-h-screen py-20 px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h2 className="font-parisienne text-gold text-5xl lg:text-6xl">
                Sobre
              </h2>
              <div className="w-16 h-px bg-gold"></div>
            </div>

            <div className="space-y-8">
              <h3 className="font-sans text-light text-3xl lg:text-4xl font-extralight tracking-wide leading-tight">
                Arte que marca
                <br />
                sua história
              </h3>

              <p className="text-light/80 text-xl font-light leading-relaxed max-w-md">
                Desde 2013, transformo ideias em obras de arte permanentes,
                unindo fine line, realismo e preto e cinza em composições que
                atravessam o tempo.
              </p>

              <p className="text-light/60 text-base font-light max-w-md">
                Cada traço é mais que estética — é memória, identidade e poesia
                gravada na pele.
              </p>

              <div className="flex space-x-8">
                <div className="pt-8">
                  <div className="text-gold text-4xl font-extralight">10+</div>
                  <div className="text-light/60 text-sm uppercase tracking-widest mt-1">
                    Anos de experiência
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Artist photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="aspect-[4/5] bg-accent/20 border border-gold/30 relative group overflow-hidden">
              <motion.img
                key={current}
                src={images[current]}
                alt="Mauro Foto"
                className="object-cover w-full h-full"
                initial={{ opacity: 0.3, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.3, scale: 0.95 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-gold/30"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-gold/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
