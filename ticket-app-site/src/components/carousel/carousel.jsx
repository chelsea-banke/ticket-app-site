import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Carousel = ({ carouselItems, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) =>
            newDirection === 1
                ? (prev + 1) % carouselItems.length
                : (prev - 1 + carouselItems.length) % carouselItems.length
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, interval);

        return () => clearInterval(timer); // Cleanup on unmount or re-render
    }, [currentIndex, interval]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <div className="w-full max-w-xl mx-auto relative overflow-hidden">
            <div className="relative h-60">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full h-full"
                    >
                        {carouselItems[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex justify-between absolute z-10 bottom-24 w-full">
                <button
                    onClick={() => paginate(-1)}
                    className="px-4 py-2 bg-gray-600 rounded rounded-l-none"
                >
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" color="white" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="px-4 py-2 bg-gray-600 rounded rounded-r-none"
                >
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" color="white"/>
                </button>
            </div>
        </div>
    );
};