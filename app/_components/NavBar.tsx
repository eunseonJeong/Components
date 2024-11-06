import React from 'react';

type NavBarProps = {
    links: { label: string; href: string }[];
};

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">MyApp</div>
                <ul className="flex space-x-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-white hover:text-blue-200 font-semibold transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
