import MainLayout from "../../components/MainLayout";
import Information from "../../components/Information";

import PuntoPequeño from "../../assets/images/small_point_2.png";

const ModernizationView = () => {
	return (
		<MainLayout>
			<section className="pb-24 px-6 md:px-24 text-center">
				<p className="mt-12 text-lg md:text-2xl text-teal max-w-4xl mx-auto">
					En Coco Labs buscamos apoyarte en los diferentes escenarios y adaptarnos a las situaciones
				</p>
				<div
					className="grid grid-cols-1 md:grid-cols-3 items-center mt-6 md:mt-12 space-x-0 md:space-x-12 space-y-12 md:space-y-0 text-lg md:text-2xl text-brown"
					style={{ fontWeight: 600 }}
				>
					<p>Actualización de apps</p>
					<p>Optimización de procesos</p>
					<p>Nuevas funciones</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 space-y-12 md:space-y-0 space-x-0 md:space-x-12 mt-10 md:mt-24 ">
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-teallight">
						<h3 className="text-lg md:text-2xl text-brown" style={{ fontWeight: 500 }}>Acompañamiento y complemento de equipos</h3>
						<p className="text-sm md:text-xl text-brown">Trabajamos con tu equipo o paralelo en las funciones que necesites.</p>
					</div>
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-teallight">
						<h3 className="text-lg md:text-2xl text-brown" style={{ fontWeight: 500 }}>Gestionamos tu equipo</h3>
						<p className="text-sm md:text-xl text-brown">Apoyamos el liderazgo y la gestión de tu equipo para encaminar a objetivos.</p>
					</div>
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-teallight">
						<h3 className="text-lg md:text-2xl text-brown" style={{ fontWeight: 500 }}>Creamos tu equipo</h3>
						<p className="text-sm md:text-xl text-brown">Tomamos el proyecto y nos hacemos cargo de él en todas sus etapas</p>
					</div>
				</div>
			</section>

			<section className="pb-24 px-6 md:px-24 space-y-12">
				<div className="flex flex-col items-center md:items-start text-2xl md:text-4xl text-brown">
					<h2 className="background-image-3" style={{ fontWeight: 600 }}>
						Nos adaptamos a tus
					</h2>
					<h2 className="background-image-4 mt-[-20px]" style={{ fontWeight: 600 }}>
						proyectos y necesidades
					</h2>
				</div>
				<div className="flex flex-col justify-start">
					<h3 className="background-image-5 text-brown text-xl md:text-3xl w-[150px] md:w-[200px] text-center" style={{ fontWeight: 600 }}>
						Equipo
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-lg md:text-2xl text-brown">Diseño de aplicaciones</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-lg md:text-2xl text-brown">Arquitectura y liderazgo</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-lg md:text-2xl text-brown">Soporte y mantenimiento</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-lg md:text-2xl text-brown">Frontend</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-lg md:text-2xl text-brown">Backend</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-lg md:text-2xl text-brown">FullStack</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-start">
					<h3
						className="background-image-4 text-brown text-xl md:text-3xl w-[300px] md:w-[450px] text-center"
						style={{ fontWeight: 600 }}
					>
						Stack Tecnológico
					</h3>
					<ul className="ml-12 md:ml-24 list-disc list-inside grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-teal text-lg md:text-2xl" style={{ fontWeight: 600 }}>
						<li>Java</li>
						<li>Django</li>
						<li>Python</li>
						<li>FastAPI</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>Typescript</li>
						<li>Flutter</li>
						<li>Go</li>
						<li>Dart</li>
					</ul>
				</div>
				<div className="flex flex-col justify-start">
					<h3 className="background-image-5 text-brown text-xl md:text-3xl md:w-[700px] text-center" style={{ fontWeight: 600 }}>
						Plataformas y Servicios en la Nube
					</h3>
					<ul className="ml-12 md:ml-24 list-disc list-inside grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-teal text-lg md:text-2xl" style={{ fontWeight: 600 }}>
						<li>Heroku</li>
						<li>PostgreSQL</li>
						<li>AWS</li>
						<li>ElasticSearch</li>
						<li>Firebase</li>
						<li>Google Cloud Plataform</li>
					</ul>
				</div>
			</section>

			<Information showTitle={false} />
		</MainLayout>
	);
};

export default ModernizationView;