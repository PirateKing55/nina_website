import React, { useState } from "react";
import happyPlumLogo from "../assets/images/happyPlumLogo.jpeg";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Media", href: "#media" },
  ];

  const handleClick = (name: string) => {
    setActive(name);
  };

  return (
    <nav className="bg-primary p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="https://happy-plum.com" target="_blank" className="text-white text-2xl font-bold">
            <img src={happyPlumLogo} alt="Logo" className="h-10 inline-block mr-2" />
            Happy Plum
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => handleClick(link.name)} className={`text-white text-xl hover:text-background transition-colors duration-300 font-medium ${active === link.name ? "relative text-background" : ""}`}>
                {link.name}
                {active === link.name && <span className="absolute left-0 bottom-0 h-0.5 w-full bg-background animate-[grow_0.3s_ease-in-out]"></span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="flex-shrink-0">
          <a href="#contact" className="px-4 py-2 bg-background text-primary rounded-full font-semibold transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
