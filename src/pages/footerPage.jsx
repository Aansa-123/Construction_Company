
export default function Footer() {

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              <span className="text-white font-bold">Construction</span>
            </div>
            <p className="text-gray-400 text-sm">Building excellence through innovation and quality craftsmanship.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Implementation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">Email: info@construction.com</p>
            <p className="text-gray-400 text-sm mb-4">Phone: +1 (555) 123-4567</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="space-x-2">
            <button className="text-gray-200 bg-gray-600 h-8 px-2 rounded">Email Address</button>
            <button className="text-white">Sign Up</button>
            <img src="map-footer.png" alt="" />
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Construction Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
