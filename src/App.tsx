/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Approach from './components/Approach';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        <Expertise />
        <Services />
        <Approach />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

