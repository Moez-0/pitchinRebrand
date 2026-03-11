// components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/providers/I18nProvider";

export default function Navbar() {
  const { t } = useI18n();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuLinks = [
    { name: t.nav.services, href: "/services", hasDropdown: true },
    { name: t.nav.caseStudies, href: "/case-studies" },
    { name: t.nav.aboutUs, href: "/about" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.careers, href: "/careers" },
  ];

  const serviceItems = [
    { name: t.nav.serviceItems.webDevelopment, href: "/services/web-development" },
    { name: t.nav.serviceItems.mobileDevelopment, href: "/services/mobile-development" },
    { name: t.nav.serviceItems.digitalMarketing, href: "/services/digital-marketing" },
    { name: t.nav.serviceItems.branding, href: "/services/branding" },
    { name: t.nav.serviceItems.uiuxDesign, href: "/services/ui-ux-design" },
    { name: t.nav.serviceItems.cloudServices, href: "/services/cloud-services" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Handle click on Services link
  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(prev => !prev);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the dropdown and the button
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesOpen]);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header
            className={`nav-floating border border-white/10 bg-[#0b0b0b]/60 backdrop-blur-xl rounded-2xl transition-all duration-300 ${scrolled ? 'shadow-[0_10px_40px_rgba(0,0,0,0.35)]' : ''}`}
          >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Pitchin Logo"
              width={100}
              height={100}
              className="mr-2 sm:w-[120px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
              >
                {link.hasDropdown ? (
                  <button
                    ref={buttonRef}
                    onClick={handleServicesClick}
                    className="text-white hover:text-primary transition-colors text-sm font-medium tracking-wide flex items-center gap-1 cursor-pointer"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {t.nav.getInTouch}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
          </header>

        {/* Desktop Services Dropdown */}
        <div
          ref={dropdownRef}
          className={`absolute left-0 top-full mt-2 w-full transition-all duration-300 ${servicesOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
        >
          <div className="max-w-6xl mx-auto py-8 lg:py-12 px-4 sm:px-6 border border-white/10 bg-[#0b0b0b]/60 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {serviceItems.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  <h3 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors text-sm sm:text-base">
                    {service.name}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
              <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-zinc-400 text-xs sm:text-sm">
                {t.nav.lookingSpecific}
              </p>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                {t.nav.viewAllServices} →
              </Link>
            </div>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${mobileMenuOpen
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-full"
          }`}
        style={{ top: "80px" }}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-2">
            <div className="flex flex-col p-6 space-y-4 border border-white/10 bg-[#0b0b0b]/60 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            {/* Mobile Menu Links */}
            {menuLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10 pb-2">
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="text-white hover:text-primary transition-colors text-base font-medium tracking-wide w-full flex items-center justify-between py-2"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Mobile Services Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[800px] mt-2" : "max-h-0"
                        }`}
                    >
                      <div className="space-y-3 pl-4">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-zinc-300 hover:text-primary transition-colors text-sm py-2"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block text-primary hover:text-primary/80 transition-colors text-sm font-medium py-2 mt-2 border-t border-white/10 pt-3"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          {t.nav.viewAllServices} →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary transition-colors text-base font-medium tracking-wide block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-2">
              <LanguageSwitcher />
            </div>

            {/* Mobile Get in Touch Button */}
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm font-medium text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.getInTouch}
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}