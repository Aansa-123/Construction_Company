import React from 'react'
import FormElement from '../components/FormElements'
import Gallery from '../components/Gallery'
import Flag from '../components/Flag'
import Aligned from '../components/Aligned'
import ButtonShowcase from '../components/ButtonShowcase'
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom"
function ElementPage() {
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
     {loading && <Loader />}
               <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
                 <Outlet /> {/* your routed page content */}
               </div>
    <ButtonShowcase/>
    <Aligned/>
    <Flag/>
    <Gallery/>
    <FormElement/>
    </>
  )
}

export default ElementPage