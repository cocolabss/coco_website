import LogoBrown from '../assets/images/logo_brown.png';

const Footer = () => {
	return (
		<footer className="bg-white py-6 px-6 md:px-24">
			<div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
				<div className="flex-1 flex flex-col space-y-4 text-brown text-center md:text-left items-center md:items-start">
					<img src={LogoBrown} alt="Logo" className="w-[300px]" />
					<p className="text-lg md:text-2xl">
						Solidez en el desarrollo de software
					</p>
					<p className="text-xl md:text-3xl" style={{ fontWeight: 500 }}>
						Medellín, Colombia
					</p>
				</div>

				<div className="flex-1 text-center space-y-4">
					<ul className="space-y-2">
						<li className="text-teal text-lg md:text-2xl hover:underline cursor-pointer">
							Diseño de aplicaciones
						</li>
						<li className="text-teal text-lg md:text-2xl hover:underline cursor-pointer">
							Automatización
						</li>
						<li className="text-teal text-lg md:text-2xl hover:underline cursor-pointer">
							Integración
						</li>
					</ul>
				</div>

				<div className="flex-1 space-y-4 text-center md:text-right">
					<h3 className="text-xl md:text-3xl text-brown" style={{ fontWeight: 500 }}>
						Contáctanos
					</h3>
					<p className="text-brown text-lg md:text-2xl hover:underline cursor-pointer">
						+57 311 315 7486
					</p>
					<p className="text-brown text-lg md:text-2xl hover:underline cursor-pointer">
						contacto@empresa.com
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;