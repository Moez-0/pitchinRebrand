// app/case-studies/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data";
import Breadcrumb from "@/components/ui/Breadcrumb";
import GridOverlay from "@/components/ui/GridOverlay";
import ClientPdfButton from "./client-pdf-button";
import { absoluteUrl } from "@/lib/seo";
import { getServerDictionary } from "@/lib/i18n/server";
import { localizeCaseStudy } from "@/lib/i18n/case-studies";

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const study = getCaseStudyBySlug(resolvedParams.slug);

    if (!study) {
        return { title: 'Case Study Not Found' };
    }

    return {
        title: `${study.company} Case Study | Pitchin`,
        description: study.tagline,
        alternates: {
            canonical: absoluteUrl(`/case-studies/${study.slug}`),
        },
        openGraph: {
            type: "article",
            title: `${study.company} Case Study`,
            description: study.tagline,
            url: absoluteUrl(`/case-studies/${study.slug}`),
            images: [
                {
                    url: study.heroImage,
                    alt: study.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${study.company} Case Study`,
            description: study.tagline,
            images: [study.heroImage],
        },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const study = getCaseStudyBySlug(resolvedParams.slug);
    const { locale } = await getServerDictionary();

    if (!study) {
        notFound();
    }

    const localizedStudy = localizeCaseStudy(study, locale);

    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={localizedStudy.heroImage}
                        alt={localizedStudy.title}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    <GridOverlay opacity={10} />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Case Studies", href: "/case-studies" },
                                { label: localizedStudy.company },
                            ]}
                        />
                        <ClientPdfButton study={localizedStudy} />
                    </div>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs text-primary font-medium tracking-wider uppercase bg-primary/10 px-3 py-1.5 rounded-full">
                                {localizedStudy.category}
                            </span>
                            <span className="text-sm text-zinc-400 font-medium">
                                {localizedStudy.company}
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">
                            {localizedStudy.title}
                        </h1>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 py-8 border-y border-zinc-800/50">
                            {localizedStudy.metrics.map((m, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                                    <div className="text-xs text-zinc-400 font-medium tracking-wide uppercase">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        <div className="lg:col-span-8 space-y-16">
                            {/* Challenge */}
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-500">1</span>
                                    {locale === "fr" ? "Le défi" : "The Challenge"}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-lg font-light">
                                    {localizedStudy.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-500">2</span>
                                    {locale === "fr" ? "La solution" : "The Solution"}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-lg font-light">
                                    {localizedStudy.solution}
                                </p>
                            </div>

                            {/* Results */}
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 border border-primary/30 text-sm text-primary">3</span>
                                    {locale === "fr" ? "Les résultats" : "The Results"}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-lg font-light">
                                    {localizedStudy.results}
                                </p>
                            </div>

                            {/* Testimonial */}
                            {localizedStudy.testimonial && (
                                <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 sm:p-10 mt-12">
                                    <div className="text-5xl text-primary/20 absolute top-6 left-6 font-serif">"</div>
                                    <div className="relative z-10">
                                        <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-8 italic">
                                            {localizedStudy.testimonial.quote}
                                        </p>
                                        <div>
                                            <div className="text-primary font-medium">{localizedStudy.testimonial.author}</div>
                                            <div className="text-sm text-zinc-500">{localizedStudy.testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 sticky top-32">
                                <h4 className="text-sm text-white font-semibold uppercase tracking-wider mb-6">{locale === "fr" ? "Technologies utilisées" : "Technologies Used"}</h4>
                                <div className="flex flex-wrap gap-2.5 mb-10">
                                    {localizedStudy.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-black border border-zinc-800 rounded-lg text-xs text-zinc-400 font-medium hover:border-primary/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-zinc-800/50">
                                    <h4 className="text-sm text-white font-semibold uppercase tracking-wider mb-4">{locale === "fr" ? "Vous voulez des résultats similaires ?" : "Want similar results?"}</h4>
                                    <p className="text-sm text-zinc-500 mb-6">{locale === "fr" ? "Discutons de la manière dont nous pouvons aider votre entreprise à faire évoluer ses capacités produit et techniques." : "Let's discuss how we can help your company scale its engineering capabilities."}</p>
                                    <Link
                                        href="/contact"
                                        className="block w-full text-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
                                    >
                                        {locale === "fr" ? "Démarrer un projet" : "Start a project"}
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
