import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial() {

const testimonials = [
  {
    text: "Mollit anim laborum. Dvcuisaute iruxvfg dhjkoloh in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghecepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum. Dvcuisaute iruxvfg dhjkoloh in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghecepteur sfwsignjn.",
    name: "Jessya Inn",
    role: "Co Founder",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente. Dvcuisaute iruxvfg dhjkoloh in re voluptate velit esscillumlore eu quife nrulla parihatur.",
    name: "Alex Doe",
    role: "Marketing Lead",
  },
  {
    text: "Dvcuis aute iruxvfg dhjkoloh in re voluptate velit esscillumlore eu quife nrulla parihatur. Mollit anim laborum. Excghecepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.",
    name: "Sarah Lee",
    role: "Project Manager",
  },
];


  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="bg-blue-950 h-120 w-full py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-start">
      <h1 className="text-[80px] font-extrabold text-transparent  absolute -translate-y-4 inset-0 flex justify-start items-center opacity-20 tracking-wider select-none"
      style={{
    WebkitTextStroke: "1px #9CA3AF", // gray border color
  }}
      >
        FEEDBACK
      </h1>
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-white z-10">
        TESTIMONIAL
      </h2>
    </div>
        <section className=" text-white   relative overflow-hidden">
      <div className="w-150 h-90 mx-auto">
        {/* Quote Icon */}
        <div className="text-orange-500 ">
          <Quote className="w-16 h-16 stroke-[1.5] rotate-180" />
        </div>

        {/* Text */}
        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-10 transition-all duration-500 ease-in-out">
          {testimonials[current].text}
        </p>

        {/* Author */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="h-10 w-[2px] bg-orange-500"></span>
            <div>
              <p className="font-semibold text-lg">{testimonials[current].name}</p>
              <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 absolute bottom-1 right-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-orange-500 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400 hover:text-orange-500" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-orange-500 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-gray-400 hover:text-orange-500" />
          </button>
        </div>
      </div>
    </section>
      </div>
    </section>
  )
}
