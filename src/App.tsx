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
import EngineeringDifference from './components/EngineeringDifference';
import OperatingLayer from './components/OperatingLayer';
import SEO from './components/SEO';
import RobinPage from './pages/RobinPage';

export default function App() {
  if (['/robin', '/ai-admin', '/personal-assistant', '/virtual-assistant'].includes(window.location.pathname.replace(/\/$/, ''))) {
    return <RobinPage />;
  }

  return (
    <div className="relative isolate min-h-screen bg-neutral-50 flex flex-col">
      <SEO title="Atom8 Studio | Build Better Operations" description="Atom8 Studio builds reliable digital operations, workflow automation and practical AI for businesses in Malaysia and ASEAN." canonical="https://atom8studio.com/" />
      <Header />
      <main className="relative z-10 flex-grow pt-20">
        <Hero />
        <Expertise />
        <Services />
        <EngineeringDifference />
        <OperatingLayer />
        <Approach />
        <CaseStudies />
        <PersonalAdminCallout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
