import React, { useEffect, useState } from "react"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true)
  }, [])

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  const menuItems = [
    "Home",
    "About",
    "Research",
    "Features",
    "Implementation",
    "Technology",
    "Milestones",
    "Gallery",
    "Contact",
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-1000 ease-out backdrop-blur-xl bg-white/30 shadow-lg ${
        isVisible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo or Brand */}
        <a href="#home" className="text-2xl font-bold text-blue-700">
          K9CarePro
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xl font-semibold text-gray-900 tracking-wide relative transition-colors duration-300 hover:text-blue-600
                  after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[3px]
                  after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-8 h-8 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-md border-t border-blue-200 transition-max-height duration-500 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                className="text-lg font-semibold text-blue-700 hover:text-blue-900"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
