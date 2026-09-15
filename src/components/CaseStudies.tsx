import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const cases = [
  {
    client: 'Media Tech',
    challenge: 'Financial workflows and reporting were manual, while internal coordination relied heavily on Excel and other manual processes. This led to missed opportunities and constrained the company’s growth.',
    solution: 'Built an integrated operations system aligned with internal processes to manage campaign performance reporting, reconciliation, invoicing and commissions.',
    outcomes: ['3x faster execution', 'Fewer manual errors', 'Clearer operational visibility'],
    tags: ['Financial Operations', 'Reporting', 'Workflow Automation'],
  },
  {
    client: 'Logistics',
    challenge: 'Procurement, supplier management, transaction reconciliation and budget reporting were handled manually, making everyday operations slow and difficult to track.',
    solution: 'Built a procurement and supplier management workflow that stores and centralises supplier information, enabling teams to evaluate and select suppliers quickly with AI assistance.',
    outcomes: ['Faster supplier evaluation', 'Clearer operational visibility', 'Scalable operations'],
    tags: ['Procurement', 'Supplier Management', 'AI Assistance'],
  },
  {
    client: 'Personal Admin',
    challenge: 'Businesses & Employees managed tasks, emails and calendars across multiple tools, creating unnecessary administrative work and causing important follow-ups to be missed.',
    solution: 'Built an AI personal assistant accessible through WhatsApp and Telegram to manage tasks, emails, calendars and reminders from a single interface.',
    outcomes: ['Less manual work', 'Improved productivity', 'Fewer missed tasks'],
    tags: ['Personal Assistant', 'Productivity', 'Workflow Automation'],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Selected work</p>
            <h2 className="mb-4 font-display text-3xl font-medium text-neutral-950">Case Studies</h2>
            <p className="text-lg font-light text-neutral-600">We focus on practical, business-driven transformation. Here is how our approach delivers measurable impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((study, index) => (
            <motion.article
              key={study.client}
              className="group flex flex-col rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition-colors hover:border-[#7E9BB7]/30 hover:bg-[#7E9BB7]/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#607D99]">{study.client}</span>
              </div>

              <div className="flex-grow">
                <h3 className="mb-2 text-lg font-medium text-neutral-900">The Challenge</h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-neutral-600">{study.challenge}</p>

                <h3 className="mb-2 text-lg font-medium text-neutral-900">The Solution</h3>
                <p className="text-sm font-light leading-relaxed text-neutral-600">{study.solution}</p>
              </div>

              <div className="mt-7 border-t border-neutral-200 pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-900">Outcomes</h3>
                <ul className="space-y-3">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7E9BB7]" strokeWidth={1.8} />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-200 pt-6">
                {study.tags.map((tag) => <span key={tag} className="rounded-md border border-[#7E9BB7]/20 bg-white px-2 py-1 text-xs font-medium text-neutral-500">{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
