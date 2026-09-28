import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const outcomes = [
  'Less repetitive work and fewer manual errors',
  'Faster execution and lower operating friction',
  'Clearer data and operational visibility',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 lg:pb-28 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-neutral-50/60 to-neutral-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <motion.span className="mb-8 inline-flex rounded-full border border-[#7E9BB7]/30 bg-[#7E9BB7]/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-[#607D99]" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              Strategy • Automation • Implementation
            </motion.span>
            <motion.h1 className="mb-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-neutral-950 sm:text-6xl lg:text-8xl" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Build Better <span className="text-gradient">Operations</span>
            </motion.h1>
            <motion.p className="mb-5 max-w-2xl text-xl font-light leading-relaxed text-neutral-700" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              We replace fragile spreadsheets, manual handoffs and disconnected systems with reliable digital workflows, then add automation and AI where they deliver measurable value.
            </motion.p>
            <motion.div className="mt-9 flex flex-col gap-4 sm:flex-row" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800">Find your first workflow <ArrowRight className="h-4 w-4" /></a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-8 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100">See what we build</a>
            </motion.div>
          </div>
          <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.98, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-sm sm:p-9">
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-[#7E9BB7]">What changes</p>
              <h2 className="mb-7 font-display text-2xl font-medium text-neutral-950">Operations your team can rely on</h2>
              <div className="space-y-5">{outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7E9BB7]" strokeWidth={1.5} /><span className="text-sm leading-relaxed text-neutral-600">{outcome}</span></div>)}</div>
              <div className="mt-8 border-t border-neutral-100 pt-6 text-sm leading-relaxed text-neutral-500">Engineering-led delivery backed by 30+ years of professional software development experience.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
