import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import MainLayout from '../components/MainLayout';

import { FaChevronRight } from 'react-icons/fa';

import cocoManIcon from '../assets/icons/coco_man.svg';
import cocoWomanIcon from '../assets/icons/coco_woman.svg';
import backgroundCardImagen from '../assets/images/background_card.png';
import desarrolloBrownIcon from '../assets/icons/cards/desarrollo_brown.svg';
import desarrolloWhiteIcon from '../assets/icons/cards/desarrollo_white.svg';
import optimizacionBrownIcon from '../assets/icons/cards/optimizacion_brown.svg';
import optimizacionWhiteIcon from '../assets/icons/cards/optimizacion_white.svg';
import modernizacionBrownIcon from '../assets/icons/cards/modernizacion_brown.svg';
import modernizacionWhiteIcon from '../assets/icons/cards/modernizacion_white.svg';
import { blogPosts } from '../utils/dataBlog';

const HomeView = () => {
    const navigate = useNavigate();

	return (
        <MainLayout>
            <section className="py-10 md:py-20 px-6 md:px-48">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-blue mb-6">
                    Impulsa tu negocio
                </h1>
                <p className="text-brown font-roboto text-lg md:text-xl max-w-3xl mx-auto mb-10 text-center">
                    <strong>¿El software a medida es parte fundamental de tu éxito?</strong><br />En Coco Labs diseñamos, mejoramos y transformamos sistemas digitales que potencian tus resultados.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center md:gap-4">
                    <button className="group flex items-center text-blue font-bold px-6 py-3 rounded-lg transition-all duration-300">
                        <span>Páginas web</span>
                        <FaChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                    </button>

                    <button className="group flex items-center text-blue font-bold px-6 py-3 rounded-lg transition-all duration-300">
                        <span>Aplicaciones móviles</span>
                        <FaChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                    </button>

                    <button className="group flex items-center text-blue font-bold px-6 py-3 rounded-lg transition-all duration-300">
                        <span>Automatizaciones</span>
                        <FaChevronRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                    </button>
                </div>
            </section>

            <section className="py-8 md:py-16 px-6 md:px-48 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                    <div className="flip-card h-80 w-full cursor-pointer" onClick={() => navigate('/development')}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front absolute flex flex-row md:flex-row items-center justify-center border border-brown bg-white p-6">
                                <img src={desarrolloBrownIcon} alt="Desarrollo" className="mb-6 h-52" />
                                <div className="my-4 w-44 border-t border-brown"></div>
                                <h3 className="text-xl font-bold text-brown text-center">Desarrollo de nuevos productos</h3>
                            </div>

                            <div
                                className="flip-card-back absolute inset-0 flex flex-col items-center justify-center p-6"
                                style={{
                                    backgroundImage: `url(${backgroundCardImagen})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <img src={desarrolloWhiteIcon} alt="Desarrollo" className="mb-6 h-40" />
                                <div className="my-4 w-44 border-t border-white"></div>
                                <p className="text-center text-white px-4 font-roboto">
                                    Creamos desarrollos a la medida desde cero, creando soluciones que destacan.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card h-80 w-full cursor-pointer" onClick={() => navigate('/optimization')}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front absolute flex flex-col items-center justify-center border border-brown bg-white p-6">
                                <img src={optimizacionBrownIcon} alt="Optimizacion" className="mb-6 h-52" />
                                <div className="my-4 w-44 border-t border-brown"></div>
                                <h3 className="text-xl font-bold text-brown text-center">Optimización<br />de productos</h3>
                            </div>

                            <div
                                className="flip-card-back absolute inset-0 flex flex-col items-center justify-center p-6"
                                style={{
                                    backgroundImage: `url(${backgroundCardImagen})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <img src={optimizacionWhiteIcon} alt="Optimizacion" className="mb-6 h-40" />
                                <div className="my-4 w-44 border-t border-white"></div>
                                <p className="text-center text-white px-4 font-roboto">
                                    Perfeccionamos tus herramientas existentes para maximizar su impacto.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card h-80 w-full cursor-pointer" onClick={() => navigate('/modernization')}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front absolute flex flex-col items-center justify-center border border-brown bg-white p-6">
                                <img src={modernizacionBrownIcon} alt="Modernización" className="mb-6 h-40" />
                                <div className="my-4 w-44 border-t border-brown"></div>
                                <h3 className="text-xl font-bold text-brown text-center">Modernización<br />de sistemas</h3>
                            </div>

                            <div
                                className="flip-card-back absolute inset-0 flex flex-col items-center justify-center p-6"
                                style={{
                                    backgroundImage: `url(${backgroundCardImagen})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <img src={modernizacionWhiteIcon} alt="Modernizacion" className="mb-6 h-52" />
                                <div className="my-4 w-44 border-t border-white"></div>
                                <p className="text-center text-white px-4 font-roboto">
                                    Actualizamos tu tecnología para que  esté a la altura del futuro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-12 flex justify-center">
                    <Button text="Comunícate con un asesor" onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")} />
                </div>
            </section>

            <section className="py-8 md:py-16 px-6 md:px-48">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
                    <div>
                        <h2 className="text-3xl font-bold text-blue mb-6 text-center md:text-start">Somos proyección para su negocio</h2>
                        <p className="text-brown text-justify mb-8 font-roboto">
                            En Coco Labs SAS transformamos tus ideas en software innovador, personalizado y respaldado con garantías claras. Nuestro enfoque se centra en entregas rápidas y flexibles, acompañándote de principio a fin para asegurar que cada solución supere tus expectativas. Creamos tecnología diseñada exclusivamente para ti, con la tranquilidad de contar con un soporte garantizado que impulsa tu éxito.
                        </p>
                        <Button text="Consulta Gratis" onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="border border-brown p-4 flex flex-col items-center text-center">
                            <img
                                src={cocoWomanIcon}
                                alt="Natalia Schmitz"
                                className="w-32 h-32 mb-4"
                            />
                            <h3 className="text-blue font-bold text-lg">Natalia Schmitz</h3>
                            <p className="text-sm text-brown font-roboto">Founder</p>
                        </div>

                        <div className="border border-brown p-4 flex flex-col items-center text-center">
                            <img
                                src={cocoManIcon}
                                alt="Luis Gómez"
                                className="w-32 h-32 mb-4"
                            />
                            <h3 className="text-blue font-bold text-lg">Luis Gómez</h3>
                            <p className="text-sm text-brown font-roboto">Founder</p>
                        </div>

                        <div className="border border-brown p-4 flex flex-col items-center text-center col-span-1 md:col-span-2">
                            <img
                                src={cocoWomanIcon}
                                alt="Ana María Duarte"
                                className="w-32 h-32 mb-4"
                            />
                            <h3 className="text-blue font-bold text-lg">Ana María Duarte</h3>
                            <p className="text-sm text-brown font-roboto">Project Management</p>
                            <p className="text-sm text-brown font-roboto">Directora creativa</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-16 px-6 md:px-48 bg-gray-50">
                <h2 className="text-3xl font-bold text-brown mb-6 md:mb-12 text-center">Soluciones personalizadas que impulsan tu negocio</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white overflow-hidden hover:shadow-lg transition p-6">
                            <img
                                src={post.image}
                                alt={post.alt}
                                className="w-full h-48 object-cover"
                            />
                            <h3 className="text-xl font-bold text-blue mb-3 mt-6">{post.title}</h3>
                            <p className="text-brown text-justify font-roboto mb-6">
                                {post.description}
                            </p>
                            <div className="flex justify-end">
                                <button className="flex items-center text-blue group">
                                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        Leer más
                                    </span>
                                    <FaChevronRight className="ml-2 group-hover:ml-4 transition-all duration-300" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <Button text="Consulta Gratis" onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")} />
                </div>
            </section>
        </MainLayout>
	);
};

export default HomeView;