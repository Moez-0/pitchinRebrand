// components/DiversePortfolio.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/providers/I18nProvider";

export default function DiversePortfolio() {
  const { t } = useI18n();

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
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            {t.portfolio.title}
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-2xl mx-auto">
            {t.portfolio.description}
          </p>
        </div>
      </div>

      {/* Full-width Earth Image Card */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">
        <div className="group relative max-w-[90vw] mx-auto">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-primary/30 transition-all duration-500">
            {/* Earth Image */}
            <Image
              src="https://cdn.prod.website-files.com/66a1ede9983bf014f570781a/66a2426d06ac708cd2461ea9_Earth.png"
              alt="Digital globe highlighting Europe, parts of Africa and the Middle East with glowing network connection points"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Corner borders */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-16 group-hover:h-16 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Bottom CTA - back in container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mt-16">
          <p className="text-sm text-zinc-500 tracking-wide uppercase mb-4">
            {t.portfolio.ctaLead}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-zinc-700 text-white hover:border-primary hover:text-primary transition-all duration-500 text-base font-medium group"
          >
            {t.portfolio.ctaButton}
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}