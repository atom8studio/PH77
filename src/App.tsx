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
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageLogoBackdrop from './components/PageLogoBackdrop';

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      <PageLogoBackdrop />
      <main className="relative z-10 flex-grow pt-20">
        <Hero />
        <Expertise />
        <Services />
        <Approach />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
