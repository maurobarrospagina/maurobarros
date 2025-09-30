function Reviews() {
  return (
    <section className="w-full pb-12 pt-12 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#b8860b] rounded-full blur-[160px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5f5f5] rounded-full blur-[200px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] mb-6 tracking-tight leading-tight">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 sm:w-28 md:w-32 h-1 bg-[#b8860b] mx-auto rounded-full shadow-lg shadow-[#b8860b]/50"></div>
        </div>

        {/* Reviews Widget Container */}
        <div className="bg-[#2a2a2a]/70 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300">
          <div
            className="elfsight-app-00f4c6b1-6701-4fd7-b462-e4ccd947bc23"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
