export default function WhoWeAre() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl  mx-auto pl-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <div className="flex flex-col gap-7">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-20">WHO WE ARE</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 20 years of experience in the construction industry, we have established ourselves as a trusted
              partner for commercial and residential projects. Our team of skilled professionals is dedicated to
              delivering exceptional results on every project.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We combine traditional craftsmanship with modern technology to create sustainable, innovative solutions
              that exceed our clients' expectations.
            </p>
            <button className="bg-orange-500 h-12 w-30 text-white  py-2 rounded hover:bg-orange-800 transition">
              Learn More
            </button>
          </div>

          <div className="relative">
            <img src="/safe_in.png.webp" alt="Construction professional" className="w-full rounded" />
            <div className="absolute bottom-4 right-4 bg-orange-500 text-white p-4 rounded">
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
