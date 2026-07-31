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
import PersonalAdminCallout from './components/PersonalAdminCallout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageLogoBackdrop from './components/PageLogoBackdrop';
import AIAdminPage from './pages/AIAdminPage';
import VirtualAssistantLandingPage from './pages/VirtualAssistantLandingPage';

export default function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/ai-admin') {
    return <AIAdminPage />;
  }

  if (window.location.pathname.replace(/\/$/, '') === '/personal-assistant') {
    return <VirtualAssistantLandingPage />;
  }

  if (window.location.pathname.replace(/\/$/, '') === '/virtual-assistant') {
    return <VirtualAssistantLandingPage />;
  }

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
        <PersonalAdminCallout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
