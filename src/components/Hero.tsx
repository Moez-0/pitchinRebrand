// components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Overlay - using your downloaded SVG */}
      <div className="absolute inset-0 z-5 opacity-20 pointer-events-none">
        <Image
          src="/images/grid.svg"
          alt="Grid"
          fill
          className="object-cover"
        />
      </div>

      {/* Spline Globe Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/3dglobe-Q6YzpKUHNc7G4JhzvVCPAF6m/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="3D Globe"
          allow="autoplay; fullscreen; vr"
        />
      </div>

      {/* Subtle gradient at the top for navbar transition - less intense */}
      <div className="absolute inset-x-0 top-0 h-24 z-6 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>

      {/* Primary color gradient overlay - lighter at top, stronger at bottom */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-primary/10 to-primary/30"></div>

      {/* Additional vignette for depth - lighter at top */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_black_80%)] opacity-40"></div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headings */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-white">People-first</span>
            <br />
            <span className="text-primary">Software development</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            We help startups and enterprises build reliable and scalable
            software together with your team.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="#services"
              className="px-6 py-3 bg-transparent border border-gray-700 text-white rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Get a free quote
            </Link>
          </div>

        </div>
      </div>

      {/* Curved black overlay at bottom to hide Spline watermark */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Neon primary color border on top of curve */}
        <div className="absolute top-0 left-0 right-0 h-px bg-primary shadow-[0_0_10px_2px_rgba(168,85,247,0.7)] z-30"></div>

        {/* Main curve with neon border effect */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto relative"
          preserveAspectRatio="none"
        >
          {/* Glow effect behind the curve */}
          <path
            d="M0 40L80 45C160 50 320 60 480 65C640 70 800 70 960 60C1120 50 1280 30 1360 20L1440 10V120H1360C1280 120 1120 120 960 120H800H640H480H320H160H80H0V40Z"
            fill="black"
          />
          {/* Neon top border on the curve itself */}
          <path
            d="M0 40L80 45C160 50 320 60 480 65C640 70 800 70 960 60C1120 50 1280 30 1360 20L1440 10"
            stroke="primary"
            strokeWidth="2"
            className="text-primary"
            style={{
              filter: 'drop-shadow(0 0 8px rgb(168,85,247))',
              stroke: 'currentColor'
            }}
            fill="none"
          />
        </svg>

        {/* Additional solid black bar for extra coverage */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-black"></div>
      </div>

      {/* Bottom fade for smooth transition - adjusted to work with neon border */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-15 pointer-events-none"></div>

      {/* Additional top-to-bottom primary gradient overlay - very subtle at top, stronger at bottom */}
      <div className="absolute inset-0 z-2 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-primary/10"></div>
    </section>
  );
}