"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "Fernando Queiroz",
    reviewsCount: 267,
    rating: 5,
    text: "Nova. Top!",
  },
  {
    id: 2,
    name: "Jéssica Oliveira",
    reviewsCount: 1,
    rating: 5,
    text: "Excelente profissional!",
  },
  {
    id: 3,
    name: "Lidia Oliveira Oliveira",
    reviewsCount: 1,
    rating: 5,
    text: "O melhor tatuador da minha cidade! A arte impecável!",
  },
  {
    id: 4,
    name: "Jackson Pereira",
    reviewsCount: 1,
    rating: 5,
    text: "O cara tem o dom nas veias, top de mais, ótima qualidade.",
  },
  {
    id: 5,
    name: "Jéssica Candeira",
    reviewsCount: 3,
    rating: 5,
    text: "Profissional muito educado e atencioso, nota mil, super recomendo.",
  },
  {
    id: 6,
    name: "Cyndel Pagung",
    reviewsCount: 1,
    rating: 5,
    text: "Estúdio lindo, recepção maravilhosa. Profissionais em tatuagens delicadas, realismo e preto e cinza. Super indico esse lugar!",
  },
  {
    id: 7,
    name: "PHILIPE DUÍLIO",
    reviewsCount: 18,
    rating: 5,
    text: "O melhor do Brasil! Fiz uma tattoo há mais de 6 anos e até hoje não precisei retocar. Serviço impecável.",
  },
  {
    id: 8,
    name: "RENATO SILVA",
    reviewsCount: 2,
    rating: 5,
    text: "Excelente profissional!",
  },
  {
    id: 9,
    name: "Anna Beatriz Assunção",
    reviewsCount: 7,
    rating: 5,
    text: "Profissional atencioso e competente.",
  },
  {
    id: 10,
    name: "CidaeAlex Joao",
    reviewsCount: 9,
    rating: 5,
    text: "Ótima experiência com profissional! Mãos de fadas, atenção e cuidado excepcionais. Até agora estou apaixonada pelas minhas tattoos!",
  },
  {
    id: 11,
    name: "Isabelly Passos",
    reviewsCount: 6,
    rating: 5,
    text: "O melhor e mais atencioso tatuador de Águas Lindas.",
  },
  {
    id: 12,
    name: "Emilly Dias Alves",
    reviewsCount: 1,
    rating: 5,
    text: "Ótima demais!",
  },
  {
    id: 13,
    name: "Galinho Preto 157 de geladeira",
    reviewsCount: 1,
    rating: 5,
    text: "Tatuador profissional, ótimo atendimento, super atencioso.",
  },
  {
    id: 14,
    name: "Victoria G.",
    reviewsCount: 1,
    rating: 5,
    text: "Trabalho impecável! Tatuagens com traços finos.",
  },
  {
    id: 15,
    name: "Jennifer Jeny",
    reviewsCount: 4,
    rating: 5,
    text: "Atendimento ótimo, super profissionalismo, traços perfeitos, super recomendo!",
  },
  {
    id: 16,
    name: "Maria das Graças Galvão",
    reviewsCount: 5,
    rating: 5,
    text: "Muito profissional, amei a minha tatuagem, recomendo o trabalho dele, muito bom.",
  },
  {
    id: 17,
    name: "William",
    reviewsCount: 1,
    rating: 5,
    text: "Um excelente profissional ❤️",
  },
  {
    id: 18,
    name: "elaine coutinho",
    reviewsCount: 1,
    rating: 5,
    text: "Excelente atendimento!",
  },
  {
    id: 19,
    name: "Sabryna Lopes",
    reviewsCount: 28,
    rating: 5,
    text: "Ótima experiência! Fiz uma tatuagem minimalista e gostei bastante do resultado. Quase não senti desconforto durante o procedimento.",
  },
  {
    id: 20,
    name: "Giovanna Vasconcelos",
    reviewsCount: 1,
    rating: 5,
    text: "Excelente profissional, ótimo atendimento, trabalho impecável!",
  },
  {
    id: 21,
    name: "Raphael Arcanjo",
    reviewsCount: 1,
    rating: 5,
    text: "Excelente! Mauro é bem atencioso com seu trabalho, esclarece todas as dúvidas. Adorei minha nova tattoo, vale a pena.",
  },
  {
    id: 22,
    name: "Beatriz Saldanha",
    reviewsCount: 2,
    rating: 5,
    text: "Um ótimo profissional! Estou apaixonada pela minha tattoo.",
  },
  {
    id: 23,
    name: "Alex Lima",
    reviewsCount: 1,
    rating: 5,
    text: "Tatuagens com traços finos, excelente profissional.",
  },
  {
    id: 24,
    name: "Aline Moreno",
    reviewsCount: 1,
    rating: 5,
    text: "Ótima, sem palavras, trabalho excelente.",
  },
  {
    id: 25,
    name: "Ana Julia",
    reviewsCount: 1,
    rating: 5,
    text: "Trabalho excelente, de muita confiança! Adorei o trabalho dele ❤️",
  },
  {
    id: 26,
    name: "Rayssa Sousa",
    reviewsCount: 1,
    rating: 5,
    text: "Excelente serviço!",
  },
  {
    id: 27,
    name: "Keliane Rodrigues",
    reviewsCount: 1,
    rating: 5,
    text: "Tatuagens femininas de ótima qualidade.",
  },
  {
    id: 28,
    name: "Raquel Cristina",
    reviewsCount: 4,
    rating: 5,
    text: "Ótimo atendimento, profissional muito atencioso, faz um trabalho incrível, recomendo muito.",
  },
  {
    id: 29,
    name: "Kellen Alves",
    reviewsCount: 1,
    rating: 5,
    text: "Amei, pensei que doía mais, foi de boa 👏🏻👏🏻",
  },
  {
    id: 30,
    name: "Deborah Silva",
    reviewsCount: 3,
    rating: 5,
    text: "Excelente atendimento!",
  },
  {
    id: 31,
    name: "Juliana Zinn",
    reviewsCount: 4,
    rating: 5,
    text: "Excelente profissional, mão leve, tira todas as dúvidas, atenciosa, detalhista, traço fino. Ambiente limpo, organizado, excelente experiência do início ao fim.",
  },
  {
    id: 32,
    name: "Marcos Silva",
    reviewsCount: 1,
    rating: 5,
    text: "Ótimo local, ótimo atendimento. Profissional bem vestido e asseado, transmite cuidado e compromisso com seu trabalho.",
  },
  {
    id: 33,
    name: "Gisa111 Araújo",
    reviewsCount: 1,
    rating: 5,
    text: "Super de confiança, podem fazer sem medo. Ele arrasa, indico demais ❤️",
  },
  {
    id: 34,
    name: "Adriana Cardoso",
    reviewsCount: 1,
    rating: 5,
    text: "Ótimo profissional.",
  },
  {
    id: 35,
    name: "Marcos de Lima",
    reviewsCount: 2,
    rating: 5,
    text: "Estúdio excelente, impecável, além do tatuador que é excelente, manda muito na tattoo.",
  },
];

