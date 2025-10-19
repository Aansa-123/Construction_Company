export default function News() {
  const news = [
    {
      title: "Innovations in Green Building Construction",
        image: "/david_1.png.webp",
    },
    {
      title: "Future of Smart Construction Technology",
      image: "/david_2.png.webp",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="relative mb-20">
          <h1
            className="text-[80px] md:text-[100px] font-extrabold text-transparent absolute inset-0 flex items-center opacity-10 tracking-wider select-none leading-none"
            style={{
              WebkitTextStroke: "1px #9CA3AF",
            }}
          >
            OUR BLOG
          </h1>
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-[#1E1E1E] z-10">
            LATEST NEWS
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-blue-950 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-56 md:h-72 object-cover"
              />

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Category Line */}
                <p className="text-blue-300 text-sm mb-4 border-l-2 pl-3 border-blue-300 uppercase tracking-wide">
                  {article.category || "Properties"}
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold hover:text-orange-500 text-white mb-5 leading-snug">
                  {article.title}
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="font-semibold uppercase tracking-wide hover:text-orange-400 transition"
                >
                  <span className="text-orange-500 hover:text-orange-400">
                    Read More »
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
