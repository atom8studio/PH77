import { motion } from 'motion/react';
import { Search, Rocket, Building2 } from 'lucide-react';

const tiers = [
  {
    name: "Phase 1: Opportunity Assessment",
    duration: "2–6 weeks",
    objective: "Identify and prioritise high-value AI opportunities",
    description: "We assess your workflows, systems and data to identify where AI can create real business value and define a clear implementation roadmap",
    icon: Search,
    deliverable: "AI opportunity roadmap"
  },
  {
    name: "Phase 2: Pilot Delivery",
    duration: "Targeted Implementation",
    objective: "Validate value through working solutions",
    description: "We design and deploy practical AI tools such as internal assistants, workflow automation and document processing systems",
    icon: Rocket,
    deliverable: "Working pilot with measurable outcomes"
  },
  {
    name: "Phase 3: Scale & Adoption",
    duration: "Long-term Rollout",
    objective: "Expand successful pilots into real operations",
    description: "We help teams integrate proven solutions into day-to-day workflows and support broader organisational adoption",
    icon: Building2,
    deliverable: "Scaled, operational AI use cases"
  }

];

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-neutral-950 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-medium mb-6">Our Engagement Model</h2>
          <p className="text-neutral-400 font-light text-lg">
            We offer flexible engagement models tailored to your needs, from short-term assessments to long-term partnerships. Our phased approach ensures we deliver value at every stage of your AI journey.
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
