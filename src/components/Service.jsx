export default function Services() {
  const services = [
    {
      title: "Engineering",
      description: "Expert structural and civil engineering solutions",
      image: "/servicess1.png.webp",
    },
    {
      title: "Maintenance",
      description: "Professional maintenance and repair services",
      image: "/servicess2.png.webp",
    },
    {
      title: "Implementation",
      description: "Complete project implementation and execution",
      image: "/servicess3.png.webp",
    },
  ]

  return (
<section className="bg-white py-8 flex justify-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Background text and heading */}
    <div className="relative text-start">
      <h1 className="text-[80px] font-extrabold text-transparent  absolute -translate-y-4 inset-0 flex justify-start items-center opacity-20 tracking-wider select-none"
      style={{
    WebkitTextStroke: "1px #9CA3AF", // gray border color
  }}
      >
        SERVICES
      </h1>
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-[#1E1E1E] z-10">
        OUR SERVICES
      </h2>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-[#1E1E1E] mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6">{service.description}</p>

            {/* Bottom row */}
            <div className="flex justify-start gap-2 items-center border-b m border-orange-500 pt-3">
              <a
                href="#"
                className="text-orange-500 font-medium hover:underline"
              >
                <span className="text-black">Read More</span>
                
              </a>

              {/* Plus Icon */}
              <span
                className="text-orange-500 text-xl font-bold  w-8 h-8 flex items-center justify-center transition-all duration-300
                group-hover:bg-orange-500 group-hover:text-white"
              >
                +
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  )
}
