import MainLayout from "../../components/MainLayout";
import Information from "../../components/Information";

import PuntoPequeño from "../../assets/images/small_point_2.png";

const OptimizationView = () => {
	return (
		<MainLayout>
			<section className="pb-24 px-6 md:px-48 text-center">
				<p className="text-sm md:text-lg text-teal max-w-4xl mx-auto">
					Optimizar tus resultados y maximizar el valor de tu inversión
				</p>
				<div className="flex flex-col md:flex-row space-y-24 md:space-y-0 space-x-0 md:space-x-12 mt-12 md:mt-24 mb-12 md:mb-24 items-stretch">
					{[
						{ title: "Actualización de apps", text: "Migramos aplicaiones a la nube" },
						{ title: "Nuevas funciones", text: "Reescribimos en otros lenguajes tus proyectos" },
						{ title: "Soporte y mantenimiento", text: "Brindamos actualización, soporte y mantenimiento" }
					].map((item, index) => (
						<div key={index} className="flex flex-col space-y-4 text-sm md:text-lg text-brown w-full">
							<p style={{ fontWeight: 600 }}>{item.title}</p>
							<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-brownlight h-full">
								<p className="text-sm md:text-xl">{item.text}</p>
							</div>
						</div>
					))}
				</div>
				<p className="mt-24 text-sm md:text-lg text-teal max-w-4xl mx-auto">
					Un equipo con más de 10 años de experiencia desarrollando soluciones, disponibles para brindarte todo nuestro  conocimiento y experiencia para impulsar tu negocio
				</p>
			</section>

			<section className="pb-24 px-6 md:px-48 space-y-12">
				<div className="flex flex-col items-center md:items-start text-lg md:text-2xl text-brown">
					<h2 className="background-image-3" style={{ fontWeight: 600 }}>
						Siempre listos para tomar
					</h2>
					<h2 className="background-image-4 mt-[-20px]" style={{ fontWeight: 600 }}>
						nuevos retos
					</h2>
				</div>
				<div className="flex flex-col justify-start">
					<h3 className="background-image-5 text-brown text-lg md:text-xl w-[150px] md:w-[200px] text-center" style={{ fontWeight: 600 }}>
						Equipo
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6 md:mt-12">
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-sm md:text-lg text-brown">Diseño de aplicaciones</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-sm md:text-lg text-brown">Arquitectura y liderazgo</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-sm md:text-lg text-brown">Soporte y mantenimiento</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-sm md:text-lg text-brown">Frontend</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-sm md:text-lg text-brown">Backend</p>
						</div>
						<div className="flex flex-row justify-center">
							<img src={PuntoPequeño} alt="Punto pequeño" className="w-8 h-8 mr-4" />
							<p className="text-sm md:text-lg text-brown">FullStack</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-start">
					<h3
						className="background-image-4 text-brown text-lg md:text-xl w-[300px] md:w-[350px] text-center"
						style={{ fontWeight: 600 }}
					>
						Stack Tecnológico
					</h3>
					<ul className="ml-12 md:ml-24 list-disc list-inside grid grid-cols-2 gap-x-4 gap-y-2 mt-6 md:mt-12 text-teal text-sm md:text-lg" style={{ fontWeight: 600 }}>
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
					<h3 className="background-image-5 text-brown text-lg md:text-xl md:w-[550px] text-center" style={{ fontWeight: 600 }}>
						Plataformas y Servicios en la Nube
					</h3>
					<ul className="ml-12 md:ml-24 list-disc list-inside grid grid-cols-2 gap-x-4 gap-y-2 mt-6 md:mt-12 text-teal text-sm md:text-lg" style={{ fontWeight: 600 }}>
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
		</MainLayout >
	);
};

export default OptimizationView;