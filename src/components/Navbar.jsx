import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "INÍCIO", href: "#home" },
    { name: "SOBRE", href: "#about" },
    { name: "GALERIA", href: "#gallery" },
    { name: "AVALIAÇÕES", href: "#reviews" },
    { name: "CONTATO", href: "#contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`flex justify-between items-center px-6 py-4 h-20 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-accent/95 backdrop-blur-md shadow-lg border-b border-gold/20"
            : "bg-transparent shadow-none border-none"
        }`}
      >
        {/* Logo Responsiva */}
        <div className="relative group flex items-center">
          <img
            src="https://res.cloudinary.com/pageja/image/upload/v1758934756/Mauro_barros_logo_png_branco_kpvwob.png"
            alt="Logo Mauro Barros"
            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-light px-6 py-3 font-medium tracking-wide text-sm hover:text-gold transition-all duration-300 ease-out group overflow-hidden rounded-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-gold group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 ease-out"></div>
            </button>
          ))}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center mobile-menu-container">
          <button
            className="relative text-light hover:text-gold p-2 rounded-lg transition-all duration-300 ease-out hover:bg-gold/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-out mobile-menu-container ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-dark/80 backdrop-blur-sm transition-opacity duration-500 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          className={`absolute top-20 left-4 right-4 bg-dark/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold/20 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95"
          }`}
        >
          <div className="p-6">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`relative text-light px-6 py-4 font-medium tracking-wide hover:text-gold transition-all duration-300 ease-out group rounded-xl ${
                    isMenuOpen ? "animate-fade-in-up" : ""
                  }`}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <span className="relative z-10 text-center block">
                    {item.name}
                  </span>
                  <div className="absolute left-0 top-1/2 w-1 h-0 bg-gold group-hover:h-8 group-hover:-translate-y-1/2 transition-all duration-300 ease-out rounded-full"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
