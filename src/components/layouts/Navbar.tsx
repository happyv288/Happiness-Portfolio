import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/logo.png";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`surface-theme border-theme sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "shadow-2xl backdrop-blur-2xl" : "backdrop-blur-lg"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <a href="#home">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-105">
            <img
              src={logo}
              alt="Happiness Victor Logo"
              className="h-14 w-14 object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={`relative transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-blue-500"
                    : "text-theme hover:text-blue-500"
                }`}
              >
                {link.name}

                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-500"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/resume/Happiness_Victor_Resume.pdf"
            download
            className="primary-bg rounded-xl px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-105"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-2 transition hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {menuOpen ? (
              <FaTimes size={22} style={{ color: "var(--text)" }} />
            ) : (
              <FaBars size={22} style={{ color: "var(--text)" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="surface-theme border-theme border-t shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-4 text-lg transition ${
                      activeSection === link.href
                        ? "bg-blue-500/10 text-blue-500"
                        : "text-theme hover:bg-blue-500/10 hover:text-blue-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="border-theme border-t p-6">
              <a
                href="/resume/Happiness_Victor_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="primary-bg block rounded-xl py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
