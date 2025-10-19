import React from 'react'
import WhoWeAre from '../components/Who'
import Testimonial from '../components/Testimonial'
import Team from '../components/Team'
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom"
function AboutPage() {
     const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(timeout);
  }, [location.pathname]); 
  return (
    <>
      {loading && <Loader />}
           <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
             <Outlet /> {/* your routed page content */}
           </div>
    <WhoWeAre/>
    <Testimonial/>
    <Team/>
    </>
  )
}

export default AboutPage