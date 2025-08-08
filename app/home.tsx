"use client";
import Image from "next/image";
import { Phone, ArrowUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const reviews = [
  {
    stars: 5,
    text: "Only reason for not giving five stars is that they arrived a bit late, but they more than made up for it with their work!",
    name: "Ishtiyaq Mahomed",
  },
  {
    stars: 5,
    text: "Absolutely incredible service – very professional, satisfied. Fantastic customer care, great value for money and outstanding work.",
    name: "Michael Willis",
  },
  {
    stars: 5,
    text: "Excellent, the two guys really went to town on my roof. Could not believe the difference compared to next door. Would recommend.",
    name: "Andrew Stevens",
  },
  {
    stars: 5,
    text: "Excellent, the two guys really went to town on my roof. Could not believe the difference compared to next door. Would recommend.",
    name: "John Owen",
  },
  {
    stars: 5,
    text: "Fantastic service – they pressure cleaned our roof terrace and all windows. Great team to get the work done. Will book again.",
    name: "William Maidment",
  },
];
const blogs = [
  {
    title: "How Long Does Acrylic Roof Coating Last",
    category: "Roof Coatings & Maintenance",
    author: "Justin Yates",
    image: "/blog1.jpg",
  },
  {
    title: "How Long Does Silicone Roof Coating Last",
    category: "Roof Coatings & Maintenance",
    author: "Justin Yates",
    image: "/blog2.jpg",
  },
  {
    title: "Can You Make Roof Tiles Waterproof",
    category: "Roof Coatings & Maintenance",
    author: "Justin Yates",
    image: "/blog3.jpg",
  },
];
export default function HeroSection() {
  return (
    <>
      {/* Main Hero Section */}
      <section
        className="bg-gradient-to-r from-[#111A3A] to-[#18499D] text-white py-20"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-4 items-center">
          {/* Text Content */}
          <div className="space-y-5">
            <h1 className="text-4xl font-bold leading-tight">
              Professional Roof Cleaning Company <br />
              <span className="text-gray-300 font-normal font-sans text-xl">
                You Can Count On
              </span>
            </h1>
            <p
              className="text-gray-300 text-sm font-openSans"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Roof Cleaning, Spraying & Sealing
            </p>
            <a
              href="#quote"
              className="inline-block bg-white text-black px-5 py-3 text-sm font-semibold rounded hover:bg-gray-100 transition font-openSans"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              FREE QUOTE FOR YOUR ROOF
            </a>
          </div>

          {/* Image Content */}
          <div className="w-full">
            <img
              src="/roof-cleaning-sample.jpg"
              alt="Roof Cleaning"
              width={800}
              height={600}
              className="w-full rounded-md object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Bottom Call Bar */}
      <div
        className="bg-gradient-to-r from-blue-700 to-blue-800 text-white text-sm text-center py-3 px-4 font-medium flex items-center justify-center gap-2 font-openSans"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <Phone size={16} />
        Call us for a free quote&nbsp;
        <span className="font-bold tracking-wider">0000 0000 000</span>
      </div>

      {/* About Us Section */}
      <section
        className="relative bg-white py-20 text-gray-800 text-center px-6  max-w-4xl mx-auto overflow-hidden"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        <div className="space-y-8 relative z-10">
          <h2 className="text-4xl font-bold relative inline-block">
            About Roof Wash Team
            {/* Decorative underline */}
            <span className="block w-24 h-1 bg-[#F44336] rounded mt-2 mx-auto"></span>
          </h2>

          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 font-openSans"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Welcome to <strong>SydneyRoofCleaning</strong>, your trusted partner
            for professional roof care and protection. We’re dedicated to
            providing high-quality roof cleaning, sealing, and spraying services
            that not only enhance your roof’s appearance but also extend its
            lifespan and improve energy efficiency.
          </p>

          {/* Read More Button */}
          <a
            href="/about"
            className="inline-block mt-4 px-8 py-3 bg-[#F44336] text-white rounded-lg shadow-lg hover:bg-red-600 transition font-semibold font-openSans"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            aria-label="Read more about SydneyRoofCleaning"
          >
            Read More
          </a>
        </div>
      </section>
      {/* Quote Section with Images */}
      <section className="w-full bg-white" id="quote">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Left Image - Full width, flush left */}
          <div className="h-[450px] w-full">
            <img
              src="/left-roof-cleaning.jpg" // Replace with your image path
              alt="Roof Cleaning Left"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Form */}
          <div className="bg-[#18499D] text-white p-6 h-[450px] flex items-center justify-center w-full">
            <div className="w-full max-w-sm">
              <h2 className="text-xl font-bold text-center mb-1">
                GET A FREE QUOTE TODAY!
              </h2>
              <p className="text-sm text-center mb-5">
                We will get back to you within 24 hours
              </p>

              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded text-black bg-white"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 rounded text-black bg-white"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 rounded text-black bg-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    className="w-full px-3 py-2 rounded text-black bg-white"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select className="w-full px-3 py-2 rounded text-black bg-white">
                    <option>Roof Cleaning</option>
                    <option>Gutter Cleaning</option>
                    <option>Roof Spraying</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Square Meters"
                    className="w-full px-3 py-2 rounded text-black bg-white"
                  />
                </div>
                <textarea
                  placeholder="Write your enquiry or message here."
                  className="w-full px-3 py-2 h-20 rounded text-black bg-white"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-[#18499D] font-semibold py-2 rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Image - Full width, flush right */}
          <div className="h-[450px] w-full">
            <img
              src="/right-roof-cleaning.jpg" // Replace with your image path
              alt="Roof Cleaning Right"
              width={600}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Roof Care Services Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Roof Care Services</h2>
          <p className="text-sm text-gray-600 mb-10">
            Explore Our Professional Roof Cleaning, Spraying & Sealing Services
          </p>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Roof Sealing */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/roof-sealing.jpg" // Replace with your actual image path
                alt="Roof Sealing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Roof Sealing Service
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  If your roof is covered in moss and grime, it could be storing
                  up a whole lot of expensive problems for the future.
                </p>
                <div className="flex flex-col gap-2">
                  <button className="border border-gray-400 text-gray-800 py-2 rounded hover:bg-gray-100">
                    VIEW DETAILS
                  </button>
                  <button className="bg-[#F44336] text-white py-2 rounded hover:bg-red-600">
                    FREE QUOTE
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Roof Spraying */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/roof-spraying.jpg" // Replace with your actual image path
                alt="Roof Spraying"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Roof Spraying Service
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your roof is arguably the most important structural feature on
                  your home or commercial property. If it fails or becomes...
                </p>
                <div className="flex flex-col gap-2">
                  <button className="border border-gray-400 text-gray-800 py-2 rounded hover:bg-gray-100">
                    VIEW DETAILS
                  </button>
                  <button className="bg-[#F44336] text-white py-2 rounded hover:bg-red-600">
                    FREE QUOTE
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Roof Cleaning */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <img
                src="/roof-cleaning.jpg" // Replace with your actual image path
                alt="Roof Cleaning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Roof Cleaning Service
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  If your roof is covered in moss and grime, it could be storing
                  up a whole lot of expensive problems for the future.
                </p>
                <div className="flex flex-col gap-2">
                  <button className="border border-gray-400 text-gray-800 py-2 rounded hover:bg-gray-100">
                    VIEW DETAILS
                  </button>
                  <button className="bg-[#F44336] text-white py-2 rounded hover:bg-red-600">
                    FREE QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">
          {/* Left 3 Images */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 h-[350px]">
            <img
              src="/roof1.png"
              alt="Roof 1"
              className="w-full h-full object-cover"
            />
            <img
              src="/roof2.png"
              alt="Roof 2"
              className="w-full h-full object-cover"
            />
            <img
              src="/roof3.png"
              alt="Roof 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Content (Now Wider) */}
          <div className="col-span-2 bg-[#111827] text-white flex flex-col justify-center p-8 h-[350px]">
            <h3 className="text-2xl font-bold mb-6">Why Homeowners Trust Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#F44336] text-lg">✓</span>
                <span>
                  <strong>Skilled Roof Experts</strong>
                  <br />
                  Trained professionals using safe & modern cleaning methods.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F44336] text-lg">✓</span>
                <span>
                  <strong>Fast Turnaround & Flexible Scheduling</strong>
                  <br />
                  Book same-day or evening visits based on your availability.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F44336] text-lg">✓</span>
                <span>
                  <strong>Budget-Friendly & Transparent Pricing</strong>
                  <br />
                  No hidden fees. Just reliable, affordable service you can
                  trust.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#F44336] text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg font-semibold text-center">
            Ready to Give Your Roof a Fresh Look? Get a Free Estimate Today!
          </p>
          <a
            href="#quote"
            className="bg-white text-[#F44336] font-bold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            GET A FREE QUOTE NOW!
          </a>
        </div>
      </section>
      {/* Roof Cleaning Process */}
      <section className="bg-white py-20 px-4" id="process">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#18499D] mb-2">
              Our Professional Roof Cleaning Process
            </h2>
            <div className="w-16 h-1 bg-[#F44336] rounded mx-auto mb-3"></div>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Here's our proven 3-step process to restore your roof's beauty and
              longevity.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative group flex flex-col md:flex-row justify-start">
                <div className="absolute md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 bg-[#F44336] text-white font-bold flex items-center justify-center rounded-full z-10 shadow group-hover:scale-105 transition">
                  1
                </div>
                <div className="w-full md:w-5/12 md:ml-auto bg-white border border-gray-100 p-5 rounded-lg shadow-sm mt-10 md:mt-0 group-hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2 text-[#18499D]">
                    Roof Assessment
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We inspect your roof to identify moss, dirt, and any damage.
                    You'll get a clear quote, and once you're ready, we begin
                    cleaning.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group flex flex-col md:flex-row justify-end">
                <div className="absolute md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 bg-[#F44336] text-white font-bold flex items-center justify-center rounded-full z-10 shadow group-hover:scale-105 transition">
                  2
                </div>
                <div className="w-full md:w-5/12 md:mr-auto bg-white border border-gray-100 p-5 rounded-lg shadow-sm mt-10 md:mt-0 group-hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2 text-[#18499D]">
                    Moss and Dirt Removal
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We hand-remove moss and grime for a thorough clean. This
                    improves your roof's look and prevents further damage.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group flex flex-col md:flex-row justify-start">
                <div className="absolute md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 bg-[#F44336] text-white font-bold flex items-center justify-center rounded-full z-10 shadow group-hover:scale-105 transition">
                  3
                </div>
                <div className="w-full md:w-5/12 md:ml-auto bg-white border border-gray-100 p-5 rounded-lg shadow-sm mt-10 md:mt-0 group-hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2 text-[#18499D]">
                    Soft Wash and Rinse
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We apply a soft wash to safely clean and protect your roof.
                    It helps it stay cleaner longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Reviews</h2>

          <div className="flex justify-center space-x-4 mb-4">
            <span className="text-yellow-400 text-xl">★★★★★</span>
          </div>

          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <img
              src="/google_logo.png"
              alt="Google Reviews"
              width={120}
              height={20}
            />
            <img
              src="/facebook_review.png"
              alt="Facebook Reviews"
              width={120}
              height={20}
            />
            <img
              src="/trustpilot-logo.png"
              alt="Trustpilot Reviews"
              width={120}
              height={20}
            />
          </div>

          <p className="text-gray-700 text-sm mb-10">
            <strong>Roof Wash Team</strong> &nbsp;4.9 Based on 1530 reviews
            &nbsp; | &nbsp;
            <a href="#" className="underline hover:text-blue-600">
              See all reviews
            </a>{" "}
            &nbsp; | &nbsp;
            <a href="#" className="underline hover:text-blue-600">
              Write a review
            </a>
          </p>

          <div className="relative px-12 md:px-20">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 5000 }}
              loop
              className="pb-10"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition h-full flex flex-col justify-between text-left">
                    <p className="text-yellow-400 text-lg mb-2">
                      {"★".repeat(review.stars)}
                    </p>
                    <p className="text-gray-700 mb-4">{review.text}</p>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-button-prev-custom absolute -left-8 md:-left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>

              <div className="swiper-button-next-custom absolute -right-8 md:-right-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Check out our latest blogs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Link
                href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="group"
              >
                <div className="bg-white border rounded-lg shadow hover:shadow-md transition">
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-t-lg group-hover:opacity-90 transition"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">
                      ● {blog.category} • {blog.author}
                    </p>
                    <h3 className="font-medium text-gray-800 mb-3 group-hover:text-[#F44336] transition">
                      {blog.title}
                    </h3>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F54337] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
            Get Your Free Estimate Today!
          </h3>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-5 py-2 rounded font-semibold hover:bg-gray-100 transition">
              CALL FOR FREE
            </button>
            <button className="bg-black text-white px-5 py-2 rounded font-semibold hover:bg-gray-900 transition">
              REQUEST A FREE QUOTE
            </button>
          </div>
        </div>
      </section>
      {/* Scroll To Top Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#F44336] hover:bg-red-600 p-2 rounded-full shadow-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={18} />
        </button>
      </div>
    </>
  );
}
