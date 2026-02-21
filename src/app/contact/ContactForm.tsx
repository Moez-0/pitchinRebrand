"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const projectTypes = [
    "MVP Development",
    "Software Outsourcing",
    "Staff Augmentation",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Branding",
    "Cloud Services",
    "Other",
];

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate form submission
        await new Promise((r) => setTimeout(r, 1500));
        setStatus("sent");
    };

    const inputClass =
        "w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-primary transition-colors duration-300";

    if (status === "sent") {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                    <Send className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Message received!</h3>
                <p className="text-zinc-400 text-sm max-w-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours with next steps.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-wider mb-2">
                        Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-wider mb-2">
                        Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-wider mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-wider mb-2">
                        Project Type <span className="text-primary">*</span>
                    </label>
                    <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className={`${inputClass} appearance-none cursor-pointer`}
                    >
                        <option value="" disabled>Select a service…</option>
                        {projectTypes.map((t) => (
                            <option key={t} value={t} className="bg-zinc-900">
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs text-zinc-400 uppercase tracking-wider mb-2">
                    Tell us about your project <span className="text-primary">*</span>
                </label>
                <textarea
                    required
                    rows={6}
                    placeholder="Describe your project, goals, timeline, and any specific requirements…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "sending" ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
