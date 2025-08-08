import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: "Roof Cleaning", href: "/services#cleaning" },
    { name: "Roof Restoration", href: "/services#restoration" },
    { name: "Moss Removal", href: "/services#moss" },
    { name: "Roof Sealing", href: "/services#sealing" },
    { name: "Gutter Cleaning", href: "/services#gutter" },
  ];

  const areas = [
    "Eastern Suburbs",
    "Northern Beaches",
    "Inner West",
    "North Shore",
    "Western Sydney",
    "Sutherland Shire",
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <img
              src="/roof-cleaning.png"
              alt="Sydney Roof Cleaning"
              width={180}
              height={60}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">
              Professional roof cleaning and restoration services across Sydney. 
              We're your local experts with over 10 years experience.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-300 hover:text-white text-sm transition">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-gray-300 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">02 1234 5678</p>
                  <p className="text-xs text-gray-400">Mon-Sat: 8am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">info@sydneyroofcleaning.com.au</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">Sydney, NSW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sydney Roof Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}