import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <Image src="/images/grid.svg" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
                <div className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-black leading-none select-none relative">
                    404
                    {/* Overlay text for depth */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20 blur-sm mix-blend-screen">
                        404
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4 mt-8">
                    Page not found
                </h1>

                <p className="text-zinc-400 text-lg mb-10">
                    The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 rounded-xl hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium"
                    >
                        Contact Support
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
