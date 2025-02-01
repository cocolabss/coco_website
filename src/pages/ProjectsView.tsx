// ProjectsView.tsx

import { useState } from "react";
import Button from "../components/Button";
import MainLayout from "../components/MainLayout";
import { blogs } from "../utils/dataBlog";
import { ProjectType, projects } from "../utils/dataProjects"; // Importa el tipo y los datos

const ProjectsView = () => {

	interface Blog {
		image: string | undefined;
		id: number;
		title: string;
		description: string;
	}

	const [activeFilter, setActiveFilter] = useState('Todos');
	const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
	const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

	const filteredProjects =
		activeFilter === 'Todos' ? projects : projects.filter((project) => project.category === activeFilter);

	const handleOpenModal = (blog: Blog) => {
		setSelectedBlog(blog);
	};

	const handleCloseModal = () => {
		setSelectedBlog(null);
	};

	return (
		<MainLayout>
			<section className="pb-24 px-6 md:px-48 text-center">
				<p className="text-sm md:text-lg text-teal max-w-4xl mx-auto">
					En Coco somos un laboratorio de creación de productos tecnológicos, apoyando el crecimiento, la competitividad y
					la diversidad de las empresas Latinoamericanas
				</p>
				<div
					className="flex flex-row justify-between items-center mt-12 md:mt-24 space-x-0 md:space-x-6 space-y-6 md:space-y-0 text-sm md:text-lg text-brown"
					style={{ fontWeight: 600 }}
				>
					{['Todos', 'App', 'Web', 'Integraciones', 'Automatizaciones'].map((filter, index) => (
						<p
							key={index}
							className={`cursor-pointer ${activeFilter === filter ? 'underline underline-offset-4 decoration-teal' : ''}`}
							onClick={() => setActiveFilter(filter)}
						>
							{filter}
						</p>
					))}
				</div>
			</section>

			<section className="px-6 md:mx-48 bg-tealbg">
				<div className="flex flex-row justify-center md:justify-start">
					<h2
						className="relative background-image-4 w-[250px] md:w-[350px] text-center text-lg md:text-2xl text-brown top-[-40px]"
						style={{ fontWeight: 600 }}
					>
						Proyectos
					</h2>
				</div>
			</section>

			<section
				id="projects"
				className="relative pb-6 px-6 md:mx-48 bg-tealbg h-96 overflow-y-auto scrollbar-teal"
			>
				<div className="sticky top-0 h-6 bg-gradient-to-b from-tealbg to-transparent pointer-events-none z-20"></div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
							onClick={() => setSelectedProject(project)}
						>
							<img src={project.logo} alt={project.title} className="w-16 h-16 mx-auto mb-4" />
							<h3 className="text-lg font-semibold text-brown">{project.title}</h3>
							<p className="text-sm text-brown">{project.description}</p>
						</div>
					))}
				</div>
			</section>

			<section id="blog" className="pb-24 px-6 md:px-48 mt-12 md:mt-24 text-center">
				<h2 className="background-image-5 text-brown text-xl md:text-2xl w-[300px] md:w-[400px] text-center" style={{ fontWeight: 600 }}>
					Aprendamos juntos
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-6">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="bg-brownlight py-16 px-8 text-brown text-center space-y-4 cursor-pointer max-h-[450px] overflow-hidden relative"
							style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
							onClick={() => handleOpenModal(blog)}
						>
							<img
								src={blog.image}
								alt={blog.title}
								className="w-full h-32 object-cover mb-4"
							/>
							<h3 className="text-sm md:text-lg mt-12" style={{ fontWeight: 600 }}>
								{blog.title}
							</h3>
							<p className="text-sm md:text-lg text-justify">{blog.description}</p>
							<div
								className="absolute bottom-0 left-0 w-full h-20"
								style={{
									background: "linear-gradient(to bottom, transparent, #F5E5D9)",
								}}
							></div>
							<span className="absolute top-0 right-6 text-4xl text-brown font-bold">+</span>
						</div>
					))}
				</div>
				<Button
					text="Hablar con un consultor"
					background="bg-brown"
					onClick={() => window.open("https://wa.me/573013301908?text=Hola,%20me%20gustaría%20obtener%20más%20información.", "_blank")}
				/>
			</section>

			{selectedProject && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-6">
					<div className="bg-white p-6 rounded-lg max-w-2xl w-full">
						<h3 className="text-lg font-semibold text-brown">{selectedProject.title}</h3>
						<p className="text-sm text-brown text-justify my-6">{selectedProject.description}</p>
						<div className="carousel">
							{selectedProject.images.map((image, index) => (
								<img key={index} src={image} alt={`Screenshot ${index + 1}`} className="w-full h-auto mb-4" />
							))}
						</div>
						<button
							className="mt-4 px-4 py-2 bg-teal text-white rounded-lg"
							onClick={() => setSelectedProject(null)}
						>
							Cerrar
						</button>
					</div>
				</div>
			)}

			{selectedBlog && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-center z-50"
					onClick={handleCloseModal}
				>
					<div
						className="bg-brownlight p-6 md:p-12 max-w-3xl w-full max-h-[75vh] overflow-y-auto relative"
						onClick={(e) => e.stopPropagation()}
					>

						<img
							src={selectedBlog.image}
							alt={selectedBlog.title}
							className="w-full h-48 md:h-64 object-cover mb-4"
						/>

						<h2 className="text-sm md:text-lg mt-12 mb-6 text-center text-brown" style={{ fontWeight: 600 }}>
							{selectedBlog.title}
						</h2>
						<p className="text-sm md:text-lg text-justify text-brown">{selectedBlog.description}</p>

						<button
							className="mt-8 px-4 py-2 bg-brown text-white rounded-lg"
							onClick={handleCloseModal}
						>
							Cerrar
						</button>
					</div>
				</div>
			)}
		</MainLayout>
	);
};

export default ProjectsView;