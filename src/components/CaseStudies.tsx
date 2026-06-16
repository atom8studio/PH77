import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: "Healthcare Provider",
    challenge: "Handling sensitive patient data while reducing compliance risk and operational drag.",
    solution: "Implemented an AI governance framework and secure Document Summarisation tools locally.",
    metric: "40%",
    metricLabel: "Reduction in compliance audit times",
    tags: ["Governance", "Healthcare", "Data Privacy"]
  },
  {
    client: "Financial Services",
    challenge: "Manual lead qualification and complex internal approval processes slowing down revenue.",
    solution: "Deployed autonomous lead qualification agents and automated internal approval workflows.",
    metric: "3x",
    metricLabel: "Faster turnaround on approvals",
    tags: ["Automation", "Finance", "Workflow"]
  },
  {
    client: "Property Developer",
    challenge: "Long employee onboarding and difficulty accessing dispersed SOPs and guidelines.",
    solution: "Built a secure, internal AI Knowledge Assistant for instant employee self-service.",
    metric: "60%",
    metricLabel: "Fewer IT & HR support tickets",
    tags: ["Knowledge Agent", "Real Estate", "HR"]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-medium text-neutral-950 mb-4">Case Studies</h2>
            <p className="text-neutral-600 font-light text-lg">
              We focus on practical, business-driven transformation. Here is how our approach delivers measurable impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              className="group flex flex-col p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-100/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-8">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{study.client}</span>
              </div>
              <div className="mb-6 flex-grow">
                <h3 className="text-lg font-medium text-neutral-900 mb-2">The Challenge</h3>
                <p className="text-neutral-600 font-light text-sm mb-6">{study.challenge}</p>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">The Solution</h3>
                <p className="text-neutral-600 font-light text-sm">{study.solution}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-neutral-100">
                {study.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-neutral-500 bg-white border border-neutral-200 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
