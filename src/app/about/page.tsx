// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types";
import { User } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Pitchin",
    description: "Meet the Pitchin team — a remote-first collective of engineers, designers, and strategists building people-first software.",
};

const team: TeamMember[] = [
    {
        name: "Moez Souidi",
        role: "Founder & CEO",
        image: "",
        bio: "Software Engineering Graduate with 5+ years of experience in software development. Passionate about building high-quality, scalable, and maintainable software.",
        linkedin: "https://www.linkedin.com/company/pitchin-mobi",
    },
];

const values = [
    {
        icon: "",
        title: "People First",
        description: "We build software with teams, not for them. Every decision is made with humans at the center.",
    },
    {
        icon: "",
        title: "Radical Transparency",
        description: "No surprises. Weekly status reports, honest estimates, and open communication at every stage.",
    },
    {
        icon: "",
        title: "Quality at Speed",
        description: "We believe fast and well-made aren't opposites. Our processes are built for both without compromise.",
    },
    {
        icon: "",
        title: "Long-term Thinking",
        description: "We optimize for long-term partnerships, not one-off engagements. Your success is our success.",
    },
];

const milestones = [
    { year: "2024", title: "Founded", description: "Started with a simple belief: software development can be more human." },
    { year: "2025", title: "First 10 Clients", description: "First enterprise client signed — a FinTech startup that went on to raise $20M." },
    { year: "2026", title: "The Future", description: "Expanding into AI-assisted development and building our own suite of developer tools." },
];

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="relative py-28 lg:py-36 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-4">About Pitchin</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-tight">
                            We build software the way
                            <br />
                            <span className="text-primary">it should be built.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                            Pitchin is a people-first software development agency. We partner with startups and enterprises as a true extension of their team — not just a vendor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="relative py-20 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-4">Our Mission</p>
                            <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">
                                Technology that serves people, not the other way around.
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                We started Pitchin because we were frustrated with how software development was done. Agencies that treated clients as tickets. Developers who shipped code without understanding the business. Projects that delivered technically but failed commercially.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                So we built the agency we always wanted to work with. One where your engineering team feels like your engineering team — because they are.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "150+", label: "Projects Delivered" },
                                { value: "12+", label: "Countries" },
                                { value: "98%", label: "Client Satisfaction" },
                                { value: "12+", label: "Team Members" },
                            ].map((stat, i) => (
                                <div key={i} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/30 transition-all duration-500">
                                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-zinc-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">What We Stand For</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">Our values</h2>
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

            {/* Team */}
            <section className="relative py-24 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">The People</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">Meet the leadership</h2>
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

            {/* Timeline */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <Image src="/images/grid.svg" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mb-12">
                        <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">Our Story</p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">Company milestones</h2>
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

            {/* CTA */}
            <section className="py-24 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-semibold text-white mb-4">Ready to work together?</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        Whether you need to build a product, scale a team, or transform your engineering, we&apos;re ready to help.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium">
                            Start a conversation
                        </Link>
                        <Link href="/case-studies" className="px-8 py-4 border border-zinc-700 text-white rounded-xl hover:border-primary hover:text-primary transition-all duration-500 text-sm font-medium">
                            View our work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
