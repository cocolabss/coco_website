import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
// import { useNavigate } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

import Button from "../../components/Button";
import MainLayout from "../../components/MainLayout";

import cocoUnoIcon from '../../assets/icons/services/coco_1.svg';
import cocoDosIcon from '../../assets/icons/services/coco_2.svg';
import cocoTresIcon from '../../assets/icons/services/coco_3.svg';
import cocoCuatroIcon from '../../assets/icons/services/coco_4.svg';
import cocoCincoIcon from '../../assets/icons/services/coco_5.svg';
import optimizacionIcon from '../../assets/icons/cards/optimizacion_white.svg';
import modernizacionIcon from '../../assets/icons/cards/modernizacion_white.svg';
import bannerProductoUnoImage from '../../assets/images/banner_producto1.png';
import bannerProductoDosImage from '../../assets/images/banner_producto2.png';

const DevelopmentView = () => {
    type TimelineItemRef = HTMLDivElement | null;
    type ConnectorRef = HTMLDivElement | null;
    type IconRef = HTMLImageElement | null;
    type ButtonRef = HTMLButtonElement | null;

    // const navigate = useNavigate();
    const [counterStarted, setCounterStarted] = useState(false);
    const timelineLine = useRef<HTMLDivElement>(null);
    const timelineItems = useRef<TimelineItemRef[]>([]);
    const connectorLines = useRef<ConnectorRef[]>([]);
    const icons = useRef<IconRef[]>([]);
    const finalButton = useRef<ButtonRef>(null);
    
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
            if (entry?.isIntersecting && timelineLine.current?.firstChild) {
                (timelineLine.current.firstChild as HTMLElement).classList.add('animate-timelineLine');
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

    const onCounterVisible = (isVisible: boolean) => {
        if (isVisible && !counterStarted) {
            setCounterStarted(true);
        }
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
                                            Nuestros proyectos son personalizados y a la medida de nuestros clientes.
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
                                        alt="Consulta del proyecto"
                                        className="w-40 h-40 mb-6 md:mb-0 md:mr-8 object-contain"
                                    />
                                    <div className="text-center md:text-start">
                                        <h3 className="text-3xl text-blue font-bold mb-4">Consulta del proyecto</h3>
                                        <div className="text-brown font-roboto">
                                            <p className="mb-4">
                                                Nuestro equipo ayudará a definir el problema y desarrollar una solución, con un presupuesto claro, en un modelo de colaboración y bajo recomendaciones técnicas.
                                            </p>
                                            <p className="font-bold">Trazamos objetivos y plazos.</p>
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
                                        <h3 className="text-3xl text-blue font-bold mb-4">Diseño y planificación</h3>
                                        <div className="text-brown font-roboto">
                                            <p className="mb-4">
                                                Creamos un equipo contigo para comenzar a diseñar una solución, creando un roadmap de trabajo, objetivos de diseño y desarrollo.
                                            </p>
                                            <p className="font-bold">Investigación del proyecto.</p>
                                        </div>
                                    </div>
                                    <img
                                        ref={el => setIconRef(el, 2)}
                                        src={cocoTresIcon}
                                        alt="Diseño y planificación"
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
                                        alt="Implementación"
                                        className="w-40 h-40 mb-6 md:mb-0 md:mr-8 object-contain"
                                    />
                                    <div className="text-center md:text-start">
                                        <h3 className="text-3xl text-blue font-bold mb-4">Implementación</h3>
                                        <div className="text-brown font-roboto">
                                            <p className="mb-4">
                                                Nuestro equipo comenzará a desarrollar la solución, siguiendo de trabajo y entregando los objetivos.
                                            </p>
                                            <p className="font-bold">Reuniones de seguimiento semanal.</p>
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
                            <div className="hidden md:blockabsolute left-1/2 bottom-0 h-8 w-1 bg-blue transform -translate-x-1/2 z-0"></div>
                            <Button
                                text="Consulta Gratis"
                                onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")}
                            />
                        </div>
                    </div>
                </section>

                <section className="py-16 px-6 md:px-24 bg-gray">
                    <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 justify-evenly items-center">
                        <div className="flex flex-col justify-center text-center md:text-start">
                            <h2 className="text-4xl md:text-5xl text-blue font-bold mb-6">
                                Soluciones personalizadas<br />que impulsan tu negocio
                            </h2>
                            <div className="flex justify-center md:justify-start w-full md:w-auto">
                                <Button
                                    text="Consulta Gratis"
                                    onClick={() => window.open("https://calendar.app.google/T7SAQckgiuHLcswj8", "_blank")}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">
                            <VisibilitySensor onChange={onCounterVisible} delayedCall>
                                <div className="text-center md:text-right">
                                    <div className="text-4xl md:text-7xl font-bold text-blue mb-2">
                                        <span>+</span>
                                        {counterStarted && (
                                            <CountUp start={0} end={10000} duration={2.5} separator="," />
                                        )}
                                        {!counterStarted && "10,000"}
                                    </div>
                                    <p className="text-brown">Usuarios</p>
                                </div>
                            </VisibilitySensor>

                            <VisibilitySensor onChange={onCounterVisible} delayedCall>
                                <div className="text-center md:text-right">
                                    <div className="text-4xl md:text-7xl font-bold text-blue mb-2">
                                        <span>+</span>
                                        {counterStarted && (
                                            <CountUp start={0} end={200} duration={2.5} />
                                        )}
                                        {!counterStarted && "200"}
                                    </div>
                                    <p className="text-brown">Empresas atendidas</p>
                                </div>
                            </VisibilitySensor>

                            <VisibilitySensor onChange={onCounterVisible} delayedCall>
                                <div className="text-center md:text-right">
                                    <div className="text-4xl md:text-7xl font-bold text-blue mb-2">
                                        <span>+</span>
                                        {counterStarted && (
                                            <CountUp start={0} end={14} duration={2.5} />
                                        )}
                                        {!counterStarted && "14"}
                                    </div>
                                    <p className="text-brown">Proyectos de software</p>
                                </div>
                            </VisibilitySensor>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-6 md:px-24 relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${bannerProductoUnoImage})` }}
                >
                    <div className="flex flex-col md:flex-row justify-evenly items-center">
                        <div className="flex justify-center">
                            <img
                                src={optimizacionIcon}
                                alt="Icono grande"
                                className="w-60 h-60 object-contain"
                            />
                        </div>

                        <div className="text-white text-center md:text-right mt-6 md:mt-0">
                            <h2 className="text-5xl font-bold mb-4">Optimización de Productos</h2>
                            <p className="mb-6 font-roboto">
                                Perfeccionamos tus herramientas existentes para maximizar su impacto.
                            </p>
                            <div className="flex justify-center md:justify-end">
                                <Button
                                    text="Contactar Gratis"
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
                            <p className="mb-6 font-roboto">
                                Actualizamos tu tecnología para que esté a la altura del futuro.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Button
                                    text="Contactar Gratis"
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

export default DevelopmentView;