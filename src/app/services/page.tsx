// app/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Services | Pitchin",
    description: "End-to-end software development services from MVP to enterprise scale. Staff augmentation, web development, mobile apps, and more.",
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="Our Expertise"
                        title="Services built around your needs"
                        description="Whether you need a dedicated team, a specialized developer, or an end-to-end product build, we have the expertise to deliver."
                    />
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative pb-32">
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group flex flex-col h-full relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 hover:border-primary/40 transition-all duration-500"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/40 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-tl-2xl"></div>
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/40 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-tr-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/40 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-bl-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/40 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-br-2xl"></div>

                                <div className="text-4xl mb-6 bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center border border-zinc-800 group-hover:border-primary/50 transition-colors duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                    {service.title} <span className="text-primary">{service.subtitle}</span>
                                </h3>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-zinc-800/50">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase bg-zinc-900 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {service.technologies.length > 3 && (
                                            <span className="text-[11px] font-medium tracking-wider text-zinc-600 uppercase bg-zinc-900/50 px-2 py-1 rounded">
                                                +{service.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors duration-300 group/link"
                                    >
                                        Explore service
                                        <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process CTA */}
            <section className="py-24 border-t border-zinc-800 bg-black relative overflow-hidden">
                {/* Subtle radial gradient */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-60"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">Need a custom technical approach?</h2>
                    <p className="text-zinc-400 mb-10 text-lg">
                        We adapt our engagement model to fit your exact requirements. Let&apos;s map out the architecture and timeline on a free discovery call.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium text-sm"
                    >
                        Book a discovery call
                    </Link>
                </div>
            </section>
        </div>
    );
}
