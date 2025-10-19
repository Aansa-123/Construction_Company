import React from "react";

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: "/g1.jpg", alt: "Two children", span: "col-span-2" },
    { id: 2, src: "/g2.jpg", alt: "Child with hat", span: "col-span-2" },
    { id: 3, src: "/g3.jpg", alt: "Two children smiling", span: "col-span-2" },
    { id: 4, src: "/g4.jpg", alt: "Children playing", span: "col-span-3" },
    { id: 5, src: "/g5.jpg", alt: "Girl portrait", span: "col-span-3 " },
    { id: 6, src: "/g6.jpg", alt: "Child in hood", span: "col-span-2" },
    { id: 7, src: "/g7.jpg", alt: "Child running", span: "col-span-2" },
    { id: 8, src: "/g8.jpg", alt: "Man sitting", span: "col-span-2" },
  ];

  const headerItems = [
    "This is header 01",
    "This is header 02",
    "This is header 03",
    "This is header 04",
    "This is header 01",
    "This is header 01",
  ];

  const unorderedItems = [
    "Fta Keys",
    "For Women Only Your Computer Usage",
    "Facts Why Inkjet Printing Is Very Appealing",
    "Addiction When Gambling Becomes",
    "Dealing With Technical Support 10 Useful Tips",
    "Make Myspace Your Best Designed Space",
    "Cleaning And Organizing Your Computer",
  ];

  const orderedItems = [
    {
      title: "Fta Keys",
      subitems: [],
      sub: [],
    },
    {
      title: "For Women Only Your Computer Usage",
      subitems: [],
      sub: [],
    },
    {
      title: "Facts Why Inkjet Printing Is Very Appealing",
      subitems: ["Addiction When Gambling Becomes", "Adittion ordered list"],
      sub: ["Protective", "Preventative", "Maintenance"],
    },
    {
      title: "Protective Preventative Maintenance",
      subitems: [],
      sub: [],
    },
    {
      title: "Dealing With Technical Support 10 Useful Tips",
      subitems: [],
      sub: [],
    },
    {
      title: "Make Myspace Your Best Designed Space",
      subitems: [],
      sub: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Image Gallery
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-6 gap-4 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${image.span} overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Gallery Headers */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Image Gallery
            </h2>
            <div className="space-y-2">
              {headerItems.map((item, index) => (
                <p key={index} className="text-blue-400 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Unordered List */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Unordered List
            </h2>
            <ul className="space-y-3">
              {unorderedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">○</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ordered List */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Ordered List
            </h2>
            <ol className="space-y-3">
              {orderedItems.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold min-w-fit">
                      0{index + 1}.
                    </span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  {item.subitems.length > 0 && (
                    <ul className="list-decimal pl-6 text-gray-700">
                      {item.sub.map((subitem, subindex) => (
                        <li key={subindex}>{subitem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
