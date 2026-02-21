// components/WhyPitchin.tsx
import Image from "next/image";
import Link from "next/link";

const metrics = [
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys"
  },
  {
    value: "10+",
    label: "Projects Delivered",
    description: "Across 3 countries"
  },
  {
    value: "8",
    label: "Long-term Partners",
    description: "Clients who continue collaborating"
  },
  {
    value: "3x",
    label: "Faster Time-to-Market",
    description: "Compared to in-house development"
  }
];

const growthData = [
  { month: "Jan", growth: 40 },
  { month: "Feb", growth: 55 },
  { month: "Mar", growth: 48 },
  { month: "Apr", growth: 62 },
  { month: "May", growth: 78 },
  { month: "Jun", growth: 85 }
];

export default function WhyPitchin() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            Why Pitchin
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            Data-driven results that speak for themselves.
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

          <h3 className="text-xl font-semibold text-white mb-6">Client Growth Trajectory</h3>

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
            <span className="text-primary font-medium">+50%</span> average client growth within 6 months
          </div>
        </div>
      </div>
    </section>
  );
}