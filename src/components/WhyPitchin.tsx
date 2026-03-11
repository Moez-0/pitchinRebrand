// components/WhyPitchin.tsx
"use client";

import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";

export default function WhyPitchin() {
  const { t } = useI18n();

  const metrics = [
    {
      value: "98%",
      label: t.whyPitchin.metrics.satisfactionLabel,
      description: t.whyPitchin.metrics.satisfactionDescription
    },
    {
      value: "10+",
      label: t.whyPitchin.metrics.projectsLabel,
      description: t.whyPitchin.metrics.projectsDescription
    },
    {
      value: "8",
      label: t.whyPitchin.metrics.partnersLabel,
      description: t.whyPitchin.metrics.partnersDescription
    },
    {
      value: "3x",
      label: t.whyPitchin.metrics.speedLabel,
      description: t.whyPitchin.metrics.speedDescription
    }
  ];

  const growthData = t.whyPitchin.months.map((month, index) => ({ month, growth: [40, 55, 48, 62, 78, 85][index] }));

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
            {t.whyPitchin.title}
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            {t.whyPitchin.description}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-primary/30 transition-all duration-500"
            >
              {/* Corner borders */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>

              <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
              <p className="text-sm text-zinc-500">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Analytics Graph */}
        <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mb-16 hover:border-primary/30 transition-all duration-500">
          {/* Corner borders */}
          <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
          <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 group-hover:w-12 group-hover:h-12 transition-all duration-500"></div>

          <h3 className="text-xl font-semibold text-white mb-6">{t.whyPitchin.growthTitle}</h3>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between h-64 gap-2">
            {growthData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center group/chart">
                <div className="w-full relative mb-2">
                  <div
                    className="w-full bg-primary/20 rounded-t-lg transition-all duration-500 group-hover/chart:bg-primary/30"
                    style={{ height: `${item.growth}px` }}
                  >
                    <div
                      className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-500"
                      style={{ height: `${item.growth}px` }}
                    ></div>
                  </div>
                </div>
                <span className="text-xs text-zinc-500">{item.month}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-zinc-400 text-center border-t border-zinc-800 pt-4">
            {t.whyPitchin.growthCaption.includes("+50%") ? (
              <>
                <span className="text-primary font-medium">+50%</span>{" "}
                {t.whyPitchin.growthCaption.replace("+50% ", "")}
              </>
            ) : t.whyPitchin.growthCaption}
          </div>
        </div>
      </div>
    </section>
  );
}