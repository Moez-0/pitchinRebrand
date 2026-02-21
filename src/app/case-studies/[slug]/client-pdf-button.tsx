// app/case-studies/[slug]/client-pdf-button.tsx
"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export default function ClientPdfButton({ title }: { title: string }) {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        // Simulate generation delay
        setTimeout(() => {
            alert(`Simulated PDF download for: ${title}\n(In a real environment, this would generate and serve a PDF file via jsPDF or a backend API.)`);
            setDownloading(false);
        }, 1500);
    };

    return (
        <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-white rounded-xl hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium disabled:opacity-50"
        >
            <Download className="w-4 h-4" />
            {downloading ? "Generating PDF..." : "Download as PDF"}
        </button>
    );
}
