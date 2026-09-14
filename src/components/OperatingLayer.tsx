import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react';

const tools = ['Email', 'Calendar', 'Documents', 'CRM / ERP', 'Databases', 'Spreadsheets'];
const workflow = ['Understand the workflow', 'Structure the data', 'Connect the systems', 'Automate the work'];
const safeguards = ['Human approval', 'Access control', 'Audit trails', 'Monitoring', 'Integration design', 'Training and adoption'];

export default function OperatingLayer() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Built around your business</p>
          <h2 className="mb-5 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">One reliable operating layer across the tools you already use</h2>
          <p className="text-lg font-light leading-relaxed text-neutral-600">Atom8 Studio connects the systems where work already happens. We structure the information and workflow between them so your team can move work forward without replacing every tool.</p>
        </div>

        <motion.div className="overflow-hidden rounded-3xl border border-[#7E9BB7]/30 bg-[#7E9BB7]/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.8fr_auto_1.4fr] lg:items-center lg:p-10">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Your existing tools</p>
              <div className="grid grid-cols-2 gap-2">{tools.map((tool) => <div key={tool} className="rounded-xl border border-[#7E9BB7]/25 bg-white/90 px-3 py-3 text-center text-sm text-neutral-700 shadow-sm">{tool}</div>)}</div>
            </div>

            <div className="flex justify-center text-[#7E9BB7]">
              <ArrowDown className="h-6 w-6 lg:hidden" />
              <ArrowRight className="hidden h-6 w-6 lg:block" />
            </div>

            <div className="rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div><p className="text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Atom8 Studio operating layer</p><h3 className="mt-2 font-display text-2xl font-medium">From disconnected work to one reliable process</h3></div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7E9BB7]/15 text-[#7E9BB7] sm:flex"><ShieldCheck className="h-6 w-6" /></div>
              </div>
              <div className="grid gap-2 sm:grid-cols-4">
                {workflow.map((step, index) => <div key={step} className="relative rounded-xl border border-neutral-800 bg-neutral-900 p-4"><span className="mb-3 block text-xs font-semibold text-[#7E9BB7]">0{index + 1}</span><span className="text-sm leading-snug text-neutral-200">{step}</span></div>)}
              </div>
              <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">Ask • Retrieve • Act • Confirm</p>
            </div>
          </div>

          <div className="border-t border-[#7E9BB7]/30 bg-[#7E9BB7]/15 px-6 py-7 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div className="shrink-0"><p className="text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Safeguards built in</p><p className="mt-1 text-sm text-neutral-500">Controls for adoption and accountability</p></div>
              <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">{safeguards.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-neutral-600"><span className="h-2 w-2 shrink-0 rounded-full bg-[#7E9BB7]" />{item}</div>)}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
