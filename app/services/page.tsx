"use client";
import { CheckCircle, ShieldCheck, ThumbsUp, Star } from 'lucide-react';
import Link from 'next/link';

// export const metadata = {
//   title: "Professional Roof Cleaning Services in Sydney",
//   description: "Sydney's trusted roof cleaning company offering roof restoration, high pressure cleaning, moss removal, and protective sealing services.",
// }

const services = [
  {
    title: "Roof Cleaning",
    description: "Professional roof cleaning to remove dirt, moss, algae and lichen using safe, effective methods that won't damage your roof.",
    benefits: [
      "Removes harmful organic growth",
      "Restores roof appearance",
      "Prevents long-term damage"
    ]
  },
  {
    title: "Roof Restoration",
    description: "Complete roof restoration services to bring your roof back to like-new condition, extending its lifespan.",
    benefits: [
      "Extends roof life by 10-15 years",
      "Improves energy efficiency",
      "Enhances curb appeal"
    ]
  },
  {
    title: "High Pressure Cleaning",
    description: "Safe high pressure cleaning techniques that remove stubborn stains without damaging your roof tiles or shingles.",
    benefits: [
      "Removes tough stains",
      "Gentle on roofing materials",
      "Prepares surface for sealing"
    ]
  },
  {
    title: "Moss & Algae Removal",
    description: "Specialized treatments to eliminate moss and algae growth that can damage your roof over time.",
    benefits: [
      "Prevents structural damage",
      "Eco-friendly solutions",
      "Long-lasting results"
    ]
  },
  {
    title: "Roof Sealing",
    description: "Protective sealing to prevent future growth and extend the time between cleanings.",
    benefits: [
      "Protects against weather",
      "Reduces future maintenance",
      "5+ year protection"
    ]
  },
  {
    title: "Gutter Cleaning",
    description: "Complete gutter cleaning to ensure proper drainage and prevent water damage to your home.",
    benefits: [
      "Prevents water damage",
      "Protects foundation",
      "Reduces pest infestations"
    ]
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D] pt-2">
        <div className="container mx-auto px-4 py-4 justify-between flex items-center">
          <h1 className="text-white text-xl font-bold">Our Services</h1>
          <p className="text-white">
            <a href="/" className="hover:underline">Home </a> / Services
          </p>
        </div>
        <hr className="border-white/30 w-full mx-auto" />
      </section>

      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-2/3 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Professional Roof Services in Sydney
              </h1>
              <p className="text-white/90 text-lg">
                We offer comprehensive roof cleaning and maintenance solutions to protect your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Roof Cleaning Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With over 10 years of experience serving Sydney homeowners, we provide the highest quality roof maintenance services using industry-leading techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-blue-700" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <a
                    href="/contact" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Get a free quote
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl p-8 md:p-10 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Restore Your Roof?</h2>
              <p className="text-white/90 mb-6">
                Contact us today for a free, no-obligation quote. Our Sydney roof cleaning experts are ready to help you protect your home.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact" 
                  className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
                >
                  Get a Free Quote
                </a>
                <a 
                  href="tel:0212345678" 
                  className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
                >
                  Call Now: 02 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}