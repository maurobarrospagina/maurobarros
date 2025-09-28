"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Título animado letra por letra
const AnimatedTitle = () => {
  const title = "Galeria";
  const letters = title.split("");
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      ref={ref}
      className="text-4xl md:text-6xl text-light mb-4 font-parisienne"
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // só anima quando visível
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [modalImage, setModalImage] = useState(null);

  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const images = [
    "https://res.cloudinary.com/pageja/image/upload/v1758934798/SaveInsta.to_316060435_565790698606246_8792098586209578325_n_vdpu79.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934810/SaveInsta.to_290220319_1068346250760146_185987735259331708_n_r5hy7v.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934812/SaveInsta.to_288870938_562185692296322_8011302468279846434_n_shkxh3.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934809/SaveInsta.to_300847938_5498757496874688_2379427848855726777_n_2_jteqea.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934809/SaveInsta.to_491420487_1897350137746429_4112158358680206187_n_tajf7s.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934804/SaveInsta.to_301538443_449673587101977_1760470656021114536_n_1_hny08m.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934800/SaveInsta.to_500410004_3797676140453049_1980317171929641272_n_hcrhmg.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934466/SaveInsta.to_504543401_18514590475001239_4359247558885946081_n_gczaa7.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934320/SaveInsta.to_546229693_1103658238412297_3105854585650559272_n_v00d6z.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934271/SaveInsta.to_543824372_18530146837001239_1229836390445882067_n_rpgs6w.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934222/SaveInsta.to_534505315_702961046113590_6759509901476762933_n_pcyydu.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934124/SaveInsta.to_509246424_18514296775001239_7666673764620697611_n_licnuv.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933963/SaveInsta.to_502619931_1419478092579471_7427517625835849962_n_j2cntz.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933962/SaveInsta.to_347839434_1301817973757661_1491041434565361333_n_luxycl.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933941/SaveInsta.to_503032474_560226183816825_2575708261861378759_n_tmhihw.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933939/SaveInsta.to_399556763_18397906870001239_9122464891973198685_n_j3u7kt.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933931/SaveInsta.to_439900144_18433355263001239_2869543153064888274_n_wyjvrb.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933921/SaveInsta.to_504209955_1901626797306146_2061401743828693702_n_mrrc1p.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933910/SaveInsta.to_484989611_18495333733001239_6620802417810920145_n_otm3hs.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933918/SaveInsta.to_485016392_18495531403001239_8285497499215472012_n_ldgqct.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758933932/SaveInsta.to_503100904_987568526788067_134923264724600929_n_u0orzu.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934806/SaveInsta.to_499077175_1600354403985177_1584021913825465176_n_plerdd.jpg",
    "https://res.cloudinary.com/pageja/image/upload/v1758934808/SaveInsta.to_503045402_1438507970913517_4114872380311063538_n_esbtdw.jpg",
  ];

  const updateSlidesToShow = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) setSlidesToShow(1);
    else if (width < 1024) setSlidesToShow(2);
    else setSlidesToShow(3);
  }, []);

  const adjustHeight = useCallback(() => {
    if (!emblaApi || !containerRef.current) return;
    const index = emblaApi.selectedScrollSnap();
    const slides = Array.from(containerRef.current.children).slice(
      index,
      index + slidesToShow
    );
    const maxImgHeight = Math.min(
      Math.max(
        ...slides.map((slide) => slide.querySelector("img")?.naturalHeight || 0)
      ),
      384
    );
    setHeight(maxImgHeight);
  }, [emblaApi, slidesToShow]);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [updateSlidesToShow]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      adjustHeight();
      emblaApi.on("select", adjustHeight);
      window.addEventListener("resize", adjustHeight);
    }
    return () => {
      if (emblaApi) {
        emblaApi.off("select", adjustHeight);
        window.removeEventListener("resize", adjustHeight);
      }
    };
  }, [emblaApi, slidesToShow, adjustHeight]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.selectedScrollSnap() === 0)
      emblaApi.scrollTo(images.length - 1);
    else emblaApi.scrollPrev();
  }, [emblaApi, images.length]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.selectedScrollSnap() === images.length - 1)
      emblaApi.scrollTo(0);
    else emblaApi.scrollNext();
  }, [emblaApi, images.length]);

  return (
    <div ref={galleryRef} className="bg-dark py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedTitle />

          <motion.p
            className="text-lg md:text-xl text-light/60 mt-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={
              galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            Obras de arte em tinta e pele
          </motion.p>

          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>

        <div className="relative bg-gradient-to-br from-accent to-dark p-8 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl"></div>
          <div className="relative w-full max-w-4xl mx-auto">
            <div
              className="overflow-hidden transition-[height] duration-500 rounded-2xl"
              ref={emblaRef}
              style={{ height: `${height}px` }}
            >
              <div className="flex" ref={containerRef}>
                {images.map((src, index) => (
                  <motion.div
                    className="min-w-0 relative flex items-center justify-center p-2"
                    key={index}
                    style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      galleryInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <img
                      src={src}
                      alt={`Slide ${index}`}
                      className="w-full h-full max-h-96 object-contain rounded-2xl cursor-pointer"
                      onLoad={adjustHeight}
                      onClick={() => setModalImage(src)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Botões */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gold/80 hover:bg-gold text-dark p-3 rounded-full z-10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gold/80 hover:bg-gold text-dark p-3 rounded-full z-10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={modalImage}
              className="max-h-[90%] max-w-[90%] rounded-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
