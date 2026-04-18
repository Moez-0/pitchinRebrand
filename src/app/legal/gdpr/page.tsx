import { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
export const metadata: Metadata = {
    title: "GDPR Compliance | Pitchin",
    description: "Information regarding Pitchin's compliance with the General Data Protection Regulation.",
    alternates: {
        canonical: absoluteUrl("/legal/gdpr"),
    },
};

export default function GDPRPage() {
    return (
        <div className="bg-black min-h-screen">
            <div className="max-w-3xl mx-auto px-6 py-32 lg:py-40">
                <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">GDPR Compliance</h1>
                <p className="text-zinc-500 mb-12">Last Updated: October 2025</p>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <h2>1. Our Commitment</h2>
                    <p>
                        Pitchin is fully committed to compliance with the General Data Protection Regulation (GDPR) for all EU residents. We believe in the fundamental right to digital privacy and have built our processes around the principles of data minimization, transparency, and security.
                    </p>

                    <h2>2. Data Controller vs. Data Processor</h2>
                    <p>
                        <strong>As a Data Controller:</strong> When you submit a contact form on our website or apply for a job, Pitchin acts as the Data Controller. We decide how and why that data is processed.
                    </p>
                    <p>
                        <strong>As a Data Processor:</strong> When we build software for your business, we typically act as a Data Processor. We process data on your behalf according to your strict instructions as detailed in the Data Processing Agreement (DPA).
                    </p>

                    <h2>3. Lawful Basis for Processing</h2>
                    <p>
                        Under GDPR, we process data based on:
                    </p>
                    <ul>
                        <li><strong>Consent:</strong> When you explicitly opt-in to newsletters or analytics.</li>
                        <li><strong>Contract:</strong> When processing is necessary to fulfill a service contract or provide a quote.</li>
                        <li><strong>Legitimate Interest:</strong> For security monitoring and preventing fraud.</li>
                    </ul>

                    <h2>4. Subject Access Requests (SAR)</h2>
                    <p>
                        EU citizens have the right to request a copy of the personal data we hold about them. To make a SAR, please email our Data Protection Officer. We will respond within 30 days free of charge.
                    </p>

                    <h2>5. Right to Erasure ("Right to be Forgotten")</h2>
                    <p>
                        You may request the permanent deletion of your personal data at any time. Except where we are legally obligated to retain certain records (e.g., for tax purposes), we will securely delete your data from our active systems and backups.
                    </p>

                    <h2>6. Data Protection Officer</h2>
                    <p>
                        We have appointed a Data Protection Officer (DPO) to oversee compliance. You can reach the DPO directly at <a href="mailto:dpo@pitchin.mobi" className="text-primary hover:underline">dpo@pitchin.mobi</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
