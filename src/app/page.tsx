import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import WhyPitchin from "@/components/WhyPitchin";
import Testimonials from "@/components/Testimonials";
import DiversePortfolio from "@/components/DiversePortfolio";
import FAQ from "@/components/FAQ";

import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pitchin | Build Fast, Scale Smart",
  description:
    "Software development and digital marketing agency for startups and enterprises. Build MVPs, scale products, and grow organic traffic.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <div>

      <Hero />
      {/* Services Section */}
      <Services />
      {/* Case Studies Section */}  
      <CaseStudies />
      {/* Process Section */}
      <Process />
      {/* Tech Stack Section */}
      <TechStack />
      {/* Why Pitchin Section */} 
      <WhyPitchin />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Diverse Portfolio Section */}
      <DiversePortfolio />
      {/* FAQ Section */}
      <FAQ />
    </div>

  );
}
