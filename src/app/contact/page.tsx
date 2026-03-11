// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Pitchin",
    description: "Get in touch with Pitchin. Let's discuss your project and get you a free quote.",
    alternates: {
        canonical: "/contact",
    },
};

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "contact@pitchin.mobi",
        href: "mailto:contact@pitchin.mobi",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+216 96 154 061",
        href: "tel:+21696154061",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Remote-first team · EU timezone",
        href: "#",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/company/pitchin-mobi",
        href: "https://www.linkedin.com/company/pitchin-mobi",
    },
];

export default function ContactPage() {
    return (
        <div className="relative bg-black min-h-screen">
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <Image src="/images/grid.svg" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                {/* Page Header */}
                <div className="mb-16">
                    <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">
                        Get in touch
                    </p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6">
                        Let&apos;s build something
                        <br />
                        <span className="text-primary">great together</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-xl">
                        Tell us about your project. We&apos;ll come back to you within 24 hours with a tailored proposal.
                    </p>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left — Contact Info */}
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

                        {/* Divider */}
                        <div className="h-px bg-zinc-800"></div>

                        {/* Quick promise */}
                        <div className="space-y-4">
                            {["Free initial consultation", "Response within 24 hours", "No commitment required"].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                    <span className="text-zinc-400 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-primary/20 transition-all duration-500">
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-tl-2xl"></div>
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-tr-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-bl-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-700 rounded-br-2xl"></div>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
