import { useLocation } from 'react-router-dom';
import { routeTexts } from '../utils/dataRouteTexts';

import Navbar from "./Navbar";
import Button from '../components/Button';

import BannerHome from '../assets/videos/banner_home.mp4';

const Header = () => {
	const location = useLocation();

	type RouteKey = keyof typeof routeTexts;

	const currentRoute: RouteKey = location.pathname as RouteKey;
	const { img, title, description1, description2, buttonText } = routeTexts[currentRoute] || routeTexts['/'];

	return (
		<>
			<Navbar />

			<header className="relative">
				{currentRoute === '/' ? (
					<div className="relative w-full h-[800px]">
						<video
							autoPlay
							loop
							muted
							className="absolute inset-0 w-full h-full object-cover"
						>
							<source src={BannerHome} type="video/mp4" />
						</video>

						<div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 px-6 md:px-48">
							<h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
								{title}
							</h1>
							<p className="text-white mt-4 text-lg md:text-xl">
								{description1}
							</p>
							<Button text={buttonText} background="bg-teal" />
						</div>
					</div>
				) : (
					<div>
						<img src={img} alt="Background" className="w-full h-[700px] object-cover" />
						<div className="absolute inset-0 bg-white">
							<div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left h-full px-12 md:px-48 text-brown">
								<div className='hidden md:block'></div>
								<div className='md:w-[600px]'>
									<h1 className="background-image-2 text-xl md:text-2xl" style={{ fontWeight: 600 }}>
										{title}
									</h1>
									<h2 className="background-image-3 text-sm md:text-lg" style={{ fontWeight: 500 }}>
										{description1}
									</h2>
									<h2 className="background-image-4 text-sm md:text-lg mt-[-20px]" style={{ fontWeight: 500 }}>
										{description2}
									</h2>
									<div className="flex justify-center">
										<Button text={buttonText} background="bg-teal" />
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</header>
		</>
	);
};

export default Header;