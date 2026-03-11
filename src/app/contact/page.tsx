// app/contact/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { getServerLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
    title: "Contact Us | Pitchin",
    description: "Get in touch with Pitchin. Let's discuss your project and get you a free quote.",
    alternates: {
        canonical: "/contact",
    },
};

export default async function ContactPage() {
    const locale = await getServerLocale();
    const isFr = locale === "fr";

    const contactInfo = [
        {
            icon: Mail,
            label: isFr ? "Email" : "Email",
            value: "contact@pitchin.mobi",
            href: "mailto:contact@pitchin.mobi",
        },
        {
            icon: MapPin,
            label: isFr ? "Équipe" : "Office",
            value: isFr ? "Équipe remote-first · fuseau Europe" : "Remote-first team · EU timezone",
            href: "#",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/company/pitchin-mobi",
            href: "https://www.linkedin.com/company/pitchin-mobi",
        },
    ];

    const promises = isFr
        ? ["Contact par email uniquement pour le moment", "Réponse sous 24 heures", "Sans engagement"]
        : ["Email-only contact for now", "Response within 24 hours", "No commitment required"];

    const checklist = isFr
        ? [
              "Nom de l'entreprise et site web (si disponible)",
              "Résumé rapide du projet",
              "Objectifs principaux et résultat attendu",
              "Fourchette de budget",
              "Planning ou date de lancement souhaitée",
              "Liens de référence ou captures d'écran",
          ]
        : [
              "Company name and website (if available)",
              "Short project summary",
              "Main goals and expected outcome",
              "Budget range",
              "Expected timeline or launch date",
              "Any reference links or screenshots",
          ];

    return (
        <div className="relative bg-black min-h-screen">
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <Image src="/images/grid.svg" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                <div className="mb-16">
                    <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">
                        {isFr ? "Contact" : "Get in touch"}
                    </p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6">
                        {isFr ? "Construisons quelque chose" : "Let's build something"}
                        <br />
                        <span className="text-primary">{isFr ? "de solide ensemble" : "great together"}</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl">
                        {isFr ? "Nous gérons les demandes par email uniquement pour l'instant. Envoyez les détails de votre projet et nous reviendrons vers vous avec la suite." : "We currently handle inquiries by email only. Send your project details and we'll reply with next steps."}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-4 space-y-10">
                        <div className="space-y-6">
                            {contactInfo.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="group flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-all duration-300">
                                            <Icon className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{item.label}</p>
                                            <p className="text-white text-sm font-medium group-hover:text-primary transition-colors duration-300">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="h-px bg-zinc-800"></div>

                        <div className="space-y-4">
                            {promises.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                    <span className="text-zinc-400 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/20 transition-all duration-500">
                            <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-tl-2xl"></div>
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-tr-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-bl-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-br-2xl"></div>

                            <h2 className="text-2xl font-semibold text-white mb-3">{isFr ? "Comment nous contacter" : "How to contact us"}</h2>
                            <p className="text-zinc-400 text-sm mb-8">
                                {isFr ? "Envoyez un email à " : "Send one email to "}
                                <a href="mailto:contact@pitchin.mobi" className="text-primary hover:underline">contact@pitchin.mobi</a>
                                {isFr ? " avec les éléments ci-dessous." : " with the details below."}
                            </p>

                            <div className="space-y-4 mb-8">
                                {checklist.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                        <p className="text-zinc-300 text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={isFr ? "mailto:contact@pitchin.mobi?subject=Demande%20de%20projet" : "mailto:contact@pitchin.mobi?subject=Project%20Inquiry"}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                            >
                                {isFr ? "Envoyer un email à Pitchin" : "Email Pitchin"}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
