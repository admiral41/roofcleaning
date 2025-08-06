"use client";
import toast from 'react-hot-toast';
import axios from "axios";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(response.data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D] pt-2">
        <div className="container mx-auto px-4 py-4 justify-between flex items-center">
          <h1 className="text-white text-xl font-bold">Contact Us</h1>
          <p className="text-white">
            <a href="/" className="hover:underline">Home </a> / Contact Us
          </p>
        </div>
        <hr className="border-white/30 w-full mx-auto" />
      </section>

      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-2/3 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Get in Touch With Our Roof Cleaning Experts
              </h1>
              <p className="text-white/90 text-lg">
                Contact us today for a free quote or to discuss your roof cleaning needs in Sydney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact Info */}
            <div className="lg:w-1/2 bg-gradient-to-r from-[#111A3A] to-[#18499D] p-8 lg:p-10 rounded-xl text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-white/20">Sydney Roof Cleaning</h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 uppercase text-sm tracking-wider mb-1">Email</h4>
                    <div className="space-y-1">
                      <a href="mailto:info@sydneyroofcleaning.com.au" className="block hover:text-blue-200 transition-colors">
                        info@sydneyroofcleaning.com.au
                      </a>
                      <a href="mailto:quotes@sydneyroofcleaning.com.au" className="block hover:text-blue-200 transition-colors">
                        quotes@sydneyroofcleaning.com.au
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 uppercase text-sm tracking-wider mb-1">Phone</h4>
                    <div className="space-y-1">
                      <a href="tel:0212345678" className="block hover:text-blue-200 transition-colors">
                        02 1234 5678
                      </a>
                      <a href="tel:0412345678" className="block hover:text-blue-200 transition-colors">
                        0412 345 678 (Mobile)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 uppercase text-sm tracking-wider mb-1">Address</h4>
                    <address className="not-italic">
                      123 Roof Street<br />
                      Sydney, NSW 2000<br />
                      Australia
                    </address>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-medium text-white/90 uppercase text-sm tracking-wider mb-3">Service Areas</h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-sm">Eastern Suburbs</span>
                  <span className="text-sm">Northern Beaches</span>
                  <span className="text-sm">Inner West</span>
                  <span className="text-sm">North Shore</span>
                  <span className="text-sm">Western Sydney</span>
                  <span className="text-sm">Sutherland Shire</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px bg-white/30 w-10"></div>
                  <p className="text-white/80 text-sm font-medium">FOLLOW US</p>
                </div>
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300">
                    <Facebook className="text-white" size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300">
                    <Instagram className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Request a Free Quote</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed*</label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Roof Cleaning">Roof Cleaning</option>
                    <option value="Roof Restoration">Roof Restoration</option>
                    <option value="Moss Removal">Moss Removal</option>
                    <option value="Roof Sealing">Roof Sealing</option>
                    <option value="Gutter Cleaning">Gutter Cleaning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell us about your roof cleaning needs"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1026729716!2d150.65178995!3d-33.8473567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1712345678901"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sydney Roof Cleaning Location"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;