export default function ReviewsSection() {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
        setIsMobile(false);
      } else {
        setCardsPerView(3);
        setIsMobile(false);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / reviewsData.length;
    let newIndex = index;

    if (direction === "left") newIndex--;
    else newIndex++;

    if (!isMobile) {
      // Loop apenas no desktop/tablet
      if (newIndex < 0) newIndex = reviewsData.length - cardsPerView;
      if (newIndex > reviewsData.length - cardsPerView) newIndex = 0;
    } else {
      // No mobile, impede scroll além dos limites
      if (newIndex < 0) newIndex = 0;
      if (newIndex > reviewsData.length - 1) newIndex = reviewsData.length - 1;
    }

    setIndex(newIndex);
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#111] text-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          O que nossos clientes dizem
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10 rounded-full"></div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth"
          >
            {reviewsData.map((review) => (
              <motion.div
                key={review.id}
                className="min-w-[90%] sm:min-w-[48%] lg:min-w-[30%] bg-neutral-900 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-1">{review.name}</h3>
                <div className="flex items-center text-yellow-400 mb-2">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-300 text-sm">{review.text}</p>
                <p className="text-gray-500 text-xs mt-2">
                  {review.reviewsCount} reviews
                </p>
              </motion.div>
            ))}
          </div>

          {/* Botões laterais */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500/80 hover:bg-yellow-500 text-black p-2 rounded-full shadow-lg transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500/80 hover:bg-yellow-500 text-black p-2 rounded-full shadow-lg transition"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://maps.app.goo.gl/wzq744qqsy4oDgeF6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition shadow-md"
          >
            <MapPin className="w-5 h-5" />
            Ver localização
          </a>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
