"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Chesfound",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "About", href: "/about" },
        { name: "Mission", href: "/mission" },
        { name: "Vision", href: "/vision" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Reports", href: "/reports" },
    {
      name: "Media",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Photos", href: "/media/photos" },
        { name: "Videos", href: "/media/videos" },
        { name: "Gallery", href: "/media/gallery" },
      ],
    },
    { name: "News", href: "/news" },
  ];

  return (
    <>
      <nav
        className={`border-b border-white/20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="KITE Initiative Logo"
                width={500}
                height={500}
                className="h-auto w-auto max-h-16 object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-white hover:text-green-600 transition-colors duration-200 font-medium text-sm tracking-wide"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <motion.span
                        className="ml-1 inline-block"
                        animate={{
                          rotate: openDropdown === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ▼
                      </motion.span>
                    )}
                  </a>

                  <AnimatePresence>
                    {item.hasDropdown && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-13 left-0 mt-0 w-52 bg-white shadow-xl z-50 overflow-hidden"
                      >
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.2 }}
                            className="block pt-4 pb-2 text-gray-800 hover:text-green-600 transition-colors border-b border-gray-200 last:border-b-2 w-[80%] mx-auto font-light text-sm"
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop Donate Button */}
            <div className="hidden lg:flex items-center">
              <button className="bg-green-800 text-white px-6 py-3 font-bold text-xs uppercase tracking-wide transition-colors duration-200 flex items-center gap-3">
                <span>CONTACT US</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden bg-white/90 backdrop-blur-sm border border-white/30 rounded px-3 py-2 text-gray-700 hover:bg-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Drawer */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMenuOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image
              src="/logo.jpg"
              alt="KITE Initiative Logo"
              width={150}
              height={50}
              className="h-auto w-auto max-h-12 object-contain"
            />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="overflow-y-auto h-full pb-20">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-200">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full px-6 py-4 text-left text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between font-medium"
                    >
                      <span>{item.name}</span>
                      <motion.span
                        animate={{
                          rotate: openDropdown === item.name ? 45 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-lg"
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="bg-gray-50 overflow-hidden"
                        >
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <motion.a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={toggleMenu}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: index * 0.05,
                                duration: 0.2,
                              }}
                              className="block px-10 py-3 text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                            >
                              {dropdownItem.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Donate Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-wide transition-colors duration-200 flex items-center justify-center gap-3">
              <span>DONATE TODAY</span>
              <span className="bg-white/20 p-1.5 rounded">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
