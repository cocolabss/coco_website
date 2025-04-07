import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/MainLayout";
import Button from "../../components/Button";
import Blog from "../../components/Blog";

import { projects } from "../../utils/dataProjects";

const ProjectsView = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const allCategories = ['Todos', ...new Set(projects.flatMap(project => project.category || []))];

    const filteredProjects = activeFilter === 'Todos'
        ? projects
        : projects.filter(project =>
            project.category?.includes(activeFilter)
        );

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const handleProjectClick = (projectId: number) => {
        navigate(`/projects/${projectId}`);
    };

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
        setCurrentPage(1);
    };

    return (
        <MainLayout>
            <section id="projects" className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mt-12 px-6 md:px-24">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            className={`px-6 py-3 font-bold shadow-md shadow-gray-300 hover:shadow-lg transition-all
                                ${activeFilter === category
                                    ? 'bg-blue text-white'
                                    : 'bg-white text-blue hover:bg-blue hover:text-white'}`}
                            onClick={() => handleFilterClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {currentProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className="py-16 px-6 md:px-24"
                    >
                        <div className={`max-w-6xl mx-auto ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col gap-8 md:gap-16 items-center`}>
                            <div className="w-full md:w-1/2">
                                <img
                                    src={project.logo}
                                    alt={project.title}
                                    className="w-full h-auto max-h-96 object-contain"
                                />
                            </div>

                            <div className={`w-full md:w-1/2 space-y-4 ${index % 2 !== 0 ? 'text-right' : ''}`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-blue">
                                    {project.title}
                                </h3>

                                <p className="text-blue">
                                    {project.technologies?.join('| ')}
                                </p>

                                <p className={`text-brown pb-8 ${index % 2 !== 0 ? 'text-right' : 'text-justify'}`}>
                                    {project.shortDescription || project.description.substring(0, 200) + '...'}
                                </p>

                                <div className={index % 2 !== 0 ? 'flex justify-end' : ''}>
                                    <Button
                                        text="Ver caso de estudio"
                                        onClick={() => handleProjectClick(project.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 my-8">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`w-10 h-10 rounded-full flex items-center justify-center
                                    ${currentPage === page
                                        ? 'bg-blue text-white'
                                        : 'bg-white text-blue hover:bg-blue hover:text-white'}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </section>

            <Blog />
        </MainLayout>
    );
};

export default ProjectsView;