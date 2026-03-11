// components/Testimonials.tsx
"use client";

import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Testimonials() {
  const { t } = useI18n();

  const testimonials = [
    {
      quote: t.testimonials.entries.rpsQuote,
      author: "Yassine Trabelsi",
      role: "Operations Manager, RPS Solar",
      image: "",
      company: "RPS Solar"
    },
    {
      quote: t.testimonials.entries.educationQuote,
      author: "Imen Ben Amor",
      role: "Director, Réussite Plus",
      image: "",
      company: "Réussite Plus"
    },
    {
      quote: t.testimonials.entries.clinicQuote,
      author: "Dr. Ahmed Gharbi",
      role: "Medical Director, Clinique Carthage",
      image: "",
      company: "Clinique Carthage"
    }
  ];

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
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>

              {/* Quote Icon */}
              <div className="text-4xl text-primary/20 mb-4">"</div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-zinc-700 group-hover:border-primary/30 transition-all duration-500 bg-zinc-800 text-zinc-200 flex items-center justify-center text-sm font-semibold">
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.author}</h4>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                  <p className="text-primary/70 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Line */}
        <div className="mt-16 text-center border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-400">
            {t.testimonials.trustedBy.includes("20+") ? (
              <>
                {t.testimonials.trustedBy.split("20+")[0]}
                <span className="text-primary font-medium">20+</span>
                {t.testimonials.trustedBy.split("20+")[1]}
              </>
            ) : t.testimonials.trustedBy}
          </p>
        </div>
      </div>
    </section>
  );
}