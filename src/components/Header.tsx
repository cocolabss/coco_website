import Navbar from "./Navbar";
import Button from '../components/Button';
import { useLocation } from 'react-router-dom';
import { routeTexts } from '../utils/dataRouteTexts';

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
					<div>
						<img src={img} alt="Background" className="w-full h-[800px] object-cover" />
						<div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 px-6">
							<h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
								{title}
							</h1>
							<p className="text-white mt-4 text-lg md:text-2xl">
								{description1}
							</p>
							<Button text={buttonText} background="bg-teal" />
						</div>
					</div>
				) : (
					<div>
						<img src={img} alt="Background" className="w-full h-[800px] object-cover" />
						<div className="absolute inset-0 bg-black bg-opacity-50">
							<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center md:text-left h-full px-12 md:px-24 text-brown">
								<div></div>
								<div>
									<h1 className="background-image-2 text-2xl md:text-4xl" style={{ fontWeight: 600 }}>
										{title}
									</h1>
									<h2 className="background-image-3 text-lg md:text-2xl" style={{ fontWeight: 600 }}>
										{description1}
									</h2>
									<h2 className="background-image-4 text-lg md:text-2xl mt-[-20px]" style={{ fontWeight: 600 }}>
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