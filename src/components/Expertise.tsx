import { motion } from 'motion/react';

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-neutral-50 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 max-w-4xl mx-auto -z-10 opacity-30 mix-blend-multiply">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-300 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-200 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-16 border border-neutral-200 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4">Our Positioning</h2>
              <h3 className="text-3xl md:text-5xl font-display font-medium text-neutral-950 mb-6 leading-tight">
                Adopt AI with Confidence
              </h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                We translate business goals into practical AI solutions, aligning strategy with seamless execution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">ROI</div>
                  <div className="text-sm text-neutral-500">Measurable business outcomes</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">Execution</div>
                  <div className="text-sm text-neutral-500">More agile. Faster delivery</div>
                </div>
              </div>
              <div className="space-y-4 lg:mt-8">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">Scale</div>
                  <div className="text-sm text-neutral-500">Built for sustainable adoption</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">Partnership</div>
                  <div className="text-sm text-neutral-500">From problem definition to deployment</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
