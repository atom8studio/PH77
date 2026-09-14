import { motion } from 'motion/react';
import { Bot, Database, Layers3, Laptop, Target, Workflow } from 'lucide-react';

const services = [
  { title: 'Workflow Automation', description: 'Reduce repetitive work, approvals, chasing and manual handoffs across your operations.', icon: Workflow },
  { title: 'Digital Operations Systems', description: 'Replace fragile spreadsheets with structured, permissioned and searchable business data.', icon: Database },
  { title: 'Data Foundations', description: 'Structure and connect business data so workflows, reporting and automation can operate reliably.', icon: Layers3 },
  { title: 'Virtual Assistants', description: 'Give teams a conversational way to retrieve information, coordinate work and trigger actions.', icon: Bot },
  { title: 'AI Opportunity & Readiness', description: 'Identify where AI will create value, and where straightforward software is the better answer.', icon: Target },
  { title: 'Software Modernisation', description: 'Improve legacy tools, internal applications and reporting processes without unnecessary disruption.', icon: Laptop },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl"><p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">What Atom8 Studio does</p><h2 className="mb-5 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">From ad hoc workarounds to reliable digital operations</h2><p className="text-lg font-light leading-relaxed text-neutral-600">We design the operational backbone first, then add intelligent automation where it makes sense. Every solution is built to be secure, maintainable and integrated with the way your business actually runs.</p></div>
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <motion.article key={service.title} className="group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.08 }}><div className="mb-4 inline-flex rounded-xl bg-neutral-100 p-3 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white"><service.icon className="h-6 w-6" strokeWidth={1.5} /></div><h3 className="mb-3 font-display text-xl font-medium text-neutral-950">{service.title}</h3><p className="font-light leading-relaxed text-neutral-600">{service.description}</p></motion.article>)}</div>
      </div>
    </section>
  );
}
