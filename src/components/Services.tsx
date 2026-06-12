import { motion } from 'motion/react';
import { 
  Target, 
  ShieldCheck, 
  Workflow, 
  MessageSquareText, 
  Database, 
  Laptop, 
  Users 
} from 'lucide-react';

const services = [
  {
    title: "AI Opportunity & Readiness",
    description: "Identify where AI creates the greatest business impact and map a prioritized implementation roadmap.",
    icon: Target,
  },
  {
    title: "Governance & Security",
    description: "Adopt AI responsibly while managing regulatory, security, data privacy, and operational risks.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow Automation",
    description: "Redesign processes and deploy AI to reduce manual work in email triage, support, and document processing.",
    icon: Workflow,
  },
  {
    title: "AI Knowledge Assistants",
    description: "Build secure internal assistants that help employees instantly access SOPs, policies, and operational knowledge.",
    icon: MessageSquareText,
  },
  {
    title: "Data & AI Foundations",
    description: "Prepare enterprise data, integrate systems, and build the scalable infrastructure needed to support AI.",
    icon: Database,
  },
  {
    title: "Software Modernization",
    description: "Modernize legacy applications and internal systems by injecting intelligent layers and LLM capabilities.",
    icon: Laptop,
  },
  {
    title: "Change Management",
    description: "Ensure successful adoption through leadership alignment, employee retraining, and capability building.",
    icon: Users,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-display font-medium text-neutral-950 mb-4">Core Capabilities</h2>
          <p className="text-neutral-600 font-light text-lg">
            Our approach combines strategic advisory with hands-on implementation to solve critical business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-neutral-100 p-3 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-medium text-neutral-950 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
