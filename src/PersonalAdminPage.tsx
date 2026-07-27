import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Scale,
  CalendarDays,
  CircleDollarSign,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import logo from './assets/images/logo_horizontal.png';
import budgetVideo from './assets/videos/Budget.mp4';
import calendarVideo from './assets/videos/Calendar.mp4';
import compareVideo from './assets/videos/Compare.mp4';
import IntegrationsCarousel from './components/IntegrationsCarousel';

const capabilities = [
  {
    icon: CircleDollarSign,
    title: 'Budgeting made easier',
    description: 'Set simple budget, quickly update your expenses, analyse your spending and get a clear view of where your money is going.',
    video: budgetVideo,
  },
  {
    icon: CalendarDays,
    title: 'Never double book again',
    description: 'Add events, keep important commitments close at hand and analyse what you are spending your time on.',
    video: calendarVideo,
  },
  {
    icon: Scale,
    title: 'Compare and prioritise',
    description: 'Turn information overload into useful insights so the little things do not get lost in the day.',
    video: compareVideo,
  },
];

const steps = [
  ['01', 'Send a message', 'Tell Dobbie what you need in the same natural way you would message a friend or an admin.'],
  ['02', 'Delegate it', 'Dobbie asks what matters, gets your permissions and keeps the next step simple.'],
  ['03', 'Focus on what matters', 'Your plans, reminders, and everyday admin become easier to manage from one familiar conversation.'],
];

export default function TaskmatePage() {
  useEffect(() => {
    document.title = 'Dobbie — Your everyday admin assistant | Atom8 Studio';
    return () => {
      document.title = 'Atom8 Studio - AI Consultancy for ASEAN Enterprises';
    };
  }, []);

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
    <div className="relative isolate min-h-screen bg-neutral-50 text-neutral-900 overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-b border-neutral-100 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="w-25 rounded-lg flex items-center" aria-label="Atom8 Studio home">
            <img src={logo} alt="Atom8 Studio" className="object-contain rounded-sm" />
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Taskmate navigation">
            <a href="#capabilities" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">What it can do</a>
            <a href="#how-it-works" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">How it works</a>
          </nav>
          <a href="#contact" className="text-sm font-medium text-white bg-neutral-950 px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">Join the waitlist</a>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        <section className="relative pt-24 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/50 via-neutral-50/60 to-neutral-50" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
              <div className="lg:col-span-7">
                <motion.span
                  className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-neutral-800 bg-neutral-200/60 border border-neutral-300/30 mb-8 font-display tracking-wide uppercase"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                >
                  A chat companion for everyday admin
                </motion.span>
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-8xl font-display font-medium tracking-tight text-neutral-950 mb-6 leading-[1.02]"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                >
                  Your Personal<br /><span className="text-gradient">Back Office</span>
                </motion.h1>
                <motion.p
                  className="text-lg text-neutral-600 mb-8 leading-relaxed font-light max-w-xl"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                >
                  Dobbie is a friendly chat companion that helps small admin tasks that take up too much headspace — streamlining your workflow in a conversation.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <a href="#capabilities" className="inline-flex justify-center items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
                    Meet Dobbie <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>

              <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.98, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className="relative rounded-3xl bg-white border border-neutral-200/80 p-5 sm:p-7 shadow-sm max-w-md ml-auto">
                  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-neutral-100">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-950 flex items-center justify-center text-white"><Sparkles className="w-5 h-5" /></div>
                    <div><p className="font-display font-medium">Dobbie</p><p className="text-xs text-neutral-500">Always ready to help</p></div>
                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-neutral-700">What can I help you organise today?</div>
                    <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-neutral-950 px-4 py-3 text-white">I spent a little more than planned this week. Can you help me check my budget?</div>
                    <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-neutral-700">Of course. You’re RM120 over your weekly dining budget. Want to adjust this week’s plan together?</div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-xs text-neutral-400"><MessageCircle className="w-4 h-4" /> Message Dobbie...</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16"><h2 className="text-3xl font-display font-medium text-neutral-950 mb-4">The helpful assistant between you and your to-do list</h2><p className="text-neutral-600 font-light text-lg">Dobbie turns everyday admin into a conversation. No complicated menus — just tell it what you need, and offload one task at a time. Dobbie learns from previous interactions and adapts to your workflow.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {capabilities.map(({ icon: Icon, title, description, video }, index) => (
                <motion.div key={title} className="group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-neutral-100 p-3 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors"><Icon className="h-6 w-6" strokeWidth={1.5} /></div>
                  <h3 className="text-xl font-display font-medium text-neutral-950 mb-3">{title}</h3><p className="text-neutral-600 font-light leading-relaxed">{description}</p>
                  <div className="py-6 capability-video">
                    <video controls autoPlay muted loop playsInline className="w-full rounded-2xl border border-neutral-200 shadow-sm">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
                
              ))}
            </div>
          </div>
          <IntegrationsCarousel />
        </section>

        <section id="how-it-works" className="py-24 bg-neutral-950 text-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"><div><h2 className="text-3xl lg:text-4xl font-display font-medium mb-6">Simple by design</h2><p className="text-neutral-400 font-light text-lg max-w-md">The best assistant is one you actually want to use. Dobbie meets you where you are, remembers the context, and keeps the interaction human.</p></div><div className="space-y-8">{steps.map(([number, title, description]) => <div key={number} className="flex gap-5 border-b border-neutral-800 pb-8"><span className="text-sm font-mono text-neutral-500 pt-1">{number}</span><div><h3 className="text-xl font-display font-medium mb-2">{title}</h3><p className="text-neutral-400 font-light leading-relaxed">{description}</p></div></div>)}</div></div></div>
        </section>

        <section id="contact" className="py-24 bg-neutral-50 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 bg-neutral-200/50 border border-neutral-300/30 mb-6 font-display uppercase tracking-wider">Coming soon</span>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-neutral-950 mb-6 tracking-tight">Make room for what matters.</h2>
            <p className="text-neutral-600 font-light text-lg leading-relaxed mb-10">Tell us a little about how you would like Dobbie to help. We’re shaping the first version around real everyday needs.</p>
          </div>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
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
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 pt-12 pb-10 border-t border-neutral-900 text-neutral-400"><div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light"><a href="/" className="text-white font-display font-semibold text-lg">Atom8 Studio</a><div>© {new Date().getFullYear()} Atom8 Studio. All rights reserved.</div><a href="mailto:atom8studio@irisvc.co" className="hover:text-white transition-colors">atom8studio@irisvc.co</a></div></footer>
    </div>
  );
}
