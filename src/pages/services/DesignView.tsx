import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import MainLayout from "../../components/MainLayout";
import Information from "../../components/Information";

import CocoWhite from "../../assets/images/coco_white.png";
import Consulta from "../../assets/images/consulta.png";
import Diseño from "../../assets/images/design.png";
import Implementacion from "../../assets/images/implementacion.png";
import Garantia from "../../assets/images/garantia.png";
import PuntoPequeño from "../../assets/images/small_point.png";

const DesignView = () => {
	const navigate = useNavigate();

	const handleProjectClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		navigate("/projects", { replace: true });
		setTimeout(() => {
			const projectsSection = document.getElementById("projects");
			if (projectsSection) {
				projectsSection.scrollIntoView({ behavior: "smooth" });
			}
		}, 300);
	};

	const handleBlogClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		navigate("/projects", { replace: true });
		setTimeout(() => {
			const blogSection = document.getElementById("blog");
			if (blogSection) {
				blogSection.scrollIntoView({ behavior: "smooth" });
			}
		}, 300);
	};

	return (
		<MainLayout>
			<section className="pb-24 px-6 md:px-48">
				<div className="flex flex-row justify-center md:justify-start">
					<h2
						className="relative background-image-2 w-[350px] md:w-[450px] text-center text-xl md:text-2xl text-brown top-[-20px]"
						style={{ fontWeight: 600 }}
					>
						¿Cómo lo hacemos?
						<img
							src={CocoWhite}
							alt="Icono coco blanco"
							className="inline-block w-16 h-16 z-10 absolute -top-4 -right-8"
						/>
					</h2>
				</div>
				<p className="mt-4 md:mt-12 mb-12 md:mb-24 text-sm md:text-lg text-brown text-center">
					Nuestros proyectos son personalizados y a la medida <br className="hidden md:block" /> de nuestros clientes.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-4 space-y-12 md:space-y-0 space-x-0 md:space-x-12 relative">
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-brownlight relative step-card">
						<img src={Consulta} alt="Consulta del proyecto" className="rounded-2xl h-52 md:h-44 w-auto object-cover" />
						<h3 className="text-lg text-brown" style={{ fontWeight: 600 }}>Consulta del proyecto</h3>
						<p className="text-sm text-brown">
							Nuestro equipo ayudará a definir el problema y desarrollar una solución, con un presupuesto claro, en un modelo de colaboración y bajo recomendaciones técnicas. <br /><br />Trazamos objetivos y plazos.
						</p>
					</div>
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-brownlight relative step-card">
						<img src={Diseño} alt="Diseño y planificación" className="rounded-2xl h-52 md:h-44 w-auto object-cover" />
						<h3 className="text-lg text-brown" style={{ fontWeight: 600 }}>Diseño y planificación</h3>
						<p className="text-sm text-brown">
							Creamos un equipo contigo para comenzar a diseñar una solución, creando un roadmap de trabajo, objetivos de diseño y desarrollo. <br /><br />Investigación del proyecto.
						</p>
					</div>
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-brownlight relative step-card">
						<img src={Implementacion} alt="Implementación" className="rounded-2xl h-52 md:h-44 w-auto object-cover" />
						<h3 className="text-lg text-brown" style={{ fontWeight: 600 }}>Implementación</h3>
						<p className="text-sm text-brown">
							Nuestro equipo comenzará a desarrollar la solución, siguiendo de trabajo y entregando los objetivos. <br /><br /> Reuniones de seguimiento semanal.
						</p>
					</div>
					<div className="flex flex-col text-center space-y-4 p-6 rounded-2xl bg-brownlight relative step-card">
						<img src={Garantia} alt="Garantía y soporte continuo" className="rounded-2xl h-52 md:h-44 w-auto object-cover" />
						<h3 className="text-lg text-brown" style={{ fontWeight: 600 }}>Garantía y soporte continuo</h3>
						<p className="text-sm text-brown">
							Mantenemos una garantía de 3 meses en todos nuestros proyectos además nos adaptamos a tus necesidades, con cobertura desde el desarrollo de características adicionales, reaparaciones urgentes y cubrir el mantenimiento continuo.
						</p>
					</div>
				</div>
			</section>

			<section className="pb-16 px-6 md:px-48">
				<div className="flex flex-col mb-12 md:mb-24 items-center md:items-end text-xl md:text-2xl text-brown top-[-20px]">
					<h2 className="relative background-image-5" style={{ fontWeight: 600 }}>
						Soluciones personalizadas
						<img
							src={CocoWhite}
							alt="Icono coco blanco"
							className="inline-block w-16 h-16 z-10 absolute -bottom-6 -right-8"
						/>
					</h2>
					<h2 className="background-image-6 mt-[-20px]" style={{ fontWeight: 600 }}>
						que impulsan tu negocio
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 mb-12 md:mb-24 text-sm md:text-lg text-brown">
					<div className="flex flex-row justify-center">
						<img src={PuntoPequeño} alt="Punto pequeño" className="w-6 h-8 mr-4" />
						<p>+10.000 usuarios</p>
					</div>
					<div className="flex flex-row justify-center">
						<img src={PuntoPequeño} alt="Punto pequeño" className="w-6 h-8 mr-4" />
						<p>200 empresas atendidas</p>
					</div>
					<div className="flex flex-row justify-center">
						<img src={PuntoPequeño} alt="Punto pequeño" className="w-6 h-8 mr-4" />
						<p>+14 proyectos de software</p>
					</div>
				</div>
				<div className="flex flex-col text-center text-teal text-sm md:text-lg space-y-6 md:space-y-0 mb-12 md:mb-24">
					<p>En Coco mantenemos altos estandares en los procesos de desarrollo, con un compromiso de satisfacción e innovasión.</p>
					<p>Un equipo con más de 10 años de experiencia desarrollando soluciones desde 0, para impulsar tu empresa.</p>
				</div>
				<div className="text-center">
					<h3 className="text-sm md:text-lg text-brown mb-12" style={{ fontWeight: 600 }}>
						Te apoyamos a enfrentar los desafíos digitales de tu negocio con innovación y excelencia.
					</h3>
					<Button text="Agenda una consulta gratis" background="bg-brown" onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")} />
				</div>
			</section>

			<Information showTitle={false} />

			<section className="pb-16 px-6 md:px-48 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 space-x-0 md:space-x-24">
				<button
					className="background-image-6 text-center text-lg md:text-xl text-brown w-full"
					style={{ fontWeight: 600 }}
					onClick={handleProjectClick}
				>
					Nuestros proyectos
				</button>
				<button
					className="background-image-5 text-center text-lg md:text-xl text-brown w-full"
					style={{ fontWeight: 600 }}
					onClick={handleBlogClick}
				>
					Aprendamos juntos
				</button>
			</section>
		</MainLayout>
	);
};

export default DesignView;