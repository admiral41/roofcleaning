'use client'

import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { usePathname } from 'next/navigation';

export default function LayoutManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Don't show navbar/footer on certain pages if needed
  const showLayout = !pathname.startsWith('/admin');
  
  return (
    <>
      {showLayout && <Navbar />}
      <main>{children}</main>
      {showLayout && <Footer />}
    </>
  );
}