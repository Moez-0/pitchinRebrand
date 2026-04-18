// app/services/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services-data";
import Breadcrumb from "@/components/ui/Breadcrumb";
import GridOverlay from "@/components/ui/GridOverlay";
import { absoluteUrl } from "@/lib/seo";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) {
        return { title: 'Service Not Found' };
    }

    return {
        title: `${service.title} ${service.subtitle} | Pitchin`,
        description: service.description,
        alternates: {
            canonical: absoluteUrl(`/services/${service.slug}`),
        },
        openGraph: {
            type: "website",
            title: `${service.title} ${service.subtitle}`,
            description: service.description,
            url: absoluteUrl(`/services/${service.slug}`),
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} ${service.subtitle}`,
            description: service.description,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <GridOverlay opacity={15} />

                {/* Subtle top gradient */}
                <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-8">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "/services" },
                                { label: `${service.title} ${service.subtitle}` },
                            ]}
                        />
                    </div>

                    <div className="max-w-4xl">
                        <div className="text-5xl mb-6">{service.icon}</div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8">
                            {service.title} <br className="hidden sm:block" />
                            <span className="text-primary">{service.subtitle}</span>
                        </h1>
                        <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10 font-light">
                            {service.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium text-sm"
                            >
                                Discuss your project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-zinc-800/50">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Col: Description & Tech */}
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl font-semibold text-white mb-6">Overview</h2>
                            <p className="text-zinc-400 leading-relaxed mb-12 text-lg font-light">
                                {service.longDescription}
                            </p>

                            <h3 className="text-xl font-semibold text-white mb-6">Key Capabilities</h3>
                            <ul className="space-y-4 mb-16">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-white mb-6">Technologies we use</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {service.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 font-medium tracking-wide hover:border-primary/50 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Col: Process */}
                        <div className="lg:col-span-5">
                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 sticky top-32">
                                <h3 className="text-xl font-semibold text-white mb-8">How we work</h3>
                                <div className="relative">
                                    <div className="absolute left-4 top-2 bottom-6 w-px bg-zinc-800"></div>
                                    <div className="space-y-8">
                                        {service.process.map((step, i) => (
                                            <div key={i} className="relative pl-12">
                                                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center text-xs font-bold text-primary z-10">
                                                    {step.step}
                                                </div>
                                                <h4 className="text-white font-medium mb-1.5">{step.title}</h4>
                                                <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Line */}
            <section className="py-24 border-t border-zinc-800 text-center relative overflow-hidden">
                <GridOverlay opacity={5} />
                <div className="relative z-10">
                    <h2 className="text-3xl font-semibold text-white mb-6">Ready to scale your engineering?</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        Get a tailored technical proposal and timeline within 48 hours of our discovery call.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 font-medium"
                    >
                        Start the conversation <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
