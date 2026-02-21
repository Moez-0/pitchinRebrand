// components/CaseStudies.tsx
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";

export default function CaseStudies() {
  const featured = caseStudies.slice(0, 4);

  return (
    <section id="case-studies" className="relative bg-black py-32 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image src="/images/grid.svg" alt="" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs text-primary font-medium tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
              Case Studies
            </h2>
            <p className="text-base text-zinc-400 font-normal max-w-xl">
              Real results for real businesses. See how we&apos;ve helped our clients succeed.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center text-sm font-medium text-zinc-300 hover:text-primary transition-colors duration-300 mt-4 md:mt-0"
          >
            View all cases
            <span className="ml-2 text-xl">→</span>
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featured.map((study, index) => (
            <Link
              key={index}
              href={`/case-studies/${study.slug}`}
              className="group relative bg-zinc-900/30 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={study.heroImage}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800">
                    <span className="text-xs text-primary font-medium tracking-wider">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Company */}
                <div className="text-xs text-zinc-500 font-medium tracking-wider uppercase mb-3">
                  {study.company}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {study.title}
                </h3>

                {/* Metrics Row */}
                <div className="flex items-center gap-6 mb-5">
                  {study.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-xl font-bold text-primary">{m.value}</div>
                      <div className="text-xs text-zinc-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="inline-flex items-center text-sm font-medium text-zinc-400 group-hover:text-primary transition-colors duration-300">
                  Read case study
                  <span className="ml-2 text-lg group-hover:ml-4 transition-all duration-300">→</span>
                </div>
              </div>

              {/* Hover corner accents */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="md:hidden text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-zinc-300 hover:text-primary transition-colors duration-300"
          >
            View all case studies
            <span className="ml-2 text-xl">→</span>
          </Link>
        </div>
      </div>

      {/* Refined fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}