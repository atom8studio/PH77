import { motion } from 'motion/react';
import { Database, MessagesSquare, Repeat2 } from 'lucide-react';

const realities = [
  { icon: Database, title: 'Data is trapped', text: 'Critical records sit in spreadsheets with weak validation, permissions and history.' },
  { icon: MessagesSquare, title: 'Work is fragmented', text: 'Requests and decisions move through email and chat while important context gets lost.' },
  { icon: Repeat2, title: 'Admin keeps repeating', text: 'Teams copy, chase, reconcile and reformat the same information every week.' },
];

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">The market reality</p>
          <h2 className="mb-5 font-display text-3xl font-medium sm:text-4xl">Most companies do not need AI everywhere. They need operations that actually work.</h2>
          <p className="text-lg font-light leading-relaxed text-neutral-400">AI can create leverage, but it cannot fix broken processes, unreliable data or disconnected systems by itself.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">{realities.map(({ icon: Icon, title, text }, index) => <motion.article key={title} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><Icon className="mb-6 h-6 w-6 text-neutral-300" strokeWidth={1.5} /><h3 className="mb-3 font-display text-xl font-medium">{title}</h3><p className="font-light leading-relaxed text-neutral-400">{text}</p></motion.article>)}</div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-medium text-neutral-200">Our approach: digitise first, automate second, and apply AI where it creates clear business leverage.</p>
      </div>
    </section>
  );
}
