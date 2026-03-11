// app/case-studies/[slug]/client-pdf-button.tsx
"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import type { CaseStudy } from "@/types";

export default function ClientPdfButton({ study }: { study: CaseStudy }) {
    const [downloading, setDownloading] = useState(false);

    const loadLogoAsPngDataUrl = () =>
        new Promise<string>((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext("2d");

                if (!ctx) {
                    reject(new Error("Canvas context unavailable"));
                    return;
                }

                ctx.drawImage(image, 0, 0);
                resolve(canvas.toDataURL("image/png"));
            };
            image.onerror = () => reject(new Error("Unable to load logo"));
            image.src = "/images/logo.svg";
        });

    const handleDownload = async () => {
        setDownloading(true);

        try {
            const pdf = new jsPDF({ unit: "pt", format: "a4" });
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const margin = 48;
            const contentWidth = pageWidth - margin * 2;

            const colors = {
                black: [0, 0, 0] as const,
                surface: [10, 10, 10] as const,
                white: [255, 255, 255] as const,
                primary: [147, 51, 234] as const,
                secondary: [161, 161, 170] as const,
                muted: [113, 113, 122] as const,
                border: [26, 26, 26] as const,
            };

            const safeText = (value: string) =>
                value
                    .replace(/[\u2018\u2019]/g, "'")
                    .replace(/[\u201C\u201D]/g, '"')
                    .replace(/[\u2013\u2014]/g, "-")
                    .replace(/[\u2026]/g, "...")
                    .replace(/[\u00A0]/g, " ");

            let y = margin;

            const ensureSpace = (requiredHeight: number) => {
                if (y + requiredHeight <= pageHeight - margin) return;
                pdf.addPage();
                pdf.setFillColor(...colors.black);
                pdf.rect(0, 0, pageWidth, pageHeight, "F");
                y = margin;
            };

            const drawParagraph = (text: string, fontSize = 12, color = colors.secondary, lineGap = 18) => {
                pdf.setFont("helvetica", "normal");
                pdf.setFontSize(fontSize);
                pdf.setTextColor(...color);
                const lines = pdf.splitTextToSize(safeText(text), contentWidth);
                ensureSpace(lines.length * lineGap + 4);
                pdf.text(lines, margin, y);
                y += lines.length * lineGap + 8;
            };

            const drawSectionTitle = (title: string) => {
                ensureSpace(42);
                pdf.setDrawColor(...colors.primary);
                pdf.setLineWidth(2);
                pdf.line(margin, y, margin + 22, y);
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(15);
                pdf.setTextColor(...colors.white);
                pdf.text(safeText(title), margin + 30, y + 5);
                y += 24;
            };

            const drawLabel = (label: string, value: string) => {
                ensureSpace(26);
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(10);
                pdf.setTextColor(...colors.muted);
                pdf.text(safeText(label.toUpperCase()), margin, y);
                pdf.setFont("helvetica", "normal");
                pdf.setTextColor(...colors.secondary);
                pdf.text(safeText(value), margin + 110, y);
                y += 18;
            };

            pdf.setFillColor(...colors.black);
            pdf.rect(0, 0, pageWidth, pageHeight, "F");

            // Header card
            pdf.setFillColor(...colors.surface);
            pdf.setDrawColor(...colors.border);
            pdf.setLineWidth(1);
            pdf.roundedRect(margin, y, contentWidth, 140, 10, 10, "FD");

            pdf.setFillColor(...colors.primary);
            pdf.rect(margin, y, 6, 140, "F");

            try {
                const logoDataUrl = await loadLogoAsPngDataUrl();
                pdf.addImage(logoDataUrl, "PNG", pageWidth - margin - 88, y + 14, 74, 24);
            } catch {
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(12);
                pdf.setTextColor(...colors.primary);
                pdf.text("pitchin", pageWidth - margin - 50, y + 30, { align: "right" });
            }

            pdf.setFont("helvetica", "bold");
            pdf.setTextColor(...colors.primary);
            pdf.setFontSize(11);
            pdf.text("PITCHIN CASE STUDY", margin + 18, y + 24);

            pdf.setFont("helvetica", "bold");
            pdf.setTextColor(...colors.white);
            pdf.setFontSize(24);
            const titleLines = pdf.splitTextToSize(safeText(study.title), contentWidth - 32);
            pdf.text(titleLines, margin + 18, y + 52);

            pdf.setFont("helvetica", "normal");
            pdf.setTextColor(...colors.secondary);
            pdf.setFontSize(11);
            pdf.text(safeText(`${study.company} • ${study.category}`), margin + 18, y + 120);

            y += 170;

            drawLabel("Tagline", study.tagline);
            drawLabel("Technologies", study.technologies.join(", "));

            y += 8;
            drawSectionTitle("The Challenge");
            drawParagraph(study.challenge);

            drawSectionTitle("The Solution");
            drawParagraph(study.solution);

            drawSectionTitle("The Results");
            drawParagraph(study.results);

            drawSectionTitle("Key Metrics");
            const metricCardWidth = (contentWidth - 12) / 2;
            const metricCardHeight = 70;

            study.metrics.forEach((metric, index) => {
                const col = index % 2;
                const row = Math.floor(index / 2);
                const cardX = margin + col * (metricCardWidth + 12);
                const cardY = y + row * (metricCardHeight + 12);

                ensureSpace(metricCardHeight + 24);
                pdf.setFillColor(...colors.surface);
                pdf.setDrawColor(...colors.border);
                pdf.roundedRect(cardX, cardY, metricCardWidth, metricCardHeight, 8, 8, "FD");
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(18);
                pdf.setTextColor(...colors.primary);
                pdf.text(safeText(metric.value), cardX + 14, cardY + 30);
                pdf.setFont("helvetica", "normal");
                pdf.setFontSize(10);
                pdf.setTextColor(...colors.secondary);
                const metricLabelLines = pdf.splitTextToSize(safeText(metric.label), metricCardWidth - 28);
                pdf.text(metricLabelLines, cardX + 14, cardY + 48);
            });

            y += Math.ceil(study.metrics.length / 2) * (metricCardHeight + 12) + 4;

            if (study.testimonial) {
                drawSectionTitle("Client Feedback");
                ensureSpace(120);
                pdf.setFillColor(...colors.surface);
                pdf.setDrawColor(...colors.primary);
                pdf.roundedRect(margin, y, contentWidth, 100, 10, 10, "FD");

                pdf.setFont("helvetica", "italic");
                pdf.setFontSize(11);
                pdf.setTextColor(...colors.white);
                const quote = `"${safeText(study.testimonial.quote)}"`;
                const quoteLines = pdf.splitTextToSize(quote, contentWidth - 30);
                pdf.text(quoteLines, margin + 14, y + 28);

                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(10);
                pdf.setTextColor(...colors.primary);
                pdf.text(safeText(study.testimonial.author), margin + 14, y + 82);

                pdf.setFont("helvetica", "normal");
                pdf.setTextColor(...colors.secondary);
                pdf.text(safeText(study.testimonial.role), margin + 170, y + 82);

                y += 120;
            }

            // Signature block
            ensureSpace(90);
            y += 8;
            pdf.setDrawColor(...colors.border);
            pdf.line(margin, y, pageWidth - margin, y);
            y += 24;

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(11);
            pdf.setTextColor(...colors.secondary);
            pdf.text("Signed by", margin, y);

            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(16);
            pdf.setTextColor(...colors.white);
            pdf.text("Moez Souidi", margin, y + 22);

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(11);
            pdf.setTextColor(...colors.primary);
            pdf.text("Founder, Pitchin", margin, y + 40);

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(10);
            pdf.setTextColor(...colors.muted);
            pdf.text(`Generated on ${new Date().toLocaleDateString()}`, margin, y + 58);

            const fileName = `${study.slug}-case-study.pdf`;
            pdf.save(fileName);
        } finally {
            setDownloading(false);
        }
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
