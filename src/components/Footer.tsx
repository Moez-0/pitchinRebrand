// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const footerLinks = {
  discover: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ],
  resources: [
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "Staff Augmentation", href: "/services/staff-augmentation" },
    { name: "Software Outsourcing", href: "/services/software-outsourcing" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" }
  ],
  legal: [
    { name: "Terms & Conditions", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "GDPR", href: "/legal/gdpr" }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-800 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <Image
          src="/images/grid.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.svg"
                alt="Pitchin Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
              People-first software development. We help startups and enterprises build reliable and scalable software together with your team.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/pitchin-mobi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:contact@pitchin.mobi"
                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Discover
            </h3>
            <ul className="space-y-4">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@pitchin.mobi"
                  className="text-zinc-400 hover:text-primary text-sm transition-colors duration-300"
                >
                  contact@pitchin.mobi
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@pitchin.mobi"
                  className="text-zinc-400 hover:text-primary text-sm transition-colors duration-300"
                >
                  careers@pitchin.mobi
                </a>
              </li>
              <li className="pt-4">
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
                  Legal
                </h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-primary text-xs transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Pitchin. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/terms" className="text-zinc-600 hover:text-primary text-xs transition-colors duration-300">
              Terms
            </Link>
            <Link href="/legal/privacy" className="text-zinc-600 hover:text-primary text-xs transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/legal/gdpr" className="text-zinc-600 hover:text-primary text-xs transition-colors duration-300">
              GDPR
            </Link>
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </footer>
  );
}