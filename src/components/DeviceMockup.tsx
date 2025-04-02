import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DeviceMockupProps {
    type: "desktop" | "mobile";
    screenshots: string[];
}

const DeviceMockup = ({ type, screenshots }: DeviceMockupProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying || screenshots.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, screenshots.length]);

    if (!screenshots || screenshots.length === 0) {
        return (
            <div className="text-center py-12 text-gray-400">
                <p>No hay imágenes disponibles</p>
            </div>
        );
    }

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {type === "desktop" ? (
                <div className="relative mx-auto bg-brown border-[16px] border-brown rounded-2xl h-[500px] max-w-4xl shadow-2xl">
                    <div className="overflow-hidden h-[468px] bg-white relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={screenshots[currentIndex]}
                                alt={`Screenshot ${currentIndex + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </AnimatePresence>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-brown rounded-full"></div>
                </div>
            ) : (
                <div className="relative mx-auto bg-brown border-[12px] border-brown rounded-2xl h-[600px] w-[300px] shadow-2xl">
                    <div className="overflow-hidden h-[576px] bg-white relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={screenshots[currentIndex]}
                                alt={`Screenshot ${currentIndex + 1}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </AnimatePresence>
                    </div>
                    <div className="absolute top-24 left-0 -ml-1 w-1 h-16 bg-brown rounded-l-full"></div>
                    <div className="absolute top-40 left-0 -ml-1 w-1 h-8 bg-brown rounded-l-full"></div>
                    <div className="absolute bottom-24 right-0 -mr-1 w-1 h-12 bg-brown rounded-r-full"></div>
                </div>
            )}

            {screenshots.length > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                    {screenshots.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index
                                    ? 'bg-blue w-6'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Mostrar captura ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DeviceMockup;