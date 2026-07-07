import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   company: '',
  //   industry: '',
  //   message: ''
  // });
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!formState.name || !formState.email) return;
    
  //   // Simulate real submission
  //   setIsSubmitted(true);
  // };
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    const loadTally = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      }
    };

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.onload = loadTally;
      document.body.appendChild(script);
    } else {
      loadTally();
    }
  }, []);


  return (
    <section id="contact" className="py-24 bg-neutral-50 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Details column */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 bg-neutral-200/50 border border-neutral-300/30 mb-6 font-display uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-neutral-950 mb-6 tracking-tight">
              Start the Conversation
            </h2>
            <p className="text-neutral-600 font-light text-base leading-relaxed mb-10">
              Whether you're identifying opportunities, validating a business case, or implementing a solution, we're here to help.
            </p>
            <p className="text-neutral-600 font-light text-base leading-relaxed mb-10">
              Get in touch to discuss your goals, challenges and ideas, and let's see where AI can create meaningful value for your organisation.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-neutral-200/50 text-neutral-800 shadow-xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-950">Direct Inquiries</h4>
                  <a href="mailto:atom8studio@irisvc.co" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                    atom8studio@irisvc.co
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Form column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-6 sm:p-10 relative">
              <AnimatePresence mode="wait">
                {/* {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Elizabeth Lim"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all text-sm font-light text-neutral-900 placeholder:text-neutral-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="elizabeth@company.com.my"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all text-sm font-light text-neutral-900 placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Atom8 Studio"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all text-sm font-light text-neutral-900 placeholder:text-neutral-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Industry
                      </label>
                      <input
                        type="text"
                        id="industry"
                        value={formState.industry}
                        onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                        placeholder="e.g. Healthcare, Financial Services, Property Development"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all text-sm font-light text-neutral-900 placeholder:text-neutral-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Your Project Goals / Questions
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Please describe your current challenges or questions regarding AI transformation..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all text-sm font-light text-neutral-900 placeholder:text-neutral-400 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-neutral-950 px-6 py-4 text-sm font-medium text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Assess AI Readiness
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    className="flex flex-col items-center justify-center text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-neutral-950 flex items-center justify-center text-white mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-neutral-950 mb-2">Request Received</h3>
                    <p className="text-neutral-500 font-light text-sm max-w-sm mb-8">
                      Thank you for reaching out, {formState.name}! A senior consultant from our Kuala Lumpur strategic team will review your goals and reach out shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ name: '', email: '', company: '', industry: '', message: '' });
                      }}
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-6 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )} */}
                <iframe
                  data-tally-src="https://tally.so/embed/Gxy1No?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Atom8 Contact Us"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
