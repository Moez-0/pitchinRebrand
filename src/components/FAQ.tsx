// components/FAQ.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = t.faq.items;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/images/grid.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Header & CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
                {t.faq.title}
              </h2>
              <p className="text-base text-zinc-400 font-normal mb-8 max-w-sm">
                {t.faq.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-zinc-700 text-white hover:border-primary hover:text-primary transition-all duration-500 text-sm font-medium group"
              >
                {t.faq.cta}
                <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-primary/30 transition-all duration-500"
                >
                  {/* Corner borders */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>

                  {/* FAQ Item */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                  >
                    <span className="text-white font-medium text-base pr-8">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 mt-1">
                      {openIndex === index ? (
                        <X className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors duration-300" />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-zinc-800">
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}