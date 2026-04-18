import { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
export const metadata: Metadata = {
    title: "Privacy Policy | Pitchin",
    description: "Privacy policy detailing how Pitchin collects and protects your data.",
    alternates: {
        canonical: absoluteUrl("/legal/privacy"),
    },
};

export default function PrivacyPage() {
    return (
        <div className="bg-black min-h-screen">
            <div className="max-w-3xl mx-auto px-6 py-32 lg:py-40">
                <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">Privacy Policy</h1>
                <p className="text-zinc-500 mb-12">Last Updated: October 2025</p>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <h2>1. Overview</h2>
                    <p>
                        At Pitchin, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard personal data when you visit our website or use our services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                        We may collect the following types of information:
                    </p>
                    <ul>
                        <li><strong>Contact Information:</strong> Name, email address, phone number, and company details provided via contact forms.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with our website, collected via cookies and analytics tools.</li>
                        <li><strong>Project Information:</strong> Details regarding your business and technical requirements shared during discovery.</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>
                        We use your data to:
                    </p>
                    <ul>
                        <li>Respond to your inquiries and provide quotes.</li>
                        <li>Deliver and manage software development services.</li>
                        <li>Improve our website performance and user experience.</li>
                        <li>Send relevant marketing communications (only if you have opted in).</li>
                    </ul>

                    <h2>4. Data Sharing and Transfer</h2>
                    <p>
                        We do not sell your personal data. We may share information with trusted third-party service providers (such as hosting providers or CRM platforms) solely for the purpose of operating our business. All third parties are bound by strict confidentiality agreements.
                    </p>

                    <h2>5. Data Security</h2>
                    <p>
                        We implement industry-standard security measures, including encryption and strict access controls, to protect your personal data from unauthorized access, alteration, or disclosure.
                    </p>

                    <h2>6. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact our data protection officer.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please email <a href="mailto:privacy@pitchin.mobi" className="text-primary hover:underline">privacy@pitchin.mobi</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
