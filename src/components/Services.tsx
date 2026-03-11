// components/Services.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";

export default function Services() {
  const { t } = useI18n();

  const services = [
    {
      title: "MVP",
      subtitle: "Development",
      description: t.services.items.mvpDescription,
      href: "/services/mvp-development"
    },
    {
      title: "Software",
      subtitle: "Outsourcing",
      description: t.services.items.outsourcingDescription,
      href: "/services/software-outsourcing"
    },
    {
      title: "Staff",
      subtitle: "Augmentation",
      description: t.services.items.augmentationDescription,
      href: "/services/staff-augmentation"
    }
  ];

  return (
    <section id="services" className="relative bg-black py-32 overflow-hidden">
      {/* Grid Overlay - subtle luxury texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/images/grid.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header - bolder */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid - three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Title with bolder typography */}
              <div className="mb-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {service.title}
                  <span className="block text-zinc-400 text-base font-medium tracking-wide mt-2">
                    {service.subtitle}
                  </span>
                </h3>
              </div>
              
              {/* Description - better readability */}
              <p className="text-zinc-300 text-base font-normal leading-relaxed mb-8 max-w-xs">
                {service.description}
              </p>
              
              {/* Minimal divider */}
              <div className="w-12 h-0.5 bg-zinc-700 mb-8 group-hover:w-20 group-hover:bg-primary transition-all duration-700 ease-out"></div>
              
              {/* Understated link */}
              <Link 
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-zinc-300 hover:text-primary transition-colors duration-300 tracking-wide"
              >
                {t.services.explore}
                <span className="ml-2 text-xl group-hover:ml-4 transition-all duration-300">→</span>
              </Link>

              {/* Subtle corner accent on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Refined bottom CTA */}
        <div className="mt-32 text-center">
          <p className="text-sm text-zinc-500 tracking-wide uppercase mb-4">
            {t.services.lookingSpecific}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-zinc-700 text-white hover:border-primary hover:text-primary transition-all duration-500 text-base font-medium"
          >
            {t.services.discussProject}
            <span className="text-xl font-normal">→</span>
          </Link>
        </div>
      </div>

      {/* Refined fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}