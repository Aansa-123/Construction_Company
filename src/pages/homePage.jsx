import React from 'react'
import Project from "../components/Projects"
import News from "../components/News"
import Services from "../components/Service"
import WhoWeAre from "../components/Who"
import Testimonial from "../components/Testimonial"
import Team from "../components/Team"
import Stats from "../components/Stats"
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom"
function HomePage() {
       const [loading, setLoading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      setLoading(true);
  
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000); // 1 seconds
  
      return () => clearTimeout(timeout);
    }, [location.pathname]); 
  return (
   <>
    <div className="bg-white flex items-center flex-col gap-20">
       {loading && <Loader />}
                 <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
                   <Outlet /> {/* your routed page content */}
                 </div>
     <Services  />
     <WhoWeAre />
     <Project />
     <Stats />
     <Team />
     <Testimonial />
     <News />
     </div>
   </>
  )
}

export default HomePage