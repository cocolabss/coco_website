import { useState } from 'react';

import Button from '../components/Button';
import MainLayout from '../components/MainLayout';
import Information from '../components/Information';

import CocoWhite from '../assets/images/coco_white.png';
import Natalia from '../assets/photos/photo_natalia.png'
import Luis from '../assets/photos/photo_luis.png'
import Ana from '../assets/photos/photo_ana.png'
import PointTeal from '../assets/images/point_teal.png'
import PointBrown from '../assets/images/point_brown.png'
import CocoLeft from '../assets/images/coco_left.png'
import CocoRight from '../assets/images/coco_right.png'

const HomeView = () => {
	const [nombre, setNombre] = useState("");
	const [correo, setCorreo] = useState("");
	const [mensaje, setMensaje] = useState("");

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		const numeroWhatsApp = "573013301908";

		const mensajeWhatsApp = `Hola, mi nombre es *${nombre}*.\nCorreo: *${correo}*.\n\n${mensaje}`;
		const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

		window.open(url, "_blank");
	};

	return (
		<MainLayout>
			<Information showTitle={true}/>

			<section className="mt-12 pb-16 px-6 md:px-48 bg-brownlight">
				<div className="flex flex-row justify-center md:justify-start">
					<h2
						className="relative background-image-2 w-[250px] md:w-[300px] text-center text-xl md:text-2xl text-brown top-[-20px]"
						style={{ fontWeight: 600 }}
					>
						Coco Labs
						<img
							src={CocoWhite}
							alt="Icono coco blanco"
							className="inline-block w-16 h-16 z-10 absolute -top-4 -right-8"
						/>
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-brown justify-center items-center">
					<h3 className="text-lg md:text-xl mt-6 md:mt-0 text-brown text-center" style={{ fontWeight: 500 }}>
						Somos proyección para su negocio
					</h3>
					<p className="text-center md:text-left text-sm md:text-lg">
						En Coco Labs SAS transformamos tus ideas en software innovador, personalizado y respaldado con garantías claras. Nuestro enfoque se centra en entregas rápidas y flexibles, acompañándote de principio a fin para asegurar que cada solución supere tus expectativas. Creamos tecnología diseñada exclusivamente para ti, con la tranquilidad de contar con un soporte garantizado que impulsa tu éxito.
					</p>
				</div>
				<div className="mt-12 md:mt-24 flex flex-col md:flex-row space-x-0 md:space-x-24 space-y-12 md:space-y-0 justify-center text-center text-brown photo-container">
					<div>
						<img
							src={Natalia}
							alt="Natalia Schmitz"
							className="mx-auto w-52 object-cover"
						/>
						<h3 className="text-lg mt-4" style={{ fontWeight: 600 }}>
							Natalia Schmitz
						</h3>
						<p className='text-sm'>CEO - Founder</p>
					</div>
					<div>
						<img
							src={Luis}
							alt="Luis Gómez"
							className="mx-auto w-52 object-cover"
						/>
						<h3 className="text-lg mt-4" style={{ fontWeight: 600 }}>
							Luis Gómez
						</h3>
						<p className='text-sm'>CTO - Founder</p>
					</div>
					<div>
						<img
							src={Ana}
							alt="Ana María Duarte"
							className="mx-auto w-52 object-cover"
						/>
						<h3 className="text-lg mt-4" style={{ fontWeight: 600 }}>
							Ana María Duarte
						</h3>
						<p className='text-sm'>Project Management /<br className="hidden md:block" />Directora Creativa</p>
					</div>
				</div>
			</section>

			<section className="pt-[250px] pb-24 md:pb-16 px-6 md:px-48 text-center">
				<div className="flex flex-col items-center text-xl md:text-2xl text-brown top-[-20px]">
					<h2 className="background-image-3" style={{ fontWeight: 600 }}>
						Soluciones personalizadas
					</h2>
					<h2 className="background-image-4 mt-[-20px]" style={{ fontWeight: 600 }}>
						que impulsan tu negocio
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-12">
					<div className="text-center md:text-left">
						<div className="flex justify-center md:justify-start">
							<h3
								className="background-image-2 text-lg md:text-xl text-brown"
								style={{ fontWeight: 500 }}
							>
								<img
									src={PointTeal}
									alt="Punto azul"
									className="inline-block w-12 h-12 mr-4"
								/>
								Arquitectura y consultoría de proyectos de software
							</h3>
						</div>
						<p className="mt-4 text-sm md:text-lg text-teal" style={{ lineHeight: 2 }}>
							Optimiza tu negocio con nuestras soluciones de consultoría y
							arquitectura de software. Diseñamos sistemas escalables, eficientes
							y personalizados para cubrir tus necesidades específicas. Confía en
							expertos en desarrollo de software, integración de sistemas y diseño
							arquitectónico para garantizar el éxito de tus proyectos.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-20">
					<img src={CocoLeft} alt="Coco" className="h-[400px] hidden md:block"/>
					<div className="flex flex-col items-center md:items-end text-center md:text-right">
						<div className="flex justify-center md:justify-start">
							<h3
								className="background-image-3 text-lg md:text-xl text-teal"
								style={{ fontWeight: 500 }}
							>
								<img
									src={PointBrown}
									alt="Punto marrón"
									className="inline-block w-12 h-12 mr-4"
								/>
								Diseño de aplicaciones web o móvil
							</h3>
						</div>
						<p className="mt-4 text-sm md:text-lg text-brown" style={{ lineHeight: 2 }}>
							En Coco Labs creamos soluciones digitales a medida para optimizar
							procesos y mejorar la experiencia del usuario. Desarrollamos
							aplicaciones web intuitivas, accesibles desde cualquier lugar y
							diseñadas para ser duraderas y fáciles de mantener. Nos enfocamos en
							maximizar tu retorno de inversión, cumpliendo con plazos y
							presupuestos ajustados.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-20">
					<div className="text-center md:text-left">
						<div className="flex justify-center md:justify-start">
							<h3
								className="background-image-2 text-lg md:text-xl text-brown"
								style={{ fontWeight: 500 }}
							>
								<img
									src={PointTeal}
									alt="Punto azul"
									className="inline-block w-12 h-12 mr-4"
								/>
								Integración de sistemas de software
							</h3>
						</div>
						<p className="mt-4 text-sm md:text-lg text-teal" style={{ lineHeight: 2 }}>
							Conecta tus plataformas y optimiza tus operaciones con nuestras soluciones de integración de sistemas de
							software. Integramos aplicaciones, bases de datos y herramientas empresariales para garantizar un flujo de
							información eficiente y sin interrupciones. Impulsa la productividad y elimina barreras tecnológicas con
							expertos en integración de software.
						</p>
					</div>
					<div className="hidden md:flex justify-end">
						<img src={CocoRight} alt="Coco" className="h-[400px]" />
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-12">
					<div></div>
					<div className="flex flex-col items-center md:items-end text-center md:text-right">
						<div className="flex justify-center md:justify-start">
							<h3
								className="background-image-3 text-lg md:text-xl text-teal"
								style={{ fontWeight: 500 }}
							>
								<img
									src={PointBrown}
									alt="Punto marrón"
									className="inline-block w-12 h-12 mr-4"
								/>
								Automatización de procesos por medio de soluciones
							</h3>
						</div>
						<p className="mt-4 text-sm md:text-lg text-brown" style={{ lineHeight: 2 }}>
							Optimiza tiempos, reduce costos y elimina errores con nuestras soluciones de automatización de procesos.
							Diseñamos sistemas personalizados para agilizar tareas repetitivas y mejorar la eficiencia operativa de tu
							empresa. Lleva tu negocio al siguiente nivel con tecnología que trabaja por ti.
						</p>
					</div>
				</div>
				<Button text="Habla con un consultor" background="bg-brown" />
			</section>

			<section id='contact' className="pb-16 px-12 md:px-48 bg-teallight mt-12">
				<div className="flex flex-row justify-center md:justify-start">
					<h2
						className="relative background-image-4 w-[250px] md:w-[350px] text-xl md:text-2xl text-center text-brown top-[-20px] z-10"
						style={{ fontWeight: 600 }}
					>
						Contáctanos
						<img
							src={CocoWhite}
							alt="Icono coco blanco"
							className="inline-block w-16 h-16 z-10 absolute -top-4 -right-8"
						/>
					</h2>
				</div>
				<div className="mt-8">
					<form
						className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 text-sm md:text-lg"
						onSubmit={handleSubmit}
					>
						<div className="flex flex-col space-y-4 md:space-y-8">
							<label className="block">
								<span className="text-brown font-medium">Nombre</span>
								<input
									type="text"
									placeholder="Tu nombre"
									className="mt-2 block py-3 px-3 md:px-6 w-full rounded-lg border-gray-300 shadow-sm focus:ring focus:ring-teal-400 focus:border-teal-400"
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
									required
								/>
							</label>
							<label className="block">
								<span className="text-brown font-medium">Correo Electrónico</span>
								<input
									type="email"
									placeholder="Tu correo electrónico"
									className="mt-2 block py-3 px-3 md:px-6 w-full rounded-lg border-gray-300 shadow-sm focus:ring focus:ring-teal-400 focus:border-teal-400"
									value={correo}
									onChange={(e) => setCorreo(e.target.value)}
									required
								/>
							</label>
						</div>

						<div className="flex flex-col space-y-4">
							<label className="block h-full">
								<span className="text-brown font-medium">Mensaje</span>
								<textarea
									placeholder="Escribe tu mensaje aquí"
									rows={5}
									className="mt-2 block py-3 px-3 md:px-6 w-full rounded-lg border-gray-300 shadow-sm focus:ring focus:ring-teal-400 focus:border-teal-400"
									value={mensaje}
									onChange={(e) => setMensaje(e.target.value)}
									required
								></textarea>
							</label>
							<div className="flex justify-end">
								<button
									type="submit"
									className="mt-2 py-3 px-6 bg-brown text-white rounded-lg text-sm font-medium"
								>
									Enviar
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</MainLayout>
	);
};

export default HomeView;