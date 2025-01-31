import MainLayout from "../../components/MainLayout";
import Information from "../../components/Information";

import PuntoPequeño from "../../assets/images/small_point_2.png";

const ModernizationView = () => {
	return (
		<MainLayout>
			<section className="pb-24 px-6 md:px-48 text-center">
				<p className="mt-12 text-sm md:text-lg text-teal max-w-4xl mx-auto">
					En Coco Labs buscamos apoyarte en los diferentes escenarios y adaptarnos a las situaciones
				</p>
				<div className="flex flex-col md:flex-row space-y-24 md:space-y-0 space-x-0 md:space-x-12 mt-12 md:mt-24 mb-12 md:mb-24 items-stretch">
					{[
						{ title: "Actualización de apps", subtitle: "Acompañamiento y complemento de equipos", text: "Trabajamos con tu equipo o paralelo en las funciones que necesites." },
						{ title: "Optimización de procesos", subtitle: "Gestionamos tu equipo", text: "Apoyamos el liderazgo y la gestión de tu equipo para encaminar a objetivos." },
						{ title: "Actualización de apps", subtitle: "Nuevas funciones", text: "Tomamos el proyecto y nos hacemos cargo de él en todas sus etapas." }
					].map((item, index) => (
						<div key={index} className="flex flex-col space-y-8 text-lg md:text-xl text-brown w-full">
							<p style={{ fontWeight: 600 }}>{item.title}</p>
							<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-teallight h-full text-sm md:text-lg">
								<h3 className="font-medium">{item.subtitle}</h3>
								<p>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="pb-24 px-6 md:px-48 space-y-12">
				<div className="flex flex-col items-center md:items-start text-lg md:text-2xl text-brown font-semibold">
					<h2 className="background-image-3">Siempre listos para tomar</h2>
					<h2 className="background-image-4 mt-[-20px]">nuevos retos</h2>
				</div>

				<div className="flex flex-col">
					<h3 className="background-image-5 text-brown text-lg md:text-xl w-[150px] md:w-[200px] text-center font-semibold">
						Equipo
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6 md:mt-12 items-stretch">
						{[
							"Diseño de aplicaciones",
							"Arquitectura y liderazgo",
							"Soporte y mantenimiento",
							"Frontend",
							"Backend",
							"FullStack",
						].map((item, index) => (
							<div key={index} className="flex flex-row justify-center items-center h-full">
								<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
								<p className="text-sm md:text-lg text-brown">{item}</p>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col">
					<h3 className="background-image-4 text-brown text-lg md:text-xl w-[300px] md:w-[350px] text-center font-semibold">
						Stack Tecnológico
					</h3>
					<ul className="grid grid-cols-2 gap-x-12 gap-y-2 mt-6 md:mt-12 ml-12 text-teal text-sm md:text-lg font-semibold list-disc list-inside">
						{["Java", "Django", "Python", "FastAPI", "JavaScript", "React", "Typescript", "Flutter", "Go", "Dart"].map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col">
					<h3 className="background-image-5 text-brown text-lg md:text-xl md:w-[550px] text-center font-semibold">
						Plataformas y Servicios en la Nube
					</h3>
					<ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6 md:mt-12 ml-12 text-teal text-sm md:text-lg font-semibold list-disc list-inside">
						{["Heroku", "PostgreSQL", "AWS", "ElasticSearch", "Firebase", "Google Cloud Platform"].map((service, index) => (
							<li key={index}>{service}</li>
						))}
					</ul>
				</div>
			</section>

			<Information showTitle={false} />
		</MainLayout>
	);
};

export default ModernizationView;