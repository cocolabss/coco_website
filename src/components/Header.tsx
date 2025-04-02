import { useLocation } from 'react-router-dom';
import { routeTexts } from '../utils/dataRouteTexts';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./Navbar";
import Button from '../components/Button';
import BannerHome from '../assets/images/banner_home.png';
import React from 'react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const transition = {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.99]
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

type MotionHTMLTags = keyof typeof motion extends infer K
    ? K extends keyof JSX.IntrinsicElements
    ? K
    : never
    : never;

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    as?: MotionHTMLTags;
    style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    className,
    delay = 0,
    as = 'div',
    style
}) => {
    const words = text.split(" ");

    const MotionComponent = motion[as as keyof typeof motion] as React.ElementType;

    return (
        <MotionComponent
            className={className}
            style={style}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay }}
        >
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    <motion.span
                        style={{ display: 'inline-block' }}
                        variants={fadeInUp}
                        transition={transition}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 && ' '}
                </React.Fragment>
            ))}
        </MotionComponent>
    );
};

const AnimatedButton: React.FC<{
    text: string;
    onClick: () => void;
    delay?: number;
}> = ({ text, onClick, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay }}
        >
            <Button
                text={text}
                onClick={onClick}
                variant='white'
            />
        </motion.div>
    );
};

const Header = () => {
    const location = useLocation();
    const isProjectDetailRoute = /^\/projects\/\d+$/.test(location.pathname);

    if (isProjectDetailRoute) {
        return <Navbar />;
    }

    type RouteKey = keyof typeof routeTexts;
    const currentRoute: RouteKey = location.pathname as RouteKey;
    const { img, icon, title, description, buttonText } = routeTexts[currentRoute] || routeTexts['/'];

    return (
        <>
            <Navbar />

            <header className="relative">
                {currentRoute === '/' ? (
                    <div
                        className="pt-[35rem] pb-12 px-6 md:px-24 flex row justify-evenly items-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${BannerHome})` }}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-center md:text-start bg-black bg-opacity-50 px-6 md:px-48">
                            <AnimatePresence>
                                <AnimatedText
                                    text={title}
                                    className="text-white text-2xl md:text-4xl font-bold leading-tight"
                                    as="h1"
                                />

                                <AnimatedText
                                    text={description}
                                    className="text-white mt-4 text-lg md:text-xl font-roboto mb-12"
                                    delay={0.3}
                                />

                                {buttonText && (
                                    <AnimatedButton
                                        text={buttonText}
                                        onClick={() => window.open('https://calendar.app.google/T7SAQckgiuHLcswj8', '_blank')}
                                        delay={0.6}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
                    <div
                        className="pt-60 pb-32 px-6 md:px-24 flex flex-col md:flex-row space-y-12 md:space-y-0 justify-evenly items-center text-center md:text-start bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="text-white flex flex-col items-center md:items-start">
                            <AnimatePresence>
                                <AnimatedText
                                    text={title}
                                    className="text-5xl font-bold mb-4"
                                    as="h1"
                                />

                                <AnimatedText
                                    text={description}
                                    className="mb-6 font-roboto"
                                    style={{ fontWeight: 500 }}
                                    delay={0.3}
                                />

                                {buttonText && (
                                    <AnimatedButton
                                        text={buttonText}
                                        onClick={() => window.open('https://calendar.app.google/T7SAQckgiuHLcswj8', '_blank')}
                                        delay={0.6}
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        {icon && (
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...transition, delay: 0.9 }}
                            >
                                <img
                                    src={icon}
                                    alt="Icono grande"
                                    className="w-60 h-60 object-contain"
                                />
                            </motion.div>
                        )}
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;