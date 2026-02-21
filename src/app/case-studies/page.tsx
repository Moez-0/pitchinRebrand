// app/case-studies/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies-data";
import SectionHeader from "@/components/ui/SectionHeader";
import GridOverlay from "@/components/ui/GridOverlay";

export const metadata: Metadata = {
    title: "Case Studies | Pitchin",
    description: "Explore our portfolio of successful software development projects across FinTech, EdTech, Healthcare, and E-commerce.",
};

export default function CaseStudiesListingPage() {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative py-28 lg:py-36 overflow-hidden">
                <GridOverlay opacity={10} />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Portfolio"
                        title="Work that makes an impact"
                        description="From early-stage startups to established enterprises, we build software that drives real business results."
                    />
                </div>
            </section>

            {/* Grid */}
            <section className="relative pb-32">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {caseStudies.map((study, index) => (
                            <Link
                                key={index}
                                href={`/case-studies/${study.slug}`}
                                className="group relative bg-zinc-900/30 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-primary/30 transition-all duration-500 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={study.heroImage}
                                        alt={study.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6 z-10">
                                        <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800">
                                            <span className="text-xs text-primary font-medium tracking-wider">
                                                {study.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="text-xs text-zinc-500 font-medium tracking-wider uppercase mb-3">
                                        {study.company} • {study.tagline}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-primary transition-colors duration-300 leading-snug">
                                        {study.title}
                                    </h3>

                                    {/* Metrics Row */}
                                    <div className="grid grid-cols-2 gap-4 mt-auto mb-6 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
                                        {study.metrics.slice(0, 2).map((m, i) => (
                                            <div key={i}>
                                                <div className="text-xl font-bold text-white group-hover:text-primary transition-colors">{m.value}</div>
                                                <div className="text-xs text-zinc-500">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech stack pills */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 bg-black border border-zinc-800 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="inline-flex items-center text-sm font-medium text-zinc-400 group-hover:text-primary transition-colors duration-300">
                                        Read full case study
                                        <span className="ml-2 text-lg group-hover:ml-4 transition-all duration-300">→</span>
                                    </div>
                                </div>

                                {/* Hover corner accents */}
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
