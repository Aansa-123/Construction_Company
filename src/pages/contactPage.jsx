import React from 'react'
import Maps from '../components/Map'
import Contact from '../components/Contact'
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
function ContactPage() {
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
    <Maps/>
    <Contact/>
    </>
  )
}

export default ContactPage