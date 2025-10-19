import React, { useState } from 'react';

const Flag = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const tableData = [
    { id: '01', country: 'Canada', flag: '🇨🇦', visits: '645032', barColor: 'bg-blue-500', barWidth: 'w-96' },
    { id: '02', country: 'Canada', flag: '🇺🇸', visits: '645032', barColor: 'bg-pink-500', barWidth: 'w-32' },
    { id: '03', country: 'Canada', flag: '🇬🇧', visits: '645032', barColor: 'bg-orange-500', barWidth: 'w-48' },
    { id: '04', country: 'Canada', flag: '🇩🇪', visits: '645032', barColor: 'bg-cyan-400', barWidth: 'w-56' },
    { id: '05', country: 'Canada', flag: '🇦🇺', visits: '645032', barColor: 'bg-green-400', barWidth: 'w-40' },
    { id: '06', country: 'Canada', flag: '🇨🇳', visits: '645032', barColor: 'bg-blue-500', barWidth: 'w-64' },
    { id: '07', country: 'Canada', flag: '🇧🇫', visits: '645032', barColor: 'bg-purple-500', barWidth: 'w-24' },
    { id: '08', country: 'Canada', flag: '🇧🇪', visits: '645032', barColor: 'bg-pink-400', barWidth: 'w-52' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Block Quotes Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Block Quotes</h2>
          <div className="bg-white p-8 border-l-4 border-blue-900">
            <p className="text-gray-600 leading-relaxed text-base">
              "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking"
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Table</h2>
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 bg-gray-100 px-8 py-4 border-b border-gray-200">
              <div className="col-span-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</div>
              <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Countries</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Visits</div>
              <div className="col-span-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Percentages</div>
            </div>

            {/* Table Rows */}
            {tableData.map((row, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-gray-100 hover:bg-gray-50 items-center">
                <div className="col-span-1 text-sm font-medium text-gray-700">{row.id}</div>
                <div className="col-span-3 flex items-center gap-3">
                  <span className="text-2xl">{row.flag}</span>
                  <span className="text-sm text-gray-700">{row.country}</span>
                </div>
                <div className="col-span-2 text-sm text-gray-700">{row.visits}</div>
                <div className="col-span-6">
                  <div className={`h-1 ${row.barColor} rounded-full ${row.barWidth}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flag;