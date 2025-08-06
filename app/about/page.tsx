"use client";
import { CheckCircle, Users, Shield, Award, Home } from 'lucide-react';

// export const metadata = {
//   title: "About Sydney Roof Cleaning | Trusted Local Experts",
//   description: "Learn about our Sydney roof cleaning company with 10+ years experience in roof restoration, cleaning and maintenance.",
// }

const features = [
  {
    name: '10+ Years Experience',
    description: 'We have been serving Sydney homeowners with professional roof cleaning services for over a decade.',
    icon: Award,
  },
  {
    name: 'Local Sydney Experts',
    description: 'We understand Sydney\'s unique climate and how it affects your roof.',
    icon: Home,
  },
  {
    name: 'Fully Insured',
    description: 'Complete peace of mind with full public liability insurance coverage.',
    icon: Shield,
  },
  {
    name: 'Trusted Team',
    description: 'Our professional technicians are trained in the latest roof cleaning techniques.',
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D] pt-2">
        <div className="container mx-auto px-4 py-4 justify-between flex items-center">
          <h1 className="text-white text-xl font-bold">About Us</h1>
          <p className="text-white">
            <a href="/" className="hover:underline">Home </a> / About Us
          </p>
        </div>
        <hr className="border-white/30 w-full mx-auto" />
      </section>

      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-2/3 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Sydney's Trusted Roof Cleaning Experts
              </h1>
              <p className="text-white/90 text-lg">
                Protecting Sydney homes with professional roof cleaning and maintenance since 2013.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  Founded in 2013, Sydney Roof Cleaning began with a simple mission: to provide homeowners with professional, reliable roof cleaning services that protect their most valuable asset - their home.
                </p>
                <p>
                  Over the years, we've grown to become Sydney's most trusted roof cleaning company, serving thousands of satisfied customers across all suburbs. Our team of local experts understands the unique challenges that Sydney's climate presents for roofs.
                </p>
                <p>
                  We take pride in using environmentally friendly cleaning solutions and the latest techniques to deliver outstanding results without damaging your roof. Our commitment to quality and customer satisfaction has earned us a reputation as the go-to roof cleaning specialists in Sydney.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video">
                {/* Replace with your actual about image */}
                <img 
                  src="/about-team.jpg" 
                  alt="Sydney Roof Cleaning Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.name}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl p-8 md:p-10 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Sydney Roof Cleaning Team</h2>
              <p className="text-white/90 mb-6">
                Our local team of roof cleaning professionals is ready to help you protect your home. 
                We take pride in our work and treat every home as if it were our own.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
                >
                  Contact Our Team
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