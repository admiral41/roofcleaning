"use client";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
structuredData?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  keywords = "roof cleaning Sydney, roof restoration, roof moss removal, roof cleaning services, professional roof cleaning, roof cleaning cost Australia",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "/images/roof-cleaning-sydney.jpg",
  ogUrl,
  structuredData,
}: SEOProps) {
  const siteName = "Sydney Roof Cleaning Professionals";
  const twitterHandle = "@SydneyRoofClean";
  const defaultOgImage = "/images/roof-cleaning-sydney.jpg";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl || `https://sydneyroofcleaningpros.com.au${ogUrl}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={ogUrl || `https://sydneyroofcleaningpros.com.au${canonicalUrl}`} />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}