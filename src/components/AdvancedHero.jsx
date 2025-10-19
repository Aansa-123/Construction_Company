export default function AdvancedHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-12 bg-gradient-to-r from-[#2e3456] to-[#b6b7bd]">
      {/* Small heading */}
     

      {/* Title */}
      <div className="relative">
       

        <h1
          className="text-[8vw] font-extrabold text-transparent stroke-white absolute top-full left-0 leading-none animate-float"
          style={{
            WebkitTextStroke: "2px white",
            background: "linear-gradient(to top, #f97316 50%, transparent 50%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          CONSTRUCTION
        </h1>
      </div>

     

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
