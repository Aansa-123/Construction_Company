import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["View All", "Interior", "Exterior", "Engineering", "Sign"];

  const projects = [
    {
      id: 1,
      title: "Florida Chemicals Factory",
      category: "engineering",
      image: "/project1.png.webp",
    },
    {
      id: 2,
      title: "Florida Chemicals Factory",
      category: "exterior",
      image: "/project2.png.webp",
    },
    {
      id: 3,
      title: "Florida Chemicals Factory",
      category: "exterior",
      image: "/project3.png.webp",
    },
    {
      id: 4,
      title: "Florida Chemicals Factory",
      category: "interior",
      image: "/project4.png.webp",
    },
    {
      id: 5,
      title: "Florida Chemicals Factory",
      category: "engineering",
      image: "/project5.png.webp",
    },
    {
      id: 6,
      title: "Florida Chemicals Factory",
      category: "sign",
      image: "/project6.png.webp",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section  className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative text-start">
          <h1
            className="text-[120px] font-extrabold text-transparent  absolute -translate-y-8 inset-0 flex justify-start items-center opacity-20 tracking-wider select-none pointer-events-none"
            style={{
              WebkitTextStroke: "1px #9CA3AF", // gray border color
            }}
          >
            Gallery
          </h1>
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-[#1E1E1E] z-10">
            OUR PROJECTS
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-end mb-10">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() =>
                  setActiveFilter(
                    filter === "View All" ? "all" : filter.toLowerCase()
                  )
                }
                className={`px-6 py-2 text-sm font-semibold uppercase tracking-wide border-b-2 transition-all duration-300
          ${
            (filter === "View All" && activeFilter === "all") ||
            filter.toLowerCase() === activeFilter
              ? "border-orange-500 text-orange-500"
              : "border-transparent text-gray-700 hover:text-orange-500 hover:border-orange-500"
          }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {filteredProjects.map((project) => (
    <div key={project.id} className="project-card group relative overflow-hidden rounded-lg shadow-md">
      {/* === Image Section === */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* === Hover Overlay (blue tint) === */}
        <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* === Text Section === */}
      <div className="relative bg-gray-50 h-20 flex items-center justify-center transition-all duration-500 group-hover:bg-blue-950">
        <h1 className="text-2xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-500">
          {project.title}
        </h1>

        {/* === Plus Icon (half on image, half on text) === */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 bg-orange-500 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
            <FiPlus className="w-7 h-7 text-white stroke-[3]" />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Project;
