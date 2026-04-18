// app/careers/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";
import { JobListing } from "@/types";
import { getServerLocale } from "@/lib/i18n/server";
import { absoluteUrl } from "@/lib/seo";
export const metadata: Metadata = {
    title: "Careers | Pitchin",
    description: "Join the Pitchin team. We're hiring talented engineers, designers, and product managers who want to shape the future of software development.",
    alternates: {
        canonical: absoluteUrl("/careers"),
    },
};

export default async function CareersPage() {
    const locale = await getServerLocale();
    const isFr = locale === "fr";

    const jobListings: JobListing[] = [
        {
            id: "frontend-dev",
            title: isFr ? "Développeur Frontend Senior" : "Senior Frontend Developer",
            department: isFr ? "Ingénierie" : "Engineering",
            location: isFr ? "Remote (fuseau Europe)" : "Remote (EU timezone)",
            type: isFr ? "Temps plein" : "Full-time",
            description: isFr ? "Créer des interfaces performantes et soignées pour les produits de nos clients avec React, Next.js et TypeScript." : "Build pixel-perfect, performant UIs for our clients' products using React, Next.js, and TypeScript.",
            requirements: [],
        },
        {
            id: "backend-dev",
            title: isFr ? "Développeur Backend Senior" : "Senior Backend Developer",
            department: isFr ? "Ingénierie" : "Engineering",
            location: isFr ? "Remote (fuseau Europe)" : "Remote (EU timezone)",
            type: isFr ? "Temps plein" : "Full-time",
            description: isFr ? "Concevoir des API et systèmes de données robustes pour des applications à fort trafic avec Node.js ou Python." : "Design and build scalable APIs and data systems for high-traffic applications using Node.js or Python.",
            requirements: [],
        },
        {
            id: "ui-ux-designer",
            title: "UI/UX Designer",
            department: isFr ? "Design" : "Design",
            location: isFr ? "Remote (global)" : "Remote (Global)",
            type: isFr ? "Temps plein" : "Full-time",
            description: isFr ? "Créer des expériences produit intuitives et élégantes sur web et mobile." : "Create intuitive, beautiful product experiences for our clients across web and mobile platforms.",
            requirements: [],
        },
        {
            id: "project-manager",
            title: isFr ? "Chef de projet technique" : "Technical Project Manager",
            department: isFr ? "Opérations" : "Operations",
            location: isFr ? "Remote (fuseau Europe)" : "Remote (EU timezone)",
            type: isFr ? "Temps plein" : "Full-time",
            description: isFr ? "Coordonner des projets logiciels, le planning des sprints et la communication client pour livrer dans les délais." : "Coordinate complex software projects, sprint planning, and client communication to deliver on time and budget.",
            requirements: [],
        },
        {
            id: "qa-engineer",
            title: "QA Engineer",
            department: isFr ? "Ingénierie" : "Engineering",
            location: isFr ? "Remote (global)" : "Remote (Global)",
            type: isFr ? "Temps plein" : "Full-time",
            description: isFr ? "Mettre en place des suites de tests et garantir la qualité des livrables web et mobile." : "Build automated test suites and ensure the quality of client deliverables across web and mobile platforms.",
            requirements: [],
        },
    ];

    const benefits = [
        { icon: "✚", title: isFr ? "Couverture santé" : "Health Insurance", description: isFr ? "Une couverture pensée pour vous accompagner sur le long terme." : "Comprehensive medical, dental, and vision for you and your family." },
        { icon: "✦", title: isFr ? "Budget formation" : "Learning Budget", description: isFr ? "Un budget annuel pour cours, conférences et montée en compétence." : "Annual budget for courses, conferences, and books." },
        { icon: "◴", title: isFr ? "Horaires flexibles" : "Flexible Hours", description: isFr ? "Nous valorisons les résultats, pas la présence continue." : "We care about output, not hours. Work when you're at your best." },
        { icon: "❂", title: isFr ? "Full remote" : "Fully Remote", description: isFr ? "Travaillez d'où vous voulez avec une bonne connexion internet." : "Work from anywhere with an internet connection — forever." },
        { icon: "◈", title: isFr ? "Évolution réelle" : "Growth Opportunities", description: isFr ? "Des rôles avec impact et une vraie place dans la construction de l'agence." : "We share the upside. Equity options available for senior roles." },
        { icon: "⚑", title: isFr ? "Temps d'équipe" : "Team Retreats", description: isFr ? "Des moments réguliers pour se retrouver, aligner la vision et avancer ensemble." : "Annual company retreat to connect and celebrate in person." },
    ];

    const applicationSteps = [
        { step: "01", title: isFr ? "Candidature" : "Apply Online", description: isFr ? "Envoyez votre CV et quelques lignes sur ce qui vous motive à rejoindre Pitchin." : "Submit your CV and a short note on why you want to join Pitchin." },
        { step: "02", title: isFr ? "Premier échange" : "Intro Call", description: isFr ? "Un appel rapide pour comprendre votre parcours et vous présenter le rôle." : "30-minute video call with our People team to discuss the role and your background." },
        { step: "03", title: isFr ? "Évaluation" : "Technical Assessment", description: isFr ? "Un exercice simple et pertinent par rapport au poste, sans charge excessive." : "A take-home or live technical challenge relevant to the role — never more than 3 hours." },
        { step: "04", title: isFr ? "Rencontre équipe" : "Team Interview", description: isFr ? "Rencontrez les personnes avec qui vous allez collaborer. L'adéquation va dans les deux sens." : "Meet the team you'll be working with. Culture fit goes both ways." },
        { step: "05", title: isFr ? "Offre" : "Offer", description: isFr ? "Nous avançons vite. Une décision est prise rapidement après le dernier échange." : "We move fast. Expect a decision within 5 business days of your final interview." },
    ];

    return (
        <div className="bg-black min-h-screen">
            <section className="relative py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-4">{isFr ? "Rejoignez-nous" : "Join Our Team"}</p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 max-w-3xl">
                        {isFr ? "Construire le futur du" : "Build the future of"}
                        <br />
                        <span className="text-primary">{isFr ? "logiciel, ensemble" : "software, together"}</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl mb-10">
                        {isFr ? "Nous sommes une équipe remote-first d'ingénieurs, designers et profils produit qui aiment construire de très bons logiciels avec de très bonnes personnes." : "We're a remote-first team of engineers, designers, and strategists who love building exceptional software with exceptional people."}
                    </p>
                    <a
                        href="#open-roles"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                    >
                        {isFr ? "Voir les postes ouverts" : "See Open Roles"}
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <section id="open-roles" className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">{isFr ? "Postes ouverts" : "Open Positions"}</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                            {isFr ? "Nous recrutons" : "We're hiring"}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {jobListings.map((job) => (
                            <div
                                key={job.id}
                                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-tl-xl"></div>
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-tr-xl"></div>

                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="text-xs text-primary font-medium tracking-wider bg-primary/10 px-2.5 py-1 rounded-full">
                                                {job.department}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary/90 transition-colors duration-300">
                                            {job.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm mb-4 max-w-2xl">{job.description}</p>
                                        <div className="flex flex-wrap items-center gap-4">
                                            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                                                <Clock className="w-3.5 h-3.5" />
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                                                <Briefcase className="w-3.5 h-3.5" />
                                                {job.department}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/contact?role=${job.id}`}
                                        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white rounded-xl hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium"
                                    >
                                        {isFr ? "Postuler" : "Apply Now"}
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">{isFr ? "Avantages" : "Perks & Benefits"}</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                            {isFr ? "Nous prenons soin de" : "We take care of"}
                            <br />{isFr ? "notre équipe" : "our people"}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-6 group-hover:h-6 transition-all duration-500"></div>
                                <div className="text-3xl mb-4">{benefit.icon}</div>
                                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">{isFr ? "Comment ça marche" : "How it works"}</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                            {isFr ? "Processus de candidature" : "Application process"}
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 hidden lg:block"></div>
                        <div className="space-y-6">
                            {applicationSteps.map((step, i) => (
                                <div key={i} className="group relative flex gap-8">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-zinc-800 bg-black flex items-center justify-center relative z-10 group-hover:border-primary transition-all duration-500">
                                        <span className="text-primary font-bold text-sm">{step.step}</span>
                                    </div>
                                    <div className="flex-1 pt-4">
                                        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">{isFr ? "Vous ne voyez pas le bon poste ?" : "Don't see a fit?"}</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        {isFr ? "Nous aimons rencontrer des profils solides. Envoyez-nous votre CV et expliquez-nous comment vous pourriez apporter de la valeur à l'équipe." : "We're always looking for exceptional people. Send us your CV and tell us how you'd add value to the team."}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-white hover:border-primary hover:text-primary transition-all duration-500 text-sm font-medium rounded-xl"
                    >
                        {isFr ? "Candidature spontanée" : "Send an open application"}
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
