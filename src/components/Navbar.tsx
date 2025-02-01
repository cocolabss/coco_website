import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { routeTexts } from '../utils/dataRouteTexts';

import LogoWhite from "../assets/images/logo_white.png";
import LogoBrown from "../assets/images/logo_brown.png";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [scrolled, setScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [navbarClass, setNavbarClass] = useState("bg-transparent");

	const dropdownRef = useRef<HTMLUListElement>(null);

	const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();

		if (location.pathname === "/") {
			const contactSection = document.getElementById("contact");
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			navigate("/", { replace: true });

			setTimeout(() => {
				const contactSection = document.getElementById("contact");
				if (contactSection) {
					contactSection.scrollIntoView({ behavior: "smooth" });
				}
			}, 300);
		}
	};

	type RouteKey = keyof typeof routeTexts;
	const currentRoute: RouteKey = location.pathname as RouteKey;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
				setNavbarClass("bg-white shadow-lg text-teal");
			} else {
				setScrolled(false);
				setNavbarClass("bg-transparent");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav
			id="navbar"
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navbarClass}`}
		>
			<div className="px-6 md:px-48 flex justify-between items-center h-16 md:h-20">
				<a href="/">
					<img
						src={scrolled ? LogoBrown : currentRoute === '/' ? LogoWhite : LogoBrown}
						alt="Logo"
						className="w-[150px] md:w-[200px]"
					/>
				</a>
				<ul className="hidden md:flex space-x-12 text-lg">
					<li>
						<a
							href="/"
							className={`${scrolled ? 'text-teal hover:text-brown' : currentRoute === '/'
								? 'text-white hover:text-teal'
								: 'text-teal hover:text-brown'
								}`}
						>
							Nosotros
						</a>
					</li>
					<li className="relative">
						<button
							onClick={toggleDropdown}
							className={`${scrolled ? 'text-teal hover:text-brown' : currentRoute === '/'
								? 'text-white hover:text-teal'
								: 'text-teal hover:text-brown'
								} focus:outline-none`}
						>
							Servicios
						</button>
						{isDropdownOpen && (
							<ul
								ref={dropdownRef}
								className="absolute left-0 bg-gray-100 text-white text-lg space-y-4 mt-2 p-4 w-[300px]"
							>
								<li>
									<a
										href="/design"
										className='text-teal hover:text-brown block'
									>
										Diseño y desarrollo de nuevos productos
									</a>
								</li>
								<li>
									<a
										href="/optimization"
										className='text-teal hover:text-brown block'
									>
										Optimización de productos de software
									</a>
								</li>
								<li>
									<a
										href="/modernization"
										className='text-teal hover:text-brown block'
									>
										Modernización de sistemas
									</a>
								</li>
							</ul>
						)}
					</li>
					<li>
						<a
							href="/projects"
							className={`${scrolled ? 'text-teal hover:text-brown' : currentRoute === '/'
								? 'text-white hover:text-teal'
								: 'text-teal hover:text-brown'
								}`}
						>
							Proyectos
						</a>
					</li>
					<li>
						<a
							onClick={handleContactClick}
							className={`${scrolled ? 'text-teal hover:text-brown' : currentRoute === '/'
								? 'text-white hover:text-teal'
								: 'text-teal hover:text-brown'
								}`}
						>
							Contáctenos
						</a>
					</li>
				</ul>

				<button
					onClick={toggleMenu}
					className={`md:hidden ${scrolled ? 'text-teal hover:text-brown' : currentRoute === '/' ? 'text-white' : 'text-teal'
						} text-2xl focus:outline-none`}
				>
					<i className="fas fa-bars"></i>
				</button>
			</div>

			{isMenuOpen && (
				<div className="bg-gray-100 text-teal md:hidden">
					<ul className="flex flex-col space-y-6 py-6 text-center text-lg">
						<li>
							<a href="/" className="hover:text-brown">
								Nosotros
							</a>
						</li>
						<li className="relative">
							<button onClick={toggleDropdown} className="hover:text-brown focus:outline-none">
								Servicios
							</button>
							{isDropdownOpen && (
								<ul className="text-lg space-y-4 mt-2 p-4">
									<li>
										<a href="/design" className="hover:text-brown block">
											Diseño y desarrollo de nuevos productos
										</a>
									</li>
									<li>
										<a href="/optimization" className="hover:text-brown block">
											Optmización de productos de software
										</a>
									</li>
									<li>
										<a href="/modernization" className="hover:text-brown block">
											Modernización de sistemas
										</a>
									</li>
								</ul>
							)}
						</li>
						<li>
							<a href="/projects" className="hover:text-brown">
								Proyectos
							</a>
						</li>
						<li>
							<a onClick={handleContactClick} className="hover:text-brown">
								Contáctenos
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;