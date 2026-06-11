import { motion } from 'motion/react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const questions = [
  { id: "1", text: "Where should we invest in AI?" },
  { id: "2", text: "Which processes should we automate?" },
  { id: "3", text: "What risks must we manage?" },
  { id: "4", text: "How do we achieve measurable ROI?" },
  { id: "5", text: "How do we prepare our workforce for AI adoption?" },
  { id: "6", text: "How do we govern AI responsibly and securely?" }
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/40 via-neutral-50/50 to-neutral-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-neutral-800 bg-neutral-200/60 border border-neutral-300/30 mb-8 font-display tracking-wide uppercase">
                Strategic Advisory • Technical Implementation • Responsible Governance
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-medium tracking-tight text-neutral-950 mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Move beyond AI <br/>
              <span className="text-gradient">experimentation.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-neutral-600 mb-8 leading-relaxed font-light max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We partner with forward-thinking enterprises to build clear, data-backed blueprints and deploy highly tailored AI pilots that empower teams and directly improve operational yields.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button className="inline-flex justify-center items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors cursor-pointer">
                Book A Strategy Session
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex justify-center items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-neutral-900 border border-neutral-200 hover:bg-neutral-100 transition-colors cursor-pointer">
                Explore Core Services
              </button>
            </motion.div>
          </div>

          {/* Strategic Questions Insight Box */}
          <motion.div 
            className="lg:col-span-5 w-full"
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative rounded-3xl bg-white border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
              <div className="absolute top-0 right-0 -mr-3 -mt-3 w-12 h-12 rounded-full bg-neutral-100/80 border border-neutral-200/50 flex items-center justify-center backdrop-blur shadow-xs">
                <HelpCircle className="w-5 h-5 text-neutral-600" />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-display font-medium text-neutral-950">Resolving Critical Path Questions</h3>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  We guide mid-sized enterprises through the complexities of AI adoption.
                </p>
              </div>

              <div className="space-y-4">
                {questions.map((q) => (
                  <div 
                    key={q.id} 
                    className="flex items-start gap-4 p-3 rounded-2xl hover:bg-neutral-50/80 transition-colors duration-200 group"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-200 text-xs font-mono font-medium text-neutral-600 shrink-0 select-none">
                      {q.id.padStart(2, '0')}
                    </span>
                    <p className="text-sm text-neutral-700 font-light leading-relaxed group-hover:text-neutral-900 transition-colors duration-200">
                      {q.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 text-center">
                <p className="text-xs text-neutral-500 font-light">
                  No empty speculation. Just actionable answers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
