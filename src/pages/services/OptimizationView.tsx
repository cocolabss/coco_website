import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import MainLayout from "../../components/MainLayout";

import cocoUnoIcon from '../../assets/icons/services/coco_1.svg';
import cocoDosIcon from '../../assets/icons/services/coco_2.svg';
import cocoTresIcon from '../../assets/icons/services/coco_3.svg';
import cocoCuatroIcon from '../../assets/icons/services/coco_4.svg';
import cocoCincoIcon from '../../assets/icons/services/coco_5.svg';
import desarrolloIcon from '../../assets/icons/cards/desarrollo_white.svg'
import modernizacionIcon from '../../assets/icons/cards/modernizacion_white.svg';
import bannerProductoUnoImage from '../../assets/images/banner_producto1.png';
import bannerProductoDosImage from '../../assets/images/banner_producto2.png';


const OptimizationView = () => {
    type TimelineItemRef = HTMLDivElement | null;
    type ConnectorRef = HTMLDivElement | null;
    type IconRef = HTMLImageElement | null;
    type ButtonRef = HTMLButtonElement | null;

    // const navigate = useNavigate();
    const timelineLine = useRef<HTMLDivElement>(null);
    const timelineItems = useRef<TimelineItemRef[]>([]);
    const connectorLines = useRef<ConnectorRef[]>([]);
    const icons = useRef<IconRef[]>([]);
    const finalButton = useRef<ButtonRef>(null);

    const timelineLineSec = useRef<HTMLDivElement>(null);
    const timelineItemsSec = useRef<TimelineItemRef[]>([]);
    const connectorLinesSec = useRef<ConnectorRef[]>([]);
    const finalButtonSec = useRef<ButtonRef>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInVisible');
                    itemObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const lineObserver = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting && entry.target.firstChild) {
                (entry.target.firstChild as HTMLElement).classList.add('animate-timelineLine');
                lineObserver.unobserve(entry.target);
            }
        }, observerOptions);

        const connectorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('horizontal-connector')) {
                        entry.target.classList.add('animate-timelineGrow');
                    } else {
                        entry.target.classList.add('animate-timelineGrowVertical');
                    }
                    connectorObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const iconObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-bounceIn');
                    iconObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const buttonObserver = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting) {
                entry.target.classList.add('animate-fadeInVisible');
                buttonObserver.unobserve(entry.target);
            }
        }, observerOptions);

        if (timelineLine.current) lineObserver.observe(timelineLine.current);
        if (finalButton.current) buttonObserver.observe(finalButton.current);

        timelineItems.current.forEach(item => {
            if (item) itemObserver.observe(item);
        });

        connectorLines.current.forEach(line => {
            if (line) connectorObserver.observe(line);
        });

        icons.current.forEach(icon => {
            if (icon) iconObserver.observe(icon);
        });

        if (timelineLineSec.current) lineObserver.observe(timelineLineSec.current);
        if (finalButtonSec.current) buttonObserver.observe(finalButtonSec.current);

        timelineItemsSec.current.forEach(item => {
            if (item) itemObserver.observe(item);
        });

        connectorLinesSec.current.forEach(line => {
            if (line) connectorObserver.observe(line);
        });

        return () => {
            itemObserver.disconnect();
            lineObserver.disconnect();
            connectorObserver.disconnect();
            iconObserver.disconnect();
            buttonObserver.disconnect();
        };
    }, []);

    const setTimelineItemRef = (el: HTMLDivElement | null, index: number) => {
        timelineItems.current[index] = el;
    };

    const setConnectorRef = (el: HTMLDivElement | null, index: number) => {
        connectorLines.current[index] = el;
    };

    const setIconRef = (el: HTMLImageElement | null, index: number) => {
        icons.current[index] = el;
    };

    const setTimelineItemSecRef = (el: HTMLDivElement | null, index: number) => {
        timelineItemsSec.current[index] = el;
    };

    const setConnectorSecRef = (el: HTMLDivElement | null, index: number) => {
        connectorLinesSec.current[index] = el;
    };

    return (
        <MainLayout>
            <div className="container mx-auto">
                <section className="pt-10 pb-16 px-6 md:px-24 relative overflow-hidden">
                    <div className="relative">
                        <div
                            ref={timelineLine}
                            className="absolute left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2 z-0 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-0 bg-blue origin-top"></div>
                        </div>

                        <div className="flex justify-center mb-16 relative">
                            <div
                                ref={el => setTimelineItemRef(el, 0)}
                                className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-xl relative z-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        ref={el => setIconRef(el, 0)}
                                        src={cocoUnoIcon}
                                        alt="¿Cómo lo hacemos?"
                                        className="w-40 h-40 mb-6 object-contain"
                                    />
                                    <h3 className="text-3xl text-blue font-bold mb-4">¿Cómo lo hacemos?</h3>
                                    <div className="text-brown font-roboto">
                                        <p className="mb-6">
                                            Buscamos apoyarte en los diferentes escenarios y adaptarnos a las situaciones.
                                        </p>
                                        <p className="font-bold">Consulta gratis tu proyecto</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => setConnectorRef(el, 0)}
                            className="absolute left-1/2 h-1 w-0 bg-blue transform -translate-x-1/2 top-40 z-0 horizontal-connector"
                        ></div>

                        <div className="flex justify-end mb-16 relative">
                            <div
                                ref={el => setTimelineItemRef(el, 1)}
                                className="w-full max-w-xl bg-white rounded-2xl p-8 shadow-xl relative z-10 mr-0 md:mr-16 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="hidden md:block absolute left-0 top-1/2 h-1 w-16 bg-blue transform -translate-x-16 -translate-y-1/2 z-0"></div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <img
                                        ref={el => setIconRef(el, 1)}
                                        src={cocoDosIcon}
                                        alt="Acompañamiento de equipo"
                                        className="w-40 h-40 mb-6 md:mb-0 md:mr-8 object-contain"
                                    />
                                    <div className="text-center md:text-left">
                                        <h3 className="text-3xl text-blue font-bold mb-4">Acompañamiento de equipo</h3>
                                        <div className="text-brown font-roboto">
                                            <p className="mb-4">
                                                Trabajamos con tu equipo o paralelo en las funciones que necesites.
                                            </p>
                                            <p className="font-bold">Trazamos objetivos y plazos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => setConnectorRef(el, 1)}
                            className="absolute left-1/2 h-0 w-1 bg-blue transform -translate-x-1/2 top-96 z-0"
                        ></div>

                        <div className="flex justify-start mb-16 relative">
                            <div
                                ref={el => setTimelineItemRef(el, 2)}
                                className="w-full max-w-xl bg-white rounded-2xl p-8 shadow-xl relative z-10 ml-0 md:ml-16 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="hidden md:block absolute right-0 top-1/2 h-1 w-16 bg-blue transform translate-x-16 -translate-y-1/2 z-0"></div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="text-center md:text-right">
                                        <h3 className="text-3xl text-blue font-bold mb-4">Gestionamos tu equipo</h3>
                                        <div className="text-brown font-roboto">
                                            <p className="mb-4">
                                                Apoyamos el liderazgo y la gestión de tu equipo para encaminar a objetivos.
                                            </p>
                                            <p className="font-bold">Optimización de procesos</p>
                                        </div>
                                    </div>
                                    <img
                                        ref={el => setIconRef(el, 2)}
                                        src={cocoTresIcon}
                                        alt="Gestionamos tu equipo"
                                        className="w-40 h-40 mt-6 md:mt-0 md:ml-8 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => setConnectorRef(el, 2)}
                            className="absolute left-1/2 h-0 w-1 bg-blue transform -translate-x-1/2 top-[36rem] z-0"
                        ></div>

                        <div className="flex justify-end mb-16 relative">
                            <div
                                ref={el => setTimelineItemRef(el, 3)}
                                className="w-full max-w-xl bg-white rounded-2xl p-8 shadow-xl relative z-10 mr-0 md:mr-16 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="hidden md:block absolute left-0 top-1/2 h-1 w-16 bg-blue transform -translate-x-16 -translate-y-1/2 z-0"></div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <img
                                        ref={el => setIconRef(el, 3)}
                                        src={cocoCuatroIcon}
                                        alt="Nuevas funciones"
                                        className="w-40 h-40 mb-6 md:mb-0 md:mr-8 object-contain"
                                    />
                                    <div className="text-center md:text-left">
                                        <h3 className="text-3xl text-blue font-bold mb-4">Nuevas funciones</h3>
                                        <div className="text-brown font-roboto">
                                            <p className="mb-4">
                                                Tomamos el proyecto y nos hacemos cargo de él en todas sus etapas.
                                            </p>
                                            <p className="font-bold">Actualización de apps</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => setConnectorRef(el, 3)}
                            className="absolute left-1/2 h-0 w-1 bg-blue transform -translate-x-1/2 top-[50rem] z-0"
                        ></div>

                        <div className="flex justify-start relative">
                            <div
                                ref={el => setTimelineItemRef(el, 4)}
                                className="w-full max-w-xl bg-white rounded-2xl p-8 shadow-xl relative z-10 ml-0 md:ml-16 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="hidden md:block absolute right-0 top-1/2 h-1 w-16 bg-blue transform translate-x-16 -translate-y-1/2 z-0"></div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="text-center md:text-right">
                                        <h3 className="text-3xl text-blue font-bold mb-4">Garantía y soporte continuo</h3>
                                        <p className="text-brown font-roboto mb-4">
                                            Mantenemos una garantía de 3 meses en todos nuestros proyectos además nos adaptamos a tus necesidades, con cobertura desde el desarrollo de características adicionales, reaparaciones urgentes y cubrir el mantenimiento continuo.
                                        </p>
                                    </div>
                                    <img
                                        ref={el => setIconRef(el, 4)}
                                        src={cocoCincoIcon}
                                        alt="Garantía y soporte continuo"
                                        className="w-40 h-40 mt-6 md:mt-0 md:ml-8 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center relative mt-16">
                            <div className="absolute left-1/2 bottom-0 h-8 w-1 bg-blue transform -translate-x-1/2 z-0"></div>
                            <Button
                                text="Comunícate con un asesor"
                                onClick={() => window.open("https://wa.me/573013301908?text=Hola,%20me%20gustaría%20obtener%20más%20información.", "_blank")}
                            />
                        </div>
                    </div>
                </section>

                <section className="pb-16 px-6 md:px-24 relative overflow-hidden bg-gray">
                    <div className="relative">
                        <div
                            ref={timelineLineSec}
                            className="absolute left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2 z-0 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-0 bg-blue origin-top"></div>
                        </div>

                        <div className="flex justify-center pt-16 mb-16 relative">
                            <div
                                ref={el => setTimelineItemSecRef(el, 0)}
                                className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-xl relative z-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="flex flex-col items-center">
                                    <h3 className="text-3xl text-blue font-bold mb-6 text-center md:text-left">Siempre listos para tomar nuevos retos</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 w-full text-brown font-roboto">
                                        <div>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Diseño de aplicaciones</li>
                                                <li>Arquitectura y liderazgo</li>
                                                <li>Soporte y mantenimiento</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Frontend</li>
                                                <li>Backend</li>
                                                <li>FullStack</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => setConnectorSecRef(el, 0)}
                            className="absolute left-1/2 h-1 w-0 bg-blue transform -translate-x-1/2 top-40 z-0 horizontal-connector"
                        ></div>

                        <div className="flex justify-start mb-16 relative">
                            <div
                                ref={el => setTimelineItemSecRef(el, 1)}
                                className="w-full md:max-w-sm bg-white rounded-2xl p-8 shadow-xl relative z-10 ml-0 md:ml-64 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="hidden md:block absolute right-0 top-1/2 h-1 w-16 bg-blue transform translate-x-16 -translate-y-1/2 z-0"></div>
                                <div className="flex flex-col items-center">
                                    <h3 className="text-3xl text-blue font-bold mb-6 text-center md:text-left">Stack tecnológico</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 w-full text-brown font-roboto">
                                        <div>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Java</li>
                                                <li>Python</li>
                                                <li>JavaScript</li>
                                                <li>TypeScript</li>
                                                <li>Go</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Django</li>
                                                <li>FastApi</li>
                                                <li>React</li>
                                                <li>Flutter</li>
                                                <li>Dart</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => setConnectorSecRef(el, 1)}
                            className="absolute left-1/2 h-0 w-1 bg-blue transform -translate-x-1/2 top-96 z-0"
                        ></div>

                        <div className="flex justify-end relative">
                            <div
                                ref={el => setTimelineItemSecRef(el, 2)}
                                className="w-full md:max-w-md bg-white rounded-2xl p-8 shadow-xl relative z-10 mr-0 md:mr-48 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0"
                            >
                                <div className="hidden md:block absolute left-0 top-1/2 h-1 w-16 bg-blue transform -translate-x-16 -translate-y-1/2 z-0"></div>
                                <div className="flex flex-col items-center">
                                    <h3 className="text-3xl text-blue font-bold mb-6 text-center md:text-left">Plataformas y servicios en la nube</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 w-full text-brown font-roboto">
                                        <div>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>Heroku</li>
                                                <li>AWS</li>
                                                <li>Google Cloud Plataform</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-disc pl-5 space-y-2">
                                                <li>PostgresSQL</li>
                                                <li>ElasticSearch</li>
                                                <li>Firebase</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center relative mt-16">
                            <div className="absolute left-1/2 bottom-0 h-8 w-1 bg-blue transform -translate-x-1/2 z-0"></div>
                            <Button
                                text="Consulta Gratis"
                                onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")}
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 px-6 md:px-24 relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerProductoUnoImage})` }}
                >
                    <div className="flex flex-col md:flex-row justify-evenly items-center">
                        <div className="flex justify-center">
                            <img
                                src={desarrolloIcon}
                                alt="Icono grande"
                                className="w-60 h-60 object-contain"
                            />
                        </div>

                        <div className="text-white text-center md:text-right mt-6 md:mt-0">
                            <h2 className="text-5xl font-bold mb-4">Desarrollo de Nuevos Productos</h2>
                            <p className="mb-6">
                                Creamos desarrollos a la medida desde cero, creando soluciones que destacan.
                            </p>
                            <div className="flex justify-center md:justify-end">
                                <Button
                                    text="Consulta Gratis"
                                    onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-6 md:px-24 relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerProductoDosImage})` }}
                >
                    <div className="flex flex-col md:flex-row justify-evenly items-center">
                        <div className="text-white text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-5xl font-bold mb-4">Modernización de Sistemas</h2>
                            <p className="mb-6">
                                Actualizamos tu tecnología para que esté a la altura del futuro.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Button
                                    text="Consulta Gratis"
                                    onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")}
                                    variant="white"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={modernizacionIcon}
                                alt="Icono grande"
                                className="w-60 h-60 object-contain"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default OptimizationView;