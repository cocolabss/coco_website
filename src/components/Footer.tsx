import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import FormContact from './FormContact';

import LogoBrown from '../assets/images/logo_brown.png';

const Footer = () => {
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const menuItems = [
        {
            title: "Proyectos",
            path: "/",
            items: []
        },
        {
            title: "Servicios",
            path: "/",
            items: [
                { name: "Diseño y desarrollo de nuevos productos", path: "/" },
                { name: "Optimización de productos de software", path: "/" },
                { name: "Modernización de sistemas", path: "/" }
            ]
        },
        {
            title: "Blog",
            path: "/",
            items: []
        }
    ];

    return (
        <footer>
            <FormContact />
            <div className='bg-white container mx-auto px-6 md:px-8 py-6'>
                <div className="flex flex-row justify-between items-start pb-8">
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-between sm:flex-1">
                        <div className="mb-6 sm:mb-0 sm:mr-8 flex flex-col justify-center items-center md:items-start">
                            <img src={LogoBrown} alt="Logo" className="w-[200px]" />
                            <p className="text-sm text-brown mt-4">
                                Solidez en el desarrollo de software
                            </p>
                            <p className="text-base text-brown font-medium">
                                Medellín, Colombia
                            </p>
                        </div>

                        <div className="text-right">
                            <div className="flex items-center justify-center md:justify-end mb-2 relative group">
                                <a
                                    href="mailto:cocolabssas@gmail.com?subject=Consulta&body=Hola, me gustaría obtener más información."
                                    target='_blank'
                                    className="text-brown font-medium flex items-center"
                                >
                                    <i className="far fa-envelope mr-2"></i>
                                    <span>cocolabssas@gmail.com</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-end relative group">
                                <a
                                    href="https://wa.me/573013301908?text=Hola,%20me%20gustaría%20obtener%20más%20información."
                                    target='_blank'
                                    className="text-brown font-medium flex items-center"
                                >
                                    <i className="fab fa-whatsapp mr-2"></i>
                                    <span>+57 301 330 1908</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {menuItems.map((item, index) => (
                    <div key={index} className={`${index === 0 ? 'border-t border-brown' : ''} border-b border-brown py-4`}>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleDropdown(index)}
                        >
                            <h3 className="text-blue font-medium">{item.title}</h3>
                            {activeDropdown === index ? (
                                <FaChevronUp className="text-blue" />
                            ) : (
                                <FaChevronDown className="text-blue" />
                            )}
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === index ? 'max-h-96' : 'max-h-0'}`}>
                            <ul className="mt-2 pl-4">
                                {item.items.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className=""
                                        style={{
                                            transitionDelay: activeDropdown === index ? `${subIndex * 50}ms` : '0ms',
                                            opacity: activeDropdown === index ? 1 : 0
                                        }}
                                    >
                                        <a href={subItem.path} className="block py-3 font-medium relative group text-blue">
                                            <span className="relative inline-block">
                                                {subItem.name}
                                                <span className="absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 scale-x-0 group-hover:scale-x-100 bg-blue" style={{ transformOrigin: 'left center' }}></span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;