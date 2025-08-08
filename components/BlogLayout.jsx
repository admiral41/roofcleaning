// components/BlogLayout.jsx
"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

export default function BlogLayout({ children, meta }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Head>
                <title>{meta.title} | Sydney Roof Cleaning</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://sydneyroofcleaning.com${pathname}`} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <link rel="canonical" href={`https://sydneyroofcleaning.com${pathname}`} />
            </Head>

            <div className="bg-white">
                {/* Navigation */}


                {/* Blog Content */}
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {children}
                </main>

                {/* Footer */}


                {/* Scroll to top button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 bg-[#F44336] hover:bg-red-600 p-3 rounded-full shadow-lg"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="text-white" size={18} />
                </button>
            </div>
        </>
    );
}