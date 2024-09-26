import React, { useState } from "react";
import happyPlumLogo from "../assets/images/happyPlumLogo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Media", href: "#media" },
  ];

  const handleClick = (name: string) => {
    setActive(name);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="https://happy-plum.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-bold flex items-center">
            <img src={happyPlumLogo} alt="Logo" className="h-10 inline-block mr-2" />
            Happy Plum
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`flex-col md:flex md:flex-row md:space-x-8 fixed md:static top-16 left-0 w-full bg-primary md:bg-transparent md:translate-x-0 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:justify-center md:items-center md:space-x-8 md:w-auto md:h-auto`}>
          {navLinks.map((link) => (
            <li key={link.name} className="text-center md:text-left">
              <a href={link.href} onClick={() => handleClick(link.name)} className={`block px-4 py-2 md:p-0 text-white text-xl hover:text-background transition-colors duration-300 font-medium ${active === link.name ? "relative text-background" : ""}`}>
                {link.name}
                {active === link.name && <span className="absolute left-0 bottom-0 h-0.5 w-full bg-background animate-[grow_0.3s_ease-in-out]"></span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block flex-shrink-0">
          <a href="#contact" className="px-4 py-2 bg-background text-primary rounded-full font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
