import { motion } from 'motion/react';
import { Search, Rocket, Building2 } from 'lucide-react';

const tiers = [
  {
    name: "Tier 1: Opportunity Assessment",
    duration: "2–6 weeks",
    objective: "Identify and prioritize high-value AI opportunities.",
    description: "Before throwing money at tools, we audit your business. We assess tech stack readiness, data pipelines, and security governance to create a clear AI Transformation Blueprint.",
    icon: Search,
    deliverable: "AI Transformation Blueprint"
  },
  {
    name: "Tier 2: Pilot Delivery",
    duration: "Targeted Implementation",
    objective: "Validate ROI through working software.",
    description: "We deploy working AI solutions into your secure local cloud environment—from knowledge assistants answering queries via SOPs to automated pipeline handlers and intelligent workflow redesigns.",
    icon: Rocket,
    deliverable: "Production-ready pilot with measurable outcomes"
  },
  {
    name: "Tier 3: Transformation Program",
    duration: "Long-term Rollout",
    objective: "Enterprise-wide AI adoption and operational resilience.",
    description: "The long-term strategy playbook. We handle change management, continuous retraining, and governance implementation to ensure staff fully adopt the tools and the technology actually sticks.",
    icon: Building2,
    deliverable: "Sustainable AI-enabled operating model"
  }
];

export default function Approach() {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-medium mb-6">Our Engagement Model</h2>
          <p className="text-neutral-400 font-light text-lg">
            A structured, phased approach to ensure you only invest in technology that your data can support and your team will actually use.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-neutral-950 bg-neutral-800 text-neutral-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm shrink-0 z-10 transition-colors group-hover:bg-white group-hover:text-neutral-950">
                <tier.icon className="w-4 h-4" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm transition-all hover:border-neutral-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                  <h3 className="text-xl font-display font-medium text-white">{tier.name}</h3>
                  <span className="text-sm text-neutral-500 font-mono mt-1 sm:mt-0">{tier.duration}</span>
                </div>
                <h4 className="text-sm font-medium text-neutral-300 mb-3">{tier.objective}</h4>
                <p className="text-neutral-400 font-light leading-relaxed mb-6">
                  {tier.description}
                </p>
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-sm">
                    <span className="text-neutral-500">Key Deliverable: </span>
                    <span className="text-neutral-300 font-medium">{tier.deliverable}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
