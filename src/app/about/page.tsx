// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types";
import { User } from "lucide-react";
import { getServerLocale } from "@/lib/i18n/server";
import { absoluteUrl } from "@/lib/seo";
export const metadata: Metadata = {
    title: "About Us | Pitchin",
    description: "Meet the Pitchin team — a remote-first collective of engineers, designers, and strategists building people-first software.",
    alternates: {
        canonical: absoluteUrl("/about"),
    },
};

export default async function AboutPage() {
    const locale = await getServerLocale();
    const isFr = locale === "fr";

    const team: TeamMember[] = [
        {
            name: "Moez Souidi",
            role: isFr ? "Fondateur & CEO" : "Founder & CEO",
            image: "",
            bio: isFr
                ? "Ingénieur logiciel avec plus de 5 ans d'expérience en développement. Passionné par la création de produits fiables, évolutifs et maintenables."
                : "Software Engineering Graduate with 5+ years of experience in software development. Passionate about building high-quality, scalable, and maintainable software.",
            linkedin: "https://www.linkedin.com/company/pitchin-mobi",
        },
    ];

    const values = [
        {
            icon: "",
            title: isFr ? "L'humain d'abord" : "People First",
            description: isFr ? "Nous construisons avec les équipes, pas seulement pour elles. Chaque décision garde les humains au centre." : "We build software with teams, not for them. Every decision is made with humans at the center.",
        },
        {
            icon: "",
            title: isFr ? "Transparence radicale" : "Radical Transparency",
            description: isFr ? "Pas de surprises. Des points réguliers, des estimations honnêtes et une communication ouverte à chaque étape." : "No surprises. Weekly status reports, honest estimates, and open communication at every stage.",
        },
        {
            icon: "",
            title: isFr ? "Qualité et rapidité" : "Quality at Speed",
            description: isFr ? "Pour nous, aller vite et bien faire ne s'opposent pas. Nos process sont conçus pour les deux." : "We believe fast and well-made aren't opposites. Our processes are built for both without compromise.",
        },
        {
            icon: "",
            title: isFr ? "Vision long terme" : "Long-term Thinking",
            description: isFr ? "Nous privilégions les partenariats durables plutôt que les missions ponctuelles. Votre réussite est aussi la nôtre." : "We optimize for long-term partnerships, not one-off engagements. Your success is our success.",
        },
    ];

    const milestones = [
        { year: "2024", title: isFr ? "Création" : "Founded", description: isFr ? "Pitchin démarre avec une conviction simple : le développement logiciel peut être plus humain." : "Started with a simple belief: software development can be more human." },
        { year: "2025", title: isFr ? "Premiers 10 clients" : "First 10 Clients", description: isFr ? "Signature de nos premiers clients et structuration de l'offre autour de produits web, mobile et IA." : "First enterprise client signed — a FinTech startup that went on to raise $20M." },
        { year: "2026", title: isFr ? "La suite" : "The Future", description: isFr ? "Accélération sur l'IA appliquée aux produits et montée en puissance sur les projets digitaux en Tunisie et à l'international." : "Expanding into AI-assisted development and building our own suite of developer tools." },
    ];

    const stats = [
        { value: "10+", label: isFr ? "Projets livrés" : "Projects Delivered" },
        { value: "3", label: isFr ? "Pays" : "Countries" },
        { value: "98%", label: isFr ? "Satisfaction client" : "Client Satisfaction" },
        { value: "6+", label: isFr ? "Membres clés" : "Core Team Members" },
    ];

    return (
        <div className="bg-black min-h-screen">
            <section className="relative py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-4">{isFr ? "À propos de Pitchin" : "About Pitchin"}</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-tight">
                            {isFr ? "Nous construisons le logiciel" : "We build software the way"}
                            <br />
                            <span className="text-primary">{isFr ? "comme il devrait être construit." : "it should be built."}</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                            {isFr ? "Pitchin est une agence logicielle centrée sur l'humain. Nous collaborons avec les startups et les entreprises comme une vraie extension de leur équipe, pas comme un simple prestataire." : "Pitchin is a people-first software development agency. We partner with startups and enterprises as a true extension of their team — not just a vendor."}
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative py-20 border-t border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-4">{isFr ? "Notre mission" : "Our Mission"}</p>
                            <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">
                                {isFr ? "Une technologie au service des personnes, pas l'inverse." : "Technology that serves people, not the other way around."}
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                {isFr ? "Pitchin est né d'un constat simple : trop de projets livrent du code sans vraiment comprendre le besoin métier. Nous voulons remettre la clarté, l'exécution et la collaboration au centre." : "We started Pitchin because we were frustrated with how software development was done. Agencies that treated clients as tickets. Developers who shipped code without understanding the business. Projects that delivered technically but failed commercially."}
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                {isFr ? "Nous avons donc créé l'agence avec laquelle nous aurions voulu travailler : une équipe impliquée, transparente et capable d'avancer vite sans sacrifier la qualité." : "So we built the agency we always wanted to work with. One where your engineering team feels like your engineering team — because they are."}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/30 transition-all duration-500">
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-zinc-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">{isFr ? "Ce que nous défendons" : "What We Stand For"}</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">{isFr ? "Nos valeurs" : "Our values"}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <div key={i} className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/30 transition-all duration-500">
                                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                                <div className="text-3xl mb-4">{value.icon}</div>
                                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">{isFr ? "L'équipe" : "The People"}</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">{isFr ? "L'équipe dirigeante" : "Meet the leadership"}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <div key={i} className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                                <div className="relative aspect-square overflow-hidden bg-zinc-900 border-b border-zinc-800 flex items-center justify-center">
                                    <User className="w-24 h-24 text-zinc-700 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-white font-semibold">{member.name}</h3>
                                    <p className="text-primary text-xs mb-3">{member.role}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
                                </div>
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
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">{isFr ? "Notre histoire" : "Our Story"}</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">{isFr ? "Étapes clés" : "Company milestones"}</h2>
                    </div>
                    <div className="space-y-8">
                        {milestones.map((milestone, i) => (
                            <div key={i} className="group flex gap-6 lg:gap-12 items-start">
                                <div className="flex-shrink-0 w-16 text-right">
                                    <span className="text-primary font-bold text-sm">{milestone.year}</span>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full border-2 border-primary bg-black mt-1 group-hover:bg-primary transition-all duration-300"></div>
                                    {i < milestones.length - 1 && <div className="w-px h-16 bg-zinc-800 mt-2"></div>}
                                </div>
                                <div className="flex-1 pb-4">
                                    <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">{isFr ? "Prêt à travailler ensemble ?" : "Ready to work together?"}</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        {isFr ? "Que vous vouliez lancer un produit, renforcer une équipe ou faire évoluer votre delivery, nous sommes prêts à vous aider." : "Whether you need to build a product, scale a team, or transform your engineering, we're ready to help."}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium">
                            {isFr ? "Démarrer une discussion" : "Start a conversation"}
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 border border-zinc-700 text-white rounded-xl hover:border-primary hover:text-primary transition-all duration-500 text-sm font-medium">
                            {isFr ? "Voir nos projets" : "View our work"}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
