import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { routeTexts } from '../utils/dataRouteTexts';
import {
    FaSearch,
    FaUser,
    FaChevronDown,
    FaChevronUp,
    FaTimes,
    FaBars
} from 'react-icons/fa';

import LogoWhite from "../assets/images/logo_white.png";
import LogoBrown from "../assets/images/logo_brown.png";

const Navbar = () => {
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [navbarClass, setNavbarClass] = useState("bg-transparent py-2");
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);

    type RouteKey = keyof typeof routeTexts;
    const currentRoute: RouteKey = location.pathname as RouteKey;

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        let newClass = "transition-all duration-300";

        if (isDropdownOpen) {
            newClass += " bg-blue shadow-lg py-0";
        } else if (location.pathname !== "/") {
            newClass += " bg-white shadow-lg py-0";
        } else if (scrolled) {
            newClass += " bg-white shadow-lg py-0";
        } else {
            newClass += " bg-transparent py-2";
        }

        setNavbarClass(newClass);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isDropdownOpen, scrolled, location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownEnter = (menuItem: string) => {
        if (menuItem === "Servicios") {
            setIsDropdownOpen(true);
            setActiveDropdown(menuItem);
        }
    };

    const handleMobileDropdown = (menuItem: string) => {
        setActiveDropdown(activeDropdown === menuItem ? null : menuItem);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        if (!searchOpen) {
            setTimeout(() => {
                const searchInput = document.getElementById("search-input");
                searchInput?.focus();
            }, 100);
        }
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchQuery("");
        setSearchOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
                setActiveDropdown(null);
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node) && searchOpen) {
                setSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchOpen]);

    const menuItems = [
        {
            name: "CMR",
            path: "",
            subItems: null,
            comingSoon: true
        },
        {
            name: "Servicios",
            path: null,
            subItems: [
                { name: "Desarrollo de nuevos productos", path: "/development" },
                { name: "Optimización de productos", path: "/optimization" },
                { name: "Modernización de sistemas", path: "/modernization" }
            ]
        },
        {
            name: "Casos de estudio",
            path: "/projects",
            subItems: null,
            comingSoon: true
        },
        {
            name: "Contáctenos",
            path: "#contact",
            subItems: null
        }
    ];

    return (
        <nav
            id="navbar"
            ref={navbarRef}
            className={`fixed top-0 left-0 w-full z-50 ${navbarClass}`}
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className={`hidden md:flex justify-end items-center pt-2 ${scrolled || isDropdownOpen ? "pb-0" : "pb-2"
                    }`}>
                    <a
                        href="/login"
                        className={`flex items-center font-medium transition-colors relative group ${isDropdownOpen ? 'text-white hover:text-gray-200'
                            : scrolled ? 'text-brown hover:text-blue'
                                : currentRoute === '/' ? 'text-white hover:text-gray-200'
                                    : 'text-brown hover:text-blue'
                            }`}
                    >
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 transition-colors duration-200 ${isDropdownOpen ? 'border-white group-hover:border-gray-200 group-hover:bg-white group-hover:bg-opacity-20'
                            : scrolled ? 'border-brown group-hover:border-blue group-hover:bg-blue'
                                : currentRoute === '/' ? 'border-white group-hover:border-gray-200 group-hover:bg-white group-hover:bg-opacity-20'
                                    : 'border-brown group-hover:border-blue group-hover:bg-blue'
                            }`}>
                            <FaUser className={`text-sm ${isDropdownOpen ? 'text-white group-hover:text-gray-200'
                                : scrolled ? 'text-brown group-hover:text-white'
                                    : currentRoute === '/' ? 'text-white group-hover:text-gray-200'
                                        : 'text-brown group-hover:text-blue'
                                }`} />
                        </div>
                        Iniciar sesión
                    </a>
                </div>

                <div className="flex justify-between items-center h-16">
                    <a href="/" className="z-50">
                        <img
                            src={
                                isDropdownOpen ? LogoWhite
                                    : scrolled ? LogoBrown
                                        : currentRoute === '/' ? LogoWhite
                                            : LogoBrown
                            }
                            alt="Logo"
                            className={`transition-all duration-300 ${scrolled || isDropdownOpen ? "h-10" : "h-12"
                                }`}
                        />
                    </a>

                    <div className="hidden md:flex items-center">
                        <div className="relative">
                            <ul className="flex space-x-8">
                                {menuItems.map((item) => {
                                    const isServicesItem = item.name === "Servicios";
                                    const isServicesActive = isServicesItem &&
                                        item.subItems?.some(subItem => subItem.path === currentRoute);

                                    const isActive = currentRoute === item.path || isServicesActive;

                                    return (
                                        <li
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => handleDropdownEnter(item.name)}
                                            onMouseLeave={() => { }}
                                        >
                                            {item.subItems ? (
                                                <button
                                                    className={`flex items-center ${isDropdownOpen
                                                        ? 'text-white'
                                                        : scrolled
                                                            ? isActive
                                                                ? 'text-blue'
                                                                : 'text-brown'
                                                            : isActive
                                                                ? 'text-blue'
                                                                : currentRoute === '/'
                                                                    ? 'text-white'
                                                                    : 'text-brown'
                                                        } transition-colors duration-200 font-medium relative group`}
                                                >
                                                    <span className="relative">
                                                        {item.name}
                                                        <span
                                                            className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-current' : 'w-0 group-hover:w-full bg-current'
                                                                }`}
                                                        ></span>
                                                    </span>
                                                </button>
                                            ) : item.comingSoon ? (
                                                    <div className="relative group">
                                                        <div className="flex flex-col items-center">
                                                            <span className={`text-xs mb-1 absolute -top-4 text-blue animate-pulse ${isDropdownOpen ? 'text-white' : scrolled ? 'text-blue' : currentRoute === '/' ? 'text-white' : 'text-blue'}`}>
                                                                Próximamente
                                                            </span>
                                                            <span className={`relative font-medium ${isDropdownOpen ? 'text-white' : scrolled ? 'text-brown' : currentRoute === '/' ? 'text-white' : 'text-brown'}`}>
                                                                {item.name}
                                                                <span className={`absolute top-1/2 left-0 w-full h-px bg-current transform -translate-y-1/2 ${isDropdownOpen ? 'text-white' : scrolled ? 'text-blue' : currentRoute === '/' ? 'text-white' : 'text-blue'}`}></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                            ) : (
                                                <a
                                                    href={item.path}
                                                    className={`relative group font-medium transition-colors duration-200 ${isDropdownOpen
                                                        ? 'text-white'
                                                        : scrolled
                                                            ? isActive
                                                                ? 'text-blue'
                                                                : 'text-brown'
                                                            : isActive
                                                                ? 'text-blue'
                                                                : currentRoute === '/'
                                                                    ? 'text-white'
                                                                    : 'text-brown'
                                                        }`}
                                                >
                                                    <span className="relative">
                                                        {item.name}
                                                        <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full bg-current' : 'w-0 group-hover:w-full bg-current'
                                                            }`}></span>
                                                    </span>
                                                </a>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Dropdown de servicios */}
                            {isDropdownOpen && activeDropdown === "Servicios" && (
                                <div
                                    ref={dropdownRef}
                                    className="fixed top-[90px] left-0 w-full bg-blue shadow-xl z-50 overflow-hidden"
                                    style={{
                                        animation: "dropdownSlideDown 0.5s ease-out forwards",
                                    }}
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <div className="relative px-4 md:px-8 py-6 w-full">
                                        <div className="flex justify-end">
                                            <div className="relative w-[calc(37%-1rem)] flex">
                                                <div className="absolute right-full mr-4 top-0 h-[calc(100%-0.1rem)] w-0.5 overflow-hidden">
                                                    <div
                                                        className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-white/80 to-transparent"
                                                        style={{
                                                            animation: 'dropdownLine 1s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                                                        }}
                                                    />
                                                </div>

                                                <div className="flex flex-col space-y-3 w-full text-left ml-4">
                                                    {menuItems
                                                        .find(item => item.name === "Servicios")
                                                        ?.subItems?.map((subItem, index) => (
                                                            <a
                                                                key={subItem.name}
                                                                href={subItem.path}
                                                                className={`block relative group ${currentRoute === subItem.path
                                                                    ? 'text-white font-semibold'
                                                                    : 'text-white'
                                                                    } transition-colors duration-150 rounded`}
                                                                style={{
                                                                    animation: `dropdownItemFadeIn 0.5s ease-out forwards`,
                                                                    animationDelay: `${index * 0.1}s`,
                                                                    opacity: 0,
                                                                    transform: 'translateX(-20px)'
                                                                }}
                                                            >
                                                                <span className="relative inline-block">
                                                                    {subItem.name}
                                                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${currentRoute === subItem.path
                                                                        ? 'w-full'
                                                                        : 'w-0 group-hover:w-full'
                                                                        }`}></span>
                                                                </span>
                                                            </a>
                                                        ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Botón de búsqueda desktop */}
                        <button
                            onClick={toggleSearch}
                            className={`ml-8 ${isDropdownOpen ? 'text-white'
                                : scrolled ? 'text-brown'
                                    : currentRoute === '/' ? 'text-white'
                                        : 'text-brown'
                                } hover:opacity-75 transition-opacity`}
                        >
                            <FaSearch />
                        </button>
                    </div>

                    {/* Menú móvil - Botones */}
                    <div className="flex md:hidden items-center space-x-4">
                        <button
                            onClick={toggleSearch}
                            className={`${scrolled ? 'text-brown'
                                : currentRoute === '/' ? 'text-white'
                                    : 'text-brown'
                                }`}
                        >
                            <FaSearch size={20} />
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`${scrolled ? 'text-brown'
                                : currentRoute === '/' ? 'text-white'
                                    : 'text-brown'
                                } text-2xl focus:outline-none`}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil - Contenido */}
            <div
                className={`md:hidden fixed inset-0 bg-white z-40 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ top: scrolled ? '64px' : '80px' }}
            >
                <div className="container mx-auto px-4 py-4 overflow-y-auto h-[calc(100vh-64px)]">
                    <ul className="flex flex-col space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => handleMobileDropdown(item.name)}
                                            className={`flex justify-between items-center w-full py-3 text-lg relative group font-medium ${currentRoute === item.path ? 'text-blue' : 'text-brown hover:text-blue'
                                                }`}
                                        >
                                            <span className="relative inline-block">
                                                {item.name}
                                                <span className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 ${currentRoute === item.path ? 'bg-blue' : 'bg-blue scale-x-0 group-hover:scale-x-100'
                                                    }`} style={{ transformOrigin: 'left center' }}></span>
                                            </span>
                                            {activeDropdown === item.name ? (
                                                <FaChevronUp className="transition-transform duration-200" />
                                            ) : (
                                                <FaChevronDown className="transition-transform duration-200" />
                                            )}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-96' : 'max-h-0'
                                                }`}
                                        >
                                            <ul className="pl-4 py-2 space-y-2">
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <a
                                                            href={subItem.path}
                                                            className={`block py-2 relative group font-medium ${currentRoute === subItem.path ? 'text-blue' : 'text-brown hover:text-blue'
                                                                }`}
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            <span className="relative inline-block">
                                                                {subItem.name}
                                                                <span className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 ${currentRoute === subItem.path ? 'bg-blue' : 'bg-blue scale-x-0 group-hover:scale-x-100'
                                                                    }`} style={{ transformOrigin: 'left center' }}></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : item.comingSoon ? (
                                    <div className="relative group">
                                        <div className="flex flex-col items-start">
                                            <span className={`text-xs mb-1 text-blue animate-pulse ${isDropdownOpen ? 'text-white' : scrolled ? 'text-blue' : currentRoute === '/' ? 'text-white' : 'text-blue'}`}>
                                                Próximamente
                                            </span>
                                                <span className={`relative font-medium ${isDropdownOpen ? 'text-white' : scrolled ? 'text-brown' : currentRoute === '/' ? 'text-white' : 'text-brown'}`}>
                                                    {item.name}
                                                    <span className={`absolute top-1/2 left-0 w-full h-px bg-current transform -translate-y-1/2 ${isDropdownOpen ? 'text-white' : scrolled ? 'text-blue' : currentRoute === '/' ? 'text-white' : 'text-blue'}`}></span>
                                                </span>
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        href={item.path}
                                            onClick={(e) => {
                                                if (!item.comingSoon) {
                                                    e.preventDefault();
                                                    setIsMenuOpen(false);
                                                }
                                            }}
                                        className={`block py-3 text-lg relative group font-medium ${currentRoute === item.path ? 'text-blue' : 'text-brown hover:text-blue'
                                            }`}
                                    >
                                        <span className="relative inline-block">
                                            {item.name}
                                            <span className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 ${currentRoute === item.path ? 'bg-blue' : 'bg-blue scale-x-0 group-hover:scale-x-100'
                                                }`} style={{ transformOrigin: 'left center' }}></span>
                                        </span>
                                    </a>
                                )}
                            </li>
                        ))}
                        <li className="mt-4 pt-4 border-t border-brown">
                            <a
                                href="/login"
                                className={`flex items-center text-lg font-medium ${currentRoute === '/' ? 'text-blue' : 'text-brown hover:text-blue'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 transition-colors duration-200 ${currentRoute === '/' ? 'border-blue' : 'border-brown hover:border-blue'
                                    }`}>
                                    <FaUser className={`text-sm ${currentRoute === '/' ? 'text-blue' : 'text-brown'
                                        }`} />
                                </div>
                                <span className="relative inline-block">
                                    Iniciar sesión
                                    <span className={`absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 ${currentRoute === '/' ? 'bg-blue' : 'bg-blue scale-x-0 group-hover:scale-x-100'
                                        }`} style={{ transformOrigin: 'left center' }}></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Búsqueda */}
            {searchOpen && (
                <div className="fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-in-out translate-x-0">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex justify-between items-center mb-8">
                            <a href="/" className="z-50">
                                <img src={LogoBrown} alt="Logo" className="h-10" />
                            </a>
                            <button
                                onClick={toggleSearch}
                                className="text-gray-600 hover:text-gray-800 text-2xl"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <input
                                id="search-input"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Buscar..."
                                className="w-full border-b-2 border-gray-300 py-4 text-2xl focus:outline-none focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 bottom-4 text-gray-500 hover:text-blue-500"
                            >
                                <FaSearch size={24} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;