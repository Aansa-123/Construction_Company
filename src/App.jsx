import Footer from "./pages/footerPage"
import NavbarPage from "./pages/navbarPage"
import Project from "./components/Projects"
import Services from "./components/Service"
import BlogPage from "./pages/blogPage"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/homePage"
import DetailPage from "./pages/blogDetailPage"
import ProjectDetails from "./pages/projectDetails"
import ServiceDetails from "./pages/serviceDetails"
import ElementPage from "./pages/elementPage"
import AboutPage from "./pages/aboutPage"
import ContactPage from "./pages/contactPage"
import PageNotFound from "./pages/PageNotFound"
function App() {
  const location = useLocation();
    
       const validPaths = [
    "/",
    "/blog",
    "/blog-details",
    "/project-details",
    "/service-details",
    "/elements",
    "/about",
    "/projects",
    "/services",
    "/contact",
  ];
 const hideLayout = !validPaths.includes(location.pathname);
  return (
    <>
      {!hideLayout && <NavbarPage />}
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog-details" element={<DetailPage/>} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/service-details" element={<ServiceDetails />} />
      <Route path="/elements" element={<ElementPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>

       {!hideLayout && <Footer />}
    </>
  )
}

export default App
