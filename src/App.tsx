/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import FeaturedListings from '@/components/sections/FeaturedListings';
import Testimonials from '@/components/sections/Testimonials';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedListings />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
