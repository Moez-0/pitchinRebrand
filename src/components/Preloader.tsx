"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only run the preloader once per session
        const hasLoaded = sessionStorage.getItem("pitchin-preloader-shown");

        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        // Set timeout to hide preloader (increased to 3.5s)
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("pitchin-preloader-shown", "true");
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    <div className="overflow-hidden mb-8">
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                            exit={{ y: "-100%", opacity: 0 }}
                        >
                            <Image
                                src="/logo.svg"
                                alt="Pitchin"
                                width={180}
                                height={60}
                                priority
                                className="w-auto h-12 sm:h-16 brightness-0 invert"
                            />
                        </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                        className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
