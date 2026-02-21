// components/Process.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Join a meeting where we discover your requirements, business goals, and project vision through collaborative workshops.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Proposed Solution",
    description: "We work on your requirements and propose a detailed solution with technical architecture, timeline, and resource planning.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Project Kick-off",
    description: "We gather the required talent, set up development environments, and transform the proposal into actionable sprint plans.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Benefit from comprehensive project management and continuous support throughout your engagement and beyond.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate section header
      gsap.from(".process-header", {
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate timeline line
      gsap.fromTo(timelineRef.current,
        { height: 0 },
        {
          height: "100%",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1.5
          },
          ease: "none"
        }
      );

      // Animate each step
      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const number = step.querySelector('.step-number');
        const title = step.querySelector('.step-title');
        const desc = step.querySelector('.step-description');
        const image = step.querySelector('.step-image');

        // Create timeline for each step
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse"
          }
        });

        tl.fromTo(number,
          { 
            scale: 0.8, 
            opacity: 0,
            color: "#3f3f46"
          },
          {
            scale: 1,
            opacity: 1,
            color: "primary",
            duration: 0.6,
            ease: "back.out(1.2)"
          }
        )
        .fromTo(title,
          { x: index % 2 === 0 ? -30 : 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(desc,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(image,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.6"
        );

        // Animate corner borders on hover
        step.addEventListener('mouseenter', () => {
          gsap.to(step.querySelectorAll('.corner-border'), {
            width: 40,
            height: 40,
            opacity: 0.3,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        step.addEventListener('mouseleave', () => {
          gsap.to(step.querySelectorAll('.corner-border'), {
            width: 0,
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          });
        });
      });

      // Animate CTA card
      gsap.from(ctaCardRef.current, {
        scrollTrigger: {
          trigger: ctaCardRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-32 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/images/grid.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="process-header mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 tracking-tight">
            Our Process
          </h2>
          <p className="text-base text-zinc-400 font-normal max-w-xl">
            Human-first product teams supporting you from MVP to enterprise scale.
          </p>
        </div>

        {/* Process Steps with Boxes */}
        <div className="relative">
          {/* Timeline Line - using primary color */}
          <div 
            ref={timelineRef}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-primary/30"
            style={{ height: 0 }}
          ></div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepsRef.current[index] = el; }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-stretch`}
              >
                {/* Timeline Dot - primary color */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full z-10 shadow-lg shadow-primary/50">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content Box */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} md:px-12`}>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 hover:border-primary/30 transition-colors duration-500 relative group">
                    {/* Corner borders - primary color on hover */}
                    <div className="corner-border absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                    <div className="corner-border absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                    <div className="corner-border absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                    <div className="corner-border absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>

                    <span className="step-number text-7xl font-bold text-zinc-700 mb-4 block group-hover:text-primary transition-colors duration-500">
                      {step.number}
                    </span>
                    <h3 className="step-title text-2xl md:text-3xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="step-description text-zinc-400 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image Box */}
                <div className="flex-1">
                  <div className="step-image relative aspect-video rounded-xl overflow-hidden group border border-zinc-800 hover:border-primary/30 transition-colors duration-500">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-60"></div>
                    
                    {/* Corner borders for image */}
                    <div className="corner-border absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                    <div className="corner-border absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                    <div className="corner-border absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                    <div className="corner-border absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card - with lines.svg background */}
        <div 
          ref={ctaCardRef}
          className="relative max-w-3xl mx-auto mt-24 border border-zinc-800 rounded-2xl p-12 md:p-16 text-center overflow-hidden group"
        >
          {/* Lines SVG Background */}
          <div className="absolute inset-0 z-0  pointer-events-none">
            <Image 
              src="/images/lines.svg"
              alt=""
              fill
                
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-align-center">
              <div className="max-w-large mx-auto">
                <div className="margin-bottom margin-small mb-4">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white group-hover:text-primary transition-colors duration-500">
                    Build with a team you can trust.
                  </h3>
                </div>
                <p className="text-size-medium text-zinc-400 text-lg">
                  Human-first product teams supporting you from MVP to enterprise scale.
                </p>
              </div>
            </div>
            <div className="margin-top margin-medium mt-8">
              <div className="button-group is-center flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all duration-500 text-base font-medium group/btn"
                >
                  Start a conversation
                  <span className="text-xl group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Corner borders for CTA card - primary color on hover */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
        </div>

      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}