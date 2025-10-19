import StatBox from "./StatBox";


export default function Stats() {
  return (
    <section className="relative w-full min-h-[480px]  bg-blue-950 text-primary-foreground overflow-hidden">
      {/* Background Overlay Pattern */}
      <div
        className="absolute bg-blue-950 inset-0 opacity-10 bg-center bg-cover"
        style={{
          backgroundImage: "url('/blueprint.png')",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl flex items-center flex-col mx-auto text-center py-24 px-6">
           <div className="relative h-20 text-start">
      <h1 className="text-[80px] font-extrabold text-transparent  absolute -translate-y-4 inset-0 flex justify-start items-center opacity-20 tracking-wider select-none"
      style={{
    WebkitTextStroke: "1px #9CA3AF", // gray border color
  }}
      >
        LETS CHAT
      </h1>
      <h2 className="relative text-4xl md:text-5xl font-extrabold text-white z-10">
        LETS TALK WITH US
      </h2>
    </div>
        <p className=" text-white leading-relaxed text-sm md:text-base mb-10">
          Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit
          esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa
          cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt
          ut;o5tu layjobore mofllit anim.
        </p>

        <button  className=" bg-white h-10 w-25  py-2">
          Read More
        </button>
      </div>

      {/* Orange Stats Box */}
      <StatBox />
    </section>
  );
};


