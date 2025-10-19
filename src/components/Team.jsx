export default function Team() {
  const team = [
    {
      name: "John Smith",
      role: "Project Manager",
      image: "/team1.png.webp",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Architect",
      image: "/team2.png.webp",
    },
    {
      name: "Mike Davis",
      role: "Site Supervisor",
      image: "/team3.png.webp",
    },
  ]

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative text-start">
      <h1 className="text-[80px] font-extrabold text-transparent  absolute -translate-y-4 inset-0 flex justify-start items-center opacity-20 tracking-wider select-none"
      style={{
    WebkitTextStroke: "1px #9CA3AF", // gray border color
  }}
      >
        EXPERTS
      </h1>
      <h2 className="relative text-4xl md:text-5xl py-8 font-extrabold text-[#1E1E1E] z-10">
        OUR TEAM
      </h2>
    </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:opacity-90 hover:scale-110 rounded mb-4"
              />
              <h3 className="text-xl flex items-center font-bold text-black mb-1">{member.name}</h3>
            <p className="text-orange-500 flex items-center before:content-[''] before:block before:w-6 before:h-[2px] before:bg-orange-500 before:mr-2">
  {member.role}
</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
