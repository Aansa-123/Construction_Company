import Loader from "../components/Loader";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom"

export default function ProjectDetails() {
       const [loading, setLoading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      setLoading(true);
  
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000); // 1 seconds
  
      return () => clearTimeout(timeout);
    }, [location.pathname]); 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
       {loading && <Loader />}
                 <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
                   <Outlet /> {/* your routed page content */}
                 </div>
      {/* Hero Image Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <img
          src="/project_details.webp"
          alt="Modern architecture building"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Content Sections */}
      <div className="w-full max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* First Paragraph */}
        <p className="text-gray-700 leading-relaxed text-base">
          Mollit anim laborum. Dveuis aute iruvfg dhiklohr in re voluptate velit essollumere eu quife nulla pariatur.
          Excepteur sfdsgjgnt occa cupidatat non aute iruvfg dhijmlbadeserunt molitemnih incididunt ut.dSfu lajobore
          moflit anim. Mollit anim laborum. Dveuis aute iruvfg
        </p>

        {/* Second Paragraph */}
        <p className="text-gray-700 leading-relaxed text-base">
          Mollit anim laborum. Dveuis aute iruvfg dhiklohr in re voluptate velit essollumere eu quife nulla pariatur.
          Excepteur sfdsgjgnt occa cupidatat non aute iruvfg dhijmlbadeserunt molitemnih incididunt ut.dSfu lajobore
          moflit anim. Mollit anim laborum. Dveuis aute iruvfg
        </p>

        {/* Our Main Goal Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our main goal</h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Mollit anim laborum. Dveuis aute iruvfg dhiklohr in re voluptate velit essollumere eu quife nulla pariatur.
            Excepteur sfdsgjgnt occa cupidatat non aute iruvfg dhijmlbadeserunt molitemnih incididunt ut.dSfu lajobore
            moflit anim. Mollit anim laborum. Dveuis aute iruvfg
          </p>
        </div>

        {/* Take a Look to Our Challenges Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Take a look to our challenges</h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Mollit anim laborum. Dveuis aute iruvfg dhiklohr in re voluptate velit essollumere eu quife nulla pariatur.
            Excepteur sfdsgjgnt occa cupidatat non aute iruvfg dhijmlbadeserunt molitemnih incididunt ut.dSfu lajobore
            moflit anim. Mollit anim laborum. Dveuis aute iruvfg
          </p>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </button>
    </div>
  )
}
