import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/MainLayout";
import Button from "../../components/Button";
import Blog from "../../components/Blog";

import { projects } from "../../utils/dataProjects";

const ProjectsView = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId: number) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <MainLayout>
            <section id="projects" className="container mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`py-16 px-6 md:px-24 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
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
            </section>

            <Blog />
        </MainLayout>
    );
};

export default ProjectsView;