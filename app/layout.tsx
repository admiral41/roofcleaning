import { Inter } from 'next/font/google'
import "./globals.css";
import LayoutManager from '@/components/LayoutManager';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Sydney Roof Cleaning | Professional Roof Restoration Services',
    template: '%s | Sydney Roof Cleaning Experts',
  },
  description: 'Professional roof cleaning, restoration and maintenance services in Sydney. Get a free quote for roof cleaning, spraying & sealing from our local experts.',
  keywords: 'roof cleaning Sydney, roof restoration, roof cleaning services, roof maintenance, roof sealing, roof spraying',
  twitter: {
    card: 'summary_large_image',
    title: 'Sydney Roof Cleaning | Professional Roof Restoration Services',
    description: 'Professional roof cleaning services in Sydney with 10+ years experience. Free quotes available.',
  },
  metadataBase: new URL('https://sydneyroofcleaning.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/opengraph-image.png',
    title: 'Sydney Roof Cleaning | Professional Roof Restoration Services',
    description: 'Professional roof cleaning, restoration and maintenance services in Sydney. Get a free quote today.',
    type: 'website',
    locale: 'en_AU',
    url: 'https://sydneyroofcleaning.com.au',
    siteName: 'Sydney Roof Cleaning',
  },
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Sydney',
    'geo.position': '-33.8688;151.2093',
    'ICBM': '-33.8688, 151.2093',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LayoutManager>
          {children}
        </LayoutManager>
      </body>
      <GoogleAnalytics gaId='YOUR_GA_ID' />
    </html>
  );
}