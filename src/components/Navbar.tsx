// components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuLinks = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  const serviceItems = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Branding", href: "/services/branding" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Cloud Services", href: "/services/cloud-services" },
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
      <header
        className={`w-full fixed top-0 z-50 h-20 flex items-center transition-all duration-300 ${scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-zinc-800/50'
          : 'bg-black border-b border-zinc-800'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6 w-full">
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

          {/* Desktop Get in Touch Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-colors text-sm font-medium flex-shrink-0"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Services Dropdown */}
        <div
          ref={dropdownRef}
          className={`absolute left-0 top-20 w-full bg-background/95 backdrop-blur-lg shadow-xl transition-all duration-300 ${servicesOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
            }`}
        >
          <div className="max-w-7xl mx-auto py-8 lg:py-12 px-4 sm:px-6">
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
            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-zinc-400 text-xs sm:text-sm">
                Looking for something specific? We've got you covered.
              </p>
              <Link
                href="/services"
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                onClick={() => setServicesOpen(false)}
              >
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-300 md:hidden ${mobileMenuOpen
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-full"
          }`}
        style={{ top: "80px" }}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="flex flex-col p-6 space-y-4">
            {/* Mobile Menu Links */}
            {menuLinks.map((link) => (
              <div key={link.name} className="border-b border-zinc-800 pb-2">
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
                          className="block text-primary hover:text-primary/80 transition-colors text-sm font-medium py-2 mt-2 border-t border-zinc-800 pt-3"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        >
                          View All Services →
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

            {/* Mobile Get in Touch Button */}
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm font-medium text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}