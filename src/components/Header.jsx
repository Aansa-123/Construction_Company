import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import SocialIcons from "../components/SocialIcons";
import AdvancedHero from "./AdvancedHero";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // mobile dropdown toggles (so dropdowns are usable on touch)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  // === Background Images for slider ===
   const slides = [
    { type: "image", src: "/about.jpg" },
    { type: "component", content: <AdvancedHero /> },
    { type: "image", src: "/h1_hero.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // === Dynamic Page Title from route ===
  const location = useLocation();
  const pageName =
    (location.pathname
      .replace("/", "")
      .replace("-", " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Home");

  return (
    <div className="relative h-[550px] overflow-hidden ">
      {/* Background Images (slider) */}
          {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {slide.type === "image" ? (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.src}')` }}
            />
          ) : (
            <div className="w-full h-full">{slide.content}</div>
          )}
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* All Navbar content above background */}
      <header className="relative z-20 text-white">
        {/* ===== Top Info Bar ===== */}
        <div className="bg-slate-900/70 text-white flex justify-center items-center text-sm backdrop-blur-sm">
          <div className="flex items-center justify-between w-[80%] max-w-6xl py-2">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-center md:text-left">
              <span>+ (123) 1234-567-8901</span>
              <span>info@domain.com</span>
              <span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
            </div>

            {/* Social Icons */}
            <div className="ml-6">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* ===== Main Navigation Bar ===== */}
        <div className="bg-slate-800/80 backdrop-blur-md py-4 border-b border-slate-700">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src="/logo.webp" alt="Logo" className="h-12 w-auto mr-4" />
              </Link>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <button
              className="md:hidden text-white text-3xl focus:outline-none"
              onClick={() => {
                setMenuOpen((v) => !v);
                // reset mobile dropdowns when toggling main menu closed
                if (menuOpen) {
                  setMobileBlogOpen(false);
                  setMobilePagesOpen(false);
                }
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Navigation Menu */}
            <nav
              className={`${
                menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-slate-800/90 md:bg-transparent z-40`}
            >
              <div className="flex flex-col md:flex-row md:gap-8 px-6 md:px-0 py-4 md:py-0">
                {[
                  { name: "Home", to: "/" },
                  { name: "About", to: "/about" },
                  { name: "Projects", to: "/projects" },
                  { name: "Services", to: "/services" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-white hover:text-orange-500 transition-colors duration-300 py-2 md:py-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Blog Dropdown (hover on desktop via group + click toggle on mobile) */}
                <div className="relative group py-2 md:py-0">
                  <button
                    type="button"
                    onClick={() => setMobileBlogOpen((v) => !v)}
                    className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors duration-300 py-2 md:py-0"
                  >
                    <span>Blog</span>
                    <span className="md:hidden">
                      {mobileBlogOpen ? <HiChevronUp /> : <HiChevronDown />}
                    </span>
                  </button>

                  {/* Desktop dropdown (visible on hover via group) */}
                  <div className="absolute left-0 mt-2 w-44 bg-white text-slate-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 md:block hidden">
                    <Link
                      to="/blog"
                      className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Blog Grid
                    </Link>
                    <Link
                      to="/blog-details"
                      className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Blog Details
                    </Link>
                  </div>

                  {/* Mobile dropdown (click to expand) */}
                  {mobileBlogOpen && (
                    <div className="md:hidden block mt-2 bg-slate-700 rounded-md shadow-inner">
                      <Link
                        to="/blog"
                        className="block px-4 py-2 hover:bg-slate-600 hover:text-orange-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Blog Grid
                      </Link>
                      <Link
                        to="/blog-details"
                        className="block px-4 py-2 hover:bg-slate-600 hover:text-orange-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Blog Details
                      </Link>
                    </div>
                  )}
                </div>

                {/* Pages Dropdown */}
                <div className="relative group py-2 md:py-0">
                  <button
                    type="button"
                    onClick={() => setMobilePagesOpen((v) => !v)}
                    className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors duration-300 py-2 md:py-0"
                  >
                    <span>Pages</span>
                    <span className="md:hidden">
                      {mobilePagesOpen ? <HiChevronUp /> : <HiChevronDown />}
                    </span>
                  </button>

                  {/* Desktop dropdown */}
                  <div className="absolute left-0 mt-2 w-52 bg-white text-slate-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 md:block hidden">
                    <Link
                      to="/elements"
                      className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Elements
                    </Link>
                    <Link
                      to="/project-details"
                      className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Project Details
                    </Link>
                    <Link
                      to="/service-details"
                      className="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Service Details
                    </Link>
                  </div>

                  {/* Mobile dropdown */}
                  {mobilePagesOpen && (
                    <div className="md:hidden block mt-2 bg-slate-700 rounded-md shadow-inner">
                      <Link
                        to="/elements"
                        className="block px-4 py-2 hover:bg-slate-600 hover:text-orange-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Elements
                      </Link>
                      <Link
                        to="/project-details"
                        className="block px-4 py-2 hover:bg-slate-600 hover:text-orange-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Project Details
                      </Link>
                      <Link
                        to="/service-details"
                        className="block px-4 py-2 hover:bg-slate-600 hover:text-orange-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Service Details
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className="text-white hover:text-orange-500 transition-colors duration-300 py-2 md:py-0"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Contact Button */}
              <div className="px-6 md:px-0 pb-4 md:pb-0">
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-sm font-bold hover:bg-orange-600 transition-colors duration-300 w-full md:w-auto"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT NOW
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* ===== Page Title Section ===== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{pageName}</h1>
        <p className="text-lg">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>{" "}
          / <span className="text-orange-500">{pageName}</span>
        </p>
      </div>
    </div>
  );
}
