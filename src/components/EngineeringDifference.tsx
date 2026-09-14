import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  ['Standalone chatbot', 'Integrated workflow tool'],
  ['Prompt experiment', 'Secure system design'],
  ['Manual exports', 'Structured data model'],
  ['One-off prototype', 'Maintainable production software'],
];

export default function EngineeringDifference() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Why engineering matters</p>
            <h2 className="mb-5 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">AI demos are easy. Reliable business systems are harder.</h2>
            <p className="text-lg font-light leading-relaxed text-neutral-600">We build automation as part of your operating system, not as a disconnected experiment, so it remains dependable as usage, data and complexity grow.</p>
          </motion.div>
          <motion.div className="space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-3 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-400"><span>AI-first shortcut</span><span /><span>Engineering-led delivery</span></div>
            {comparisons.map(([shortcut, delivery]) => <div key={shortcut} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3"><div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-500">{shortcut}</div><ArrowRight className="h-4 w-4 text-[#7E9BB7]" /><div className="rounded-xl bg-neutral-950 p-4 text-sm font-medium text-white ring-1 ring-[#7E9BB7]/20">{delivery}</div></div>)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
