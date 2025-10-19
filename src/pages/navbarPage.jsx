import { useState } from "react"
import Header from "../components/Header"

import { Outlet, useLocation } from "react-router-dom"
export default function NavbarPage() {
  const [activeTab, setActiveTab] = useState("blog")
  

  return (
    <>
    <div className="bg-white flex flex-col  w-full  min-h-screen  gap-15">
      <Header />
    </div>
    </>
  )
}
