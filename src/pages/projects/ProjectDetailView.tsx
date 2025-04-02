import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import MainLayout from "../../components/MainLayout";
import Button from "../../components/Button";
import DeviceMockup from "../../components/DeviceMockup";
import { projects, ProjectType } from "../../utils/dataProjects";

const ProjectDetailView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
    const [displayMode, setDisplayMode] = useState<"screenshots" | "live">("screenshots");
    const [relatedProjects, setRelatedProjects] = useState<ProjectType[]>([]);
    const [activeTab, setActiveTab] = useState("challenge");

    const project = projects.find(p => p.id === Number(id));

    useEffect(() => {
        if (!project) {
            navigate("/projects");
            return;
        }

        const related = projects
            .filter(p => p.id !== project.id &&
                (p.technologies?.some(tech => project.technologies?.includes(tech)) ||
                    p.category === project.category))
            .slice(0, 5);
        setRelatedProjects(related);
    }, [id, project, navigate]);

    if (!project) return null;

    return (
        <MainLayout>
            <div className="overflow-x-hidden">
                <section className="relative bg-blue text-white overflow-hidden">
                    <div className="container mx-auto px-6 md:px-24 pt-60 pb-32 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="flex items-center mb-4">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category}
                                </span>
                                <span className="mx-2">•</span>
                                <span>{project.year}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90 font-roboto">
                                {project.description}
                            </p>

                            {project.url && (
                                <div className="flex">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3 px-8 bg-white text-blue rounded-none font-medium shadow-[-4px_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[-6px_6px_0_0_rgba(0,0,0,0.2)] transition-all duration-200 ease-in-out flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Visitar sitio web
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="container mx-auto">
                        <div className="space-y-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <div className="inline-flex bg-gray-100 rounded-full p-1">
                                    <button
                                        onClick={() => setDisplayMode("screenshots")}
                                        className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${displayMode === "screenshots"
                                            ? "bg-blue text-white shadow-md"
                                            : "text-brown hover:text-blue"
                                            }`}
                                    >
                                        Capturas
                                    </button>
                                    {project.url && (
                                        <button
                                            onClick={() => setDisplayMode("live")}
                                            className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${displayMode === "live"
                                                ? "bg-blue text-white shadow-md"
                                                : "text-brown hover:text-blue"
                                                }`}
                                        >
                                            Vista en vivo
                                        </button>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <div className="inline-flex bg-gray-100 rounded-full p-1">
                                    <button
                                        onClick={() => setViewMode("desktop")}
                                        className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${viewMode === "desktop"
                                            ? "bg-blue text-white shadow-md"
                                            : "text-brown hover:text-blue"
                                            }`}
                                    >
                                        Desktop
                                    </button>
                                    <button
                                        onClick={() => setViewMode("mobile")}
                                        className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${viewMode === "mobile"
                                            ? "bg-blue text-white shadow-md"
                                            : "text-brown hover:text-blue"
                                            }`}
                                    >
                                        Mobile
                                    </button>
                                </div>
                            </motion.div>

                            <AnimatePresence mode="wait">
                                {displayMode === "screenshots" ? (
                                    project.images && project.images.length > 0 ? (
                                        <motion.div
                                            key="screenshots"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex justify-center"
                                        >
                                            <DeviceMockup
                                                type={viewMode}
                                                screenshots={project.images}
                                            />
                                        </motion.div>
                                    ) : (
                                        <div className="text-center py-20 text-gray-400">
                                            <p className="text-lg">No hay imágenes disponibles para este proyecto</p>
                                        </div>
                                    )
                                ) : project.url ? (
                                    <motion.div
                                        key="live-view"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex justify-center"
                                    >
                                        <div className={`relative ${viewMode === 'desktop' ? 'w-full max-w-4xl' : 'w-[380px]'}`}>
                                            {viewMode === 'desktop' ? (
                                                <div className="relative bg-brown border-[16px] border-brown rounded-2xl h-[500px] shadow-2xl">
                                                    <div className="overflow-hidden h-[468px] bg-white relative">
                                                        <iframe
                                                            src={project.url}
                                                            className="absolute inset-0 w-full h-full"
                                                            title={`Live view of ${project.title}`}
                                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-brown rounded-full"></div>
                                                </div>
                                            ) : (
                                                <div className="relative bg-brown border-[12px] border-brown rounded-2xl h-[600px] shadow-2xl">
                                                    <div className="overflow-hidden h-[576px] bg-white relative">
                                                        <iframe
                                                            src={project.url}
                                                            className="absolute inset-0 w-full h-full"
                                                            title={`Live view of ${project.title}`}
                                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-brown rounded-full"></div>
                                                </div>
                                            )}
                                            <div className="text-center mt-12 text-brown">
                                                Vista en vivo - {viewMode === 'desktop' ? 'Desktop' : 'Mobile'}
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-20 text-gray-400">
                                        <p className="text-lg">No hay URL disponible para vista en vivo</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray">
                    <div className="container mx-auto px-6 md:px-24 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="border-b border-gray-200">
                                <nav className="flex -mb-px">
                                    <button
                                        onClick={() => setActiveTab("challenge")}
                                        className={`py-4 px-6 text-center border-b-2 font-bold ${activeTab === "challenge"
                                            ? "border-blue text-blue"
                                            : "border-transparent text-brown hover:text-blue hover:border-gray-300"
                                            }`}
                                    >
                                        Desafío
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("solution")}
                                        className={`py-4 px-6 text-center border-b-2 font-bold text-sm ${activeTab === "solution"
                                            ? "border-blue text-blue"
                                            : "border-transparent text-brown hover:text-blue hover:border-gray-300"
                                            }`}
                                    >
                                        Solución
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("results")}
                                        className={`py-4 px-6 text-center border-b-2 font-bold text-sm ${activeTab === "results"
                                            ? "border-blue text-blue"
                                            : "border-transparent text-brown hover:text-blue hover:border-gray-300"
                                            }`}
                                    >
                                        Resultados
                                    </button>
                                </nav>
                            </div>

                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeTab === "challenge" && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue mb-4">El Desafío</h3>
                                                <p className="text-brown font-roboto leading-relaxed">
                                                    {project.challenge || "No se especificaron los desafíos de este proyecto."}
                                                </p>
                                            </div>
                                        )}
                                        {activeTab === "solution" && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue mb-4">Nuestra Solución</h3>
                                                <p className="text-brown font-roboto leading-relaxed">
                                                    {project.solution || "No se especificó la solución implementada."}
                                                </p>
                                            </div>
                                        )}
                                        {activeTab === "results" && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-blue mb-4">Los Resultados</h3>
                                                <p className="text-brown font-roboto leading-relaxed">
                                                    {project.results || "No se especificaron los resultados obtenidos."}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {relatedProjects.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 md:px-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-blue mb-4">
                                    Explora Más Proyectos
                                </h2>
                                <p className="text-xl text-brown font-roboto max-w-2xl mx-auto">
                                    Descubre otros trabajos que podrían interesarte
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={"auto"}
                                    spaceBetween={30}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 2,
                                        slideShadows: false,
                                    }}
                                    navigation={true}
                                    modules={[EffectCoverflow, Navigation, Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    className="related-projects-swiper"
                                >
                                    {relatedProjects.map(relatedProject => (
                                        <SwiperSlide
                                            key={relatedProject.id}
                                            className="max-w-sm"
                                        >
                                            <motion.div
                                                whileHover={{ y: -10 }}
                                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
                                            >
                                                <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                                                    <img
                                                        src={relatedProject.logo}
                                                        alt={relatedProject.title}
                                                        className="max-h-full max-w-full object-contain"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                        {relatedProject.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                                        {relatedProject.shortDescription ||
                                                            relatedProject.description.substring(0, 100) + '...'}
                                                    </p>
                                                    <Button
                                                        text="Ver Detalles"
                                                        onClick={() => navigate(`/projects/${relatedProject.id}`)}
                                                        className="w-full"
                                                    />
                                                </div>
                                            </motion.div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        </div>
                    </section>
                )}
            </div>
        </MainLayout>
    );
};

export default ProjectDetailView;