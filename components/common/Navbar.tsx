"use client";
import {
  Phone,
  CheckCircle,
  ThumbsUp,
  ShieldCheck,
  Menu,
  Facebook,
  Instagram,
  X,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-white shadow-sm border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/roof-cleaning.png"
                alt="Professional Roof Cleaning Services"
                width={220}
                height={150}
                className="object-contain h-18 w-auto"
              />
            </div>

            {/* Center Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all group ${
                    pathname === link.href
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                      pathname === link.href
                        ? "w-full bg-blue-700"
                        : "w-0 bg-blue-700 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* Right section */}
            <div className="hidden md:flex items-center gap-4">
              {/* Trustpilot + Social */}
              <div className="flex items-center gap-2 sm:gap-3 border-r pr-2 sm:pr-4 border-gray-200">
                <img
                  src="/trustpilot-logo.png"
                  alt="Trustpilot"
                  width={220}
                  height={150}
                  className="object-contain h-18 sm:h-12 w-auto"
                />
                <div className="flex gap-2 sm:gap-2.5">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    <Facebook size={16} className="sm:size-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-blue-700 hover:text-pink-600 transition"
                  >
                    <Instagram size={16} className="sm:size-4" />
                  </a>
                </div>
              </div>

              {/* Phone Button */}
              <div className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors px-3 py-2 rounded-md shadow-sm">
                <Phone size={16} className="text-white" />
                <span className="text-xs font-medium text-white whitespace-nowrap">
                  02 1234 5678
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-blue-700 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Side panel style */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Side panel */}
            <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Panel header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                  <img
                    src="/roof-cleaning.png"
                    alt="Professional Roof Cleaning Services"
                    width={160}
                    height={50}
                    className="object-contain h-10 w-auto"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-3 rounded-md text-base font-medium ${
                        pathname === link.href
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Bottom section */}
                <div className="px-4 py-4 border-t border-gray-200 space-y-4">
                  {/* Phone Section */}
                  <div className="flex items-center gap-3 bg-blue-700 p-3 rounded-md">
                    <Phone size={18} className="text-white" />
                    <div>
                      <div className="text-xs text-blue-100">
                        Call for a free quote
                      </div>
                      <div className="text-sm font-semibold text-white">
                        02 1234 5678
                      </div>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex justify-center gap-6 py-2">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="text-blue-700 hover:text-pink-600"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>

                  {/* Trustpilot Logo */}
                  <div className="flex justify-center pt-2">
                    <img
                      src="/trustpilot-logo.png"
                      alt="Trustpilot"
                      width={100}
                      height={24}
                      className="object-contain h-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feature Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white text-xs py-2.5 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-0 justify-items-center">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-blue-300" />
              <span>Fixed Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-blue-300" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp size={14} className="text-blue-300" />
              <span>Local Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-blue-300" />
              <span>Top Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
