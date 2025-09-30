import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Contato() {
  return (
    <section className="bg-dark text-gray-200 py-12 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-3xl font-light mb-6 text-center">Contate-nos</h2>

      {/* Divisor */}
      <div className="w-20 h-px bg-gray-400 mb-6"></div>

      <div className="flex flex-col md:flex-row items-center justify-center text-center">
        <a
          href="https://wa.me/message/URXU3PXT3JSTO1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 hover:text-green-400 transition transform hover:-translate-y-1"
        >
          <FaWhatsapp className="text-2xl" />
          <span>+55 61 9390-4678</span>
        </a>

        <div className="hidden md:block w-px h-8 bg-gray-500 mx-4"></div>
        <div className="block md:hidden w-full h-px bg-gray-500 my-2"></div>

        <a
          href="https://www.instagram.com/mauro.barross/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 hover:text-pink-400 transition transform hover:-translate-y-1"
        >
          <FaInstagram className="text-2xl" />
          <span>mauro.barross</span>
        </a>

        <div className="hidden md:block w-px h-8 bg-gray-500 mx-4"></div>
        <div className="block md:hidden w-full h-px bg-gray-500 my-2"></div>

        <a
          href="https://www.facebook.com/mauro.barros.144"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 hover:text-blue-600 transition transform hover:-translate-y-1"
        >
          <FaFacebook className="text-2xl" />
          <span>mauro.barros.144</span>
        </a>

        <div className="hidden md:block w-px h-8 bg-gray-500 mx-4"></div>
        <div className="block md:hidden w-full h-px bg-gray-500 my-2"></div>

        <a
          href="https://www.tiktok.com/@mauro.barross"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 hover:text-gray-400 transition transform hover:-translate-y-1"
        >
          <FaTiktok className="text-2xl" />
          <span>@mauro.barross</span>
        </a>
      </div>
      {/* lansar frase motivasional */}

      <div className="mt-12 max-w-3xl text-center text-gray-400">
        <p>
          A tatuagem é mais do que arte na pele — é uma expressão da
          personalidade, memórias e histórias únicas que carregamos conosco.
        </p>
      </div>
    </section>
  );
}
