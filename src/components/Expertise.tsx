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
                We bridge the gap between business objectives and technical execution.
              </h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                Combining strategic advisory with practical implementation, we help organisations adopt AI with confidence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">ROI</div>
                  <div className="text-sm text-neutral-500">Measurable returns over experimentation</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">Trust</div>
                  <div className="text-sm text-neutral-500">Secure, locally hosted integrations</div>
                </div>
              </div>
              <div className="space-y-4 lg:mt-8">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">Scale</div>
                  <div className="text-sm text-neutral-500">Infrastructure built for future growth</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  <div className="text-3xl font-display font-light text-neutral-900 mb-2">People</div>
                  <div className="text-sm text-neutral-500">Change management at the core</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
