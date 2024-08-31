// Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [active, setActive] = useState<string>('Home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Media', href: '#media' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleClick = (name: string) => {
        setActive(name);
    };

    return (
        <nav className="bg-primary p-4 shadow-md fixed w-full z-50">
            <ul className="flex justify-center space-x-8">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={() => handleClick(link.name)}
                            className={`text-white hover:text-background transition-colors duration-300 font-medium ${active === link.name ? 'relative text-background' : ''
                                }`}
                        >
                            {link.name}
                            {active === link.name && (
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-background animate-[grow_0.3s_ease-in-out]"></span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
