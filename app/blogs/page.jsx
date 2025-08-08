// app/blogs/page.jsx
"use client";

import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";
import Link from "next/link";

const meta = {
  title: "Roofing Blog - Expert Tips & Advice | Sydney Roof Cleaning",
  description: "Get professional insights on roof cleaning, maintenance, and protection from Sydney's leading roof care specialists.",
  keywords: "roofing blog, roof maintenance tips, roof cleaning advice, Sydney roof care",
  image: "/blog-main.jpg"
};

const blogs = [
  {
    title: "How Long Does Acrylic Roof Coating Last",
    category: "Roof Coatings & Maintenance",
    author: "Justin Yates",
    image: "/blog1.jpg",
    excerpt: "Learn about acrylic roof coating lifespan, factors affecting durability, and maintenance tips to extend your roof's protection.",
    slug: "how-long-does-acrylic-roof-coating-last",
    date: "May 15, 2023"
  },
  {
    title: "How Long Does Silicone Roof Coating Last",
    category: "Roof Coatings & Maintenance",
    author: "Justin Yates",
    image: "/blog2.jpg",
    excerpt: "Discover the exceptional durability of silicone roof coatings and whether they're right for your Sydney property.",
    slug: "how-long-does-silicone-roof-coating-last",
    date: "June 10, 2023"
  },
  {
    title: "Can You Make Roof Tiles Waterproof",
    category: "Roof Coatings & Maintenance",
    author: "Justin Yates",
    image: "/blog3.jpg",
    excerpt: "Learn about effective waterproofing solutions for tile roofs in Sydney's rainy climate.",
    slug: "can-you-make-roof-tiles-waterproof",
    date: "July 22, 2023"
  }
];

export default function BlogList() {
  return (
    <BlogLayout meta={meta}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Roofing Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and tips on roof cleaning, maintenance, and protection from Sydney's leading specialists.
          </p>
        </div>

        <div className="space-y-12">
          {blogs.map((blog, index) => (
            <article key={index} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
              <Link href={`/blogs/${blog.slug}`} className="group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-48 w-full rounded-lg overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-800 rounded">
                        {blog.category}
                      </span>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F44336] transition">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {blog.author}</span>
                      <span className="text-sm font-medium text-[#F44336] group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Roofing Tips</h2>
          <p className="text-gray-600 mb-6">
            Get monthly maintenance tips and exclusive offers straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F44336] focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-[#F44336] hover:bg-red-600 text-white font-medium px-6 py-3 rounded transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </BlogLayout>
  );
}