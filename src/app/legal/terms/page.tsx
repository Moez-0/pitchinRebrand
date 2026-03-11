import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Pitchin",
    description: "Terms and conditions for Pitchin software development services.",
    alternates: {
        canonical: "/legal/terms",
    },
};

export default function TermsPage() {
    return (
        <div className="bg-black min-h-screen">
            <div className="max-w-3xl mx-auto px-6 py-32 lg:py-40">
                <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">Terms & Conditions</h1>
                <p className="text-zinc-500 mb-12">Last Updated: October 2025</p>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Pitchin. These Terms and Conditions govern your use of our website and services. By engaging with Pitchin for software development, design, or consulting services, you agree to these terms in full.
                    </p>

                    <h2>2. Services</h2>
                    <p>
                        Pitchin provides Custom Software Development, Staff Augmentation, MVP Development, UI/UX Design, and Digital Marketing services. The specific scope, deliverables, and timeline of any project will be outlined in a separate Statement of Work (SOW) or Master Services Agreement (MSA).
                    </p>

                    <h2>3. Intellectual Property</h2>
                    <p>
                        Upon full payment for the services rendered, all source code, design assets, and intellectual property uniquely created for your project will be transferred to you, unless otherwise specified in your specific MSA. Pitchin retains the right to use abstracted, non-confidential components and patterns in future work.
                    </p>

                    <h2>4. Confidentiality</h2>
                    <p>
                        We take confidentiality seriously. Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business. A specific Non-Disclosure Agreement (NDA) will be signed before the exchange of sensitive information.
                    </p>

                    <h2>5. Payment Terms</h2>
                    <p>
                        Invoices are due within 14 days of receipt unless otherwise stated in your contract. Late payments may result in the suspension of services. We reserve the right to charge interest on late payments at the maximum rate permitted by law.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        Pitchin shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Our total liability shall not exceed the total amount paid by you for the specific service in question during the six months preceding the claim.
                    </p>

                    <h2>7. Contact Information</h2>
                    <p>
                        For any questions regarding these terms, please contact us at <a href="mailto:legal@pitchin.mobi" className="text-primary hover:underline">legal@pitchin.mobi</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
