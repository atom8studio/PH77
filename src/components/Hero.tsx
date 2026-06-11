import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-neutral-50/50 to-neutral-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-neutral-800 bg-neutral-200/50 ring-1 ring-inset ring-neutral-300/50 mb-6 font-display">
              AI Transformation Partner for Malaysia
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl lg:text-7xl font-display font-medium tracking-tight text-neutral-950 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Move beyond AI <br/>
            <span className="text-gradient">experimentation.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl text-neutral-600 mb-10 leading-relaxed font-light max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help mid-sized enterprises identify high-impact opportunities, build practical roadmaps, and implement production-ready artificial intelligence that delivers measurable business value.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="inline-flex justify-center items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
              Start Your AI Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex justify-center items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-neutral-900 border border-neutral-200 hover:bg-neutral-100 transition-colors">
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
