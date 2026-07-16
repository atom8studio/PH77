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
    description: "Identify high-impact AI opportunities and priotise an implementation roadmap that delivers",
    icon: Target,
  },
  {
    title: "Workflow Automation",
    description: "Redesign processes to reduce operational friction leading to better customer experience",
    icon: Workflow,
  },
  {
    title: "Agentic Automation",
    description: "Deploying custom AI agents that execute multi-step business tasks",
    icon: MessageSquareText,
  },
  {
    title: "Data Foundations",
    description: "Prepare data, integrate systems and establish the foundations needed for AI adoption",
    icon: Database,
  },
  {
    title: "Software Modernisation",
    description: "Modernise systems and improve business operations",
    icon: Laptop,
  },
  {
    title: "AI in the Workplace",
    description: "Support leadership and teams successfully in adopting new toolings and workflows",
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
            Our approach combines discovery with practical implementation to solve business challenges and deliver measurable results.
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
