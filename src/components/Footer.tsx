import LogoBrown from '../assets/images/logo_brown.png';

const Footer = () => {
	return (
		<footer className="bg-white py-6 px-6 md:px-48">
			<div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
				<div className="flex-1 flex flex-col space-y-4 text-brown text-center md:text-left items-center md:items-start">
					<img src={LogoBrown} alt="Logo" className="w-[200px]" />
					<p className="text-sm">
						Solidez en el desarrollo de software
					</p>
					<p className="text-base" style={{ fontWeight: 500 }}>
						Medellín, Colombia
					</p>
				</div>

				<div className="flex-1 text-center space-y-4">
					<ul className="space-y-2">
						<li className="text-teal text-sm hover:underline cursor-pointer">
							Diseño de aplicaciones
						</li>
						<li className="text-teal text-sm hover:underline cursor-pointer">
							Automatización
						</li>
						<li className="text-teal text-sm hover:underline cursor-pointer">
							Integración
						</li>
					</ul>
				</div>

				<div className="flex-1 space-y-4 text-center md:text-right">
					<h3 className="text-base text-brown" style={{ fontWeight: 500 }}>
						Contáctanos
					</h3>
					<div className="space-y-2">
						<p className="text-brown text-sm hover:underline cursor-pointer">
							<a
								href="https://wa.me/573013301908?text=Hola,%20me%20gustaría%20obtener%20más%20información." target='_blank'
								className="flex items-center justify-center md:justify-end"
							>
								+57 301 330 1908 <i className="fab fa-whatsapp ml-2"></i>
							</a>
						</p>
						<p className="text-brown text-sm hover:underline cursor-pointer">
							<a
								href="mailto:cocolabssas@gmail.com?subject=Consulta&body=Hola, me gustaría obtener más información." target='_blank'
								className="flex items-center justify-center md:justify-end"
							>
								cocolabssas@gmail.com <i className="fas fa-envelope ml-2"></i>
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;