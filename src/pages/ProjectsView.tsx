import { useState } from "react";
import Button from "../components/Button";
import MainLayout from "../components/MainLayout";
import { blogs } from "../utils/dataBlog";

const ProjectsView = () => {
	interface Blog {
		id: number;
		title: string;
		description: string;
	}

	const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

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
					En Coco somos un laboratorio de creación de productos tecnológicos, apoyando el crecimiento, la competitividad y la diversidad de las empresas Latinoamericanas
				</p>
				<div
					className="grid grid-cols-1 md:grid-cols-4 items-center mt-12 md:mt-24 space-x-0 md:space-x-6 space-y-6 md:space-y-0 text-sm md:text-lg text-brown"
					style={{ fontWeight: 600 }}
				>
					<p>App</p>
					<p>Web</p>
					<p>Integraciones</p>
					<p>Automatizaciones</p>
				</div>
			</section>
			<section className="pb-16 px-6 md:px-48 mt-12 md:mt-24 bg-teallight h-96">
				<div className="flex flex-row justify-center md:justify-start">
					<h2
						className="relative background-image-4 w-[250px] md:w-[350px] text-center text-lg md:text-2xl text-brown top-[-40px]"
						style={{ fontWeight: 600 }}
					>
						Proyectos
					</h2>
				</div>
			</section>
			<section className="pb-24 px-6 md:px-48 mt-12 md:mt-24 text-center">
				<h2 className="background-image-5 text-brown text-xl md:text-2xl w-[300px] md:w-[400px] text-center" style={{ fontWeight: 600 }}>
					Aprendamos juntos
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-6">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="bg-brownlight py-16 px-8 text-brown text-center space-y-4 cursor-pointer max-h-[350px] overflow-hidden relative"
							style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
							onClick={() => handleOpenModal(blog)}
						>
							<h3 className="text-sm md:text-lg" style={{ fontWeight: 600 }}>
								{blog.title}
							</h3>
							<p className="text-sm md:text-lg">{blog.description}</p>
							<span className="absolute top-0 right-6 text-4xl text-brown font-bold">+</span>
						</div>
					))}
				</div>
				<Button text="Hablar con un consultor" background="bg-brown" />
			</section>

			{selectedBlog && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-center z-50"
					onClick={handleCloseModal}
				>
					<div
						className="bg-brownlight p-6 md:p-12 max-w-3xl w-full max-h-[75vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="text-sm md:text-lg mb-4 text-center text-brown" style={{ fontWeight: 600 }}>
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