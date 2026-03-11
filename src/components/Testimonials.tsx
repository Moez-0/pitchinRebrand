// components/Testimonials.tsx
import Image from "next/image";

const testimonials = [
  {
    quote: "Pitchin didn't just deliver code—they became a true extension of our team. Their ability to understand our vision and translate it into scalable software was remarkable.",
    author: "Jonas Schmidt",
    role: "Founder, TechVision",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    company: "TechVision"
  },
  {
    quote: "The team's dedication to quality and their proactive approach to problem-solving set them apart. They helped us launch our MVP in record time without compromising on quality.",
    author: "Aneliya Ivanova",
    role: "CEO, InnovateLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    company: "InnovateLabs"
  },
  {
    quote: "Working with Pitchin has been transformative for our business. Their expertise in staff augmentation helped us scale rapidly while maintaining exceptional code quality.",
    author: "Marcus Chen",
    role: "CTO, FinScale",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    company: "FinScale"
  }
];

export default function Testimonials() {
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
            Client Testimonials
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            What our partners say about working with us.
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
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary/30 transition-all duration-500">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
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
            Trusted by <span className="text-primary font-medium">10+</span> companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
}