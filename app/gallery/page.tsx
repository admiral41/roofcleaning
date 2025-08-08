"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata = {
//   title: "Roof Cleaning Gallery | Before & After Photos",
//   description: "View our gallery of roof cleaning before and after photos from our Sydney projects. See the transformation our professional cleaning provides.",
// }

const galleryItems = [
  {
    id: 1,
    title: "Tile Roof Restoration - Bondi",
    before: "/gallery/bondi-before.jpg",
    after: "/gallery/bondi-after.jpg",
    description: "Complete tile roof restoration including moss removal and sealing in Bondi.",
    category: "restoration"
  },
  {
    id: 2,
    title: "Moss Removal - Manly",
    before: "/gallery/manly-before.jpg",
    after: "/gallery/manly-after.jpg",
    description: "Specialized moss treatment and removal from Northern Beaches home.",
    category: "cleaning"
  },
  {
    id: 3,
    title: "Roof Cleaning - Parramatta",
    before: "/gallery/parramatta-before.jpg",
    after: "/gallery/parramatta-after.jpg",
    description: "High pressure cleaning of terracotta tiles in Western Sydney.",
    category: "cleaning"
  },
  {
    id: 4,
    title: "Commercial Roof Cleaning - CBD",
    before: "/gallery/cbd-before.jpg",
    after: "/gallery/cbd-after.jpg",
    description: "Large-scale commercial roof cleaning project in Sydney CBD.",
    category: "commercial"
  },
  {
    id: 5,
    title: "Roof Sealing - Mosman",
    before: "/gallery/mosman-before.jpg",
    after: "/gallery/mosman-after.jpg",
    description: "Protective sealing application on North Shore home.",
    category: "sealing"
  },
  {
    id: 6,
    title: "Gutter Cleaning - Randwick",
    before: "/gallery/randwick-before.jpg",
    after: "/gallery/randwick-after.jpg",
    description: "Complete gutter cleaning and downpipe clearance in Eastern Suburbs.",
    category: "gutters"
  },
  {
    id: 7,
    title: "Tile Roof Cleaning - Chatswood",
    before: "/gallery/chatswood-before.jpg",
    after: "/gallery/chatswood-after.jpg",
    description: "Professional tile roof cleaning on North Shore property.",
    category: "cleaning"
  },
  {
    id: 8,
    title: "Roof Restoration - Cronulla",
    before: "/gallery/cronulla-before.jpg",
    after: "/gallery/cronulla-after.jpg",
    description: "Full roof restoration including repointing and sealing in Sutherland Shire.",
    category: "restoration"
  },
];

type GalleryItem = {
  id: number;
  title: string;
  before: string;
  after: string;
  description: string;
  category: string;
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'cleaning', name: 'Roof Cleaning' },
    { id: 'restoration', name: 'Restoration' },
    { id: 'sealing', name: 'Sealing' },
    { id: 'gutters', name: 'Gutter Cleaning' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D] pt-2">
        <div className="container mx-auto px-4 py-4 justify-between flex items-center">
          <h1 className="text-white text-xl font-bold">Our Gallery</h1>
          <p className="text-white">
            <a href="/" className="hover:underline">Home </a> / Gallery
          </p>
        </div>
        <hr className="border-white/30 w-full mx-auto" />
      </section>

      <section className="bg-gradient-to-r from-[#111A3A] to-[#18499D]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center">
            <div className="w-full md:w-2/3 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Our Roof Cleaning Projects
              </h1>
              <p className="text-white/90 text-lg">
                See the transformation our professional roof cleaning services provide across Sydney
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-video">
                  <img
                    src={item.before}
                    alt={`Before: ${item.title}`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-800/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
                      View Comparison
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Roof?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get the same professional results for your Sydney home. Contact us today for a free, no-obligation quote.
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
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-4xl w-full">
            <h3 className="text-xl font-bold text-white mb-4 text-center">{selectedImage.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="relative aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                  <img
                    src={selectedImage.before}
                    alt={`Before: ${selectedImage.title}`}
                    
                    className="object-cover"
                  />
                </div>
                <div className="bg-blue-700 text-white py-2 text-center font-medium rounded-b-lg">
                  Before
                </div>
              </div>
              <div>
                <div className="relative aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                  <img
                    src={selectedImage.after}
                    alt={`After: ${selectedImage.title}`}
                    
                    className="object-cover"
                  />
                </div>
                <div className="bg-green-600 text-white py-2 text-center font-medium rounded-b-lg">
                  After
                </div>
              </div>
            </div>
            
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}