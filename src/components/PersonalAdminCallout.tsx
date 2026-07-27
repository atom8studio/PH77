import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PersonalAdminCallout() {
  return (
    <section className="py-16 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">
              Taking the &quot;ugh&quot; out of admin.
            </h2>
          </div>
          <a
            href="/personal-assistant"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors"
          >
            Explore Dobbie
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
