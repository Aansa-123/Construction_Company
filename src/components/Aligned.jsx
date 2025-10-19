import React from 'react';

export default function Aligned() {
  const placeholderImage = '/align.webp?height=280&width=200';
  
  const definitionData = [
    {
      title: 'Definition 01',
      text: 'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
    },
    {
      title: 'Definition 02',
      text: 'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
    },
    {
      title: 'Definition 03',
      text: 'Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks'
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Left Aligned Section */}
      <div className="px-16 py-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-12">Left Aligned</h2>
        <div className="flex gap-8 items-start">
          <img 
            src={placeholderImage || "/placeholder.svg"} 
            alt="Left aligned content" 
            className="w-48 h-64 object-cover flex-shrink-0"
          />
          <p className="text-blue-700 leading-relaxed text-base">
            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
          </p>
        </div>
      </div>

      {/* Right Aligned Section */}
      <div className="px-16 py-20 bg-gray-50">
        <h2 className="text-2xl font-bold text-blue-900 mb-12 text-right">Right Aligned</h2>
        <div className="flex gap-8 items-start justify-end">
          <p className="text-blue-700 leading-relaxed text-base max-w-2xl">
            Over time, even the most sophisticated, memory packed computer can begin to run slow if we don't do something to prevent it. The reason why has less to do with how computers are made and how they age and more to do with the way we use them. You see, all of the daily tasks that we do on our PC from running programs to downloading and deleting software can clog our computer sluggish. To keep this from happening, you need to understand the reasons why your PC is getting slower and do something to keep your PC running at its best. You can do this through regular maintenance and PC performance optimization programs
            <br />
            <br />
            Before we discuss all of the things that could be affecting your PC's performance, let's talk a little about what symptoms
          </p>
          <img 
            src={placeholderImage || "/placeholder.svg"} 
            alt="Right aligned content" 
            className="w-48 h-64 object-cover flex-shrink-0"
          />
        </div>
      </div>

      {/* Definition Section */}
      <div className="px-16 py-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-12">Definition</h2>
        <div className="grid grid-cols-3 gap-8">
          {definitionData.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-blue-700 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}