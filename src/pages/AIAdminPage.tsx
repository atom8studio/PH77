import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Scale,
  CalendarDays,
  CircleDollarSign,
  MessageCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import logo from '../assets/images/logo_horizontal.png';
import expensesVideo from '../assets/videos/Expenses.mp4';
import meetingVideo from '../assets/videos/BookMeeting.mp4';
import enquiryVideo from '../assets/videos/Enquiry.mp4';
import IntegrationsCarousel from '../components/IntegrationsCarousel';
import SEO from '../components/SEO';
import Header from '../components/Header';

const capabilities = [
  {
    icon: CircleDollarSign,
    title: 'Keep expenses up to date',
    description: 'Send receipts and expense updates by text, keep your records organised, and get a clearer view of where your business money is going.',
  },
  {
    icon: CalendarDays,
    title: 'Schedule without the back-and-forth',
    description: 'Let Robin book appointments, check availability, send reminders, and keep your team and customers on the same page.',
  },
  {
    icon: Scale,
    title: 'Answer customers faster',
    description: 'Give customers quick answers to common questions and make sure important enquiries and follow-ups do not get lost.',
  },
];

const videoDemos = [
  { title: 'Book appointments by text', description: 'Ask Robin to find a time, book the appointment, and remind everyone involved.', video: meetingVideo },
  { title: 'Keep customer requests moving', description: 'Turn everyday questions and follow-ups into clear actions without losing the thread.', video: enquiryVideo },
  { title: 'Update expenses in seconds', description: 'Send a receipt or expense update by message and keep your business records current.', video: expensesVideo },
];

const steps = [
  ['01', 'Text what you need', 'Message Robin through WhatsApp or Telegram, just like you would message a colleague.'],
  ['02', 'Let Robin handle it', 'Robin asks the right questions, checks details, and takes care of the admin in the background.'],
  ['03', 'Get back to running your business', 'Appointments, expenses, customer questions, and follow-ups stay organised in one familiar conversation.'],
];

export default function AIAdminPage() {
  const [activeVideo, setActiveVideo] = useState(0);

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
    <>
      <SEO title="AI Admin Assistant for Small Businesses | Atom8 Studio" description="Robin helps Malaysian small businesses manage appointments, expenses, customer enquiries, and daily admin through WhatsApp and Telegram." canonical="https://atom8studio.com/ai-admin" />
      <div className="relative isolate min-h-screen bg-neutral-50 text-neutral-900 overflow-hidden">
      <Header links={[{ href: '#capabilities', label: 'For your business' }, { href: '#demos', label: 'Demo' }]} ctaLabel="Get in touch" />

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
                  Your back office in your pocket
                </motion.span>
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-8xl font-display font-medium tracking-tight text-neutral-950 mb-6 leading-[1.02]"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                >
                  Admin,<br /><span className="text-gradient">handled.</span>
                </motion.h1>
                <motion.p
                  className="text-lg text-neutral-600 mb-8 leading-relaxed font-light max-w-xl"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                >
                  So you can focus on running your business.
                </motion.p>
                <motion.p
                  className="text-lg text-neutral-600 mb-8 leading-relaxed font-light max-w-xl"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                >
                  Robin is a virtual assistant for small businesses that works through text message. Schedule appointments, update expenses, answer customer questions, and keep daily tasks moving — without adding more software or staff.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <a href="#capabilities" className="inline-flex justify-center items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
                    See how Robin helps <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>

              <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.98, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
                <div className="relative rounded-3xl bg-white border border-neutral-200/80 p-5 sm:p-7 shadow-sm max-w-md ml-auto">
                  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-neutral-100">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-950 flex items-center justify-center text-white"><Sparkles className="w-5 h-5" /></div>
                    <div><p className="font-display font-medium">Robin</p><p className="text-xs text-neutral-500">Always ready to help</p></div>
                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="space-y-4 text-sm">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-neutral-700">Hi! What can I take care of today?</div>
                    <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-neutral-950 px-4 py-3 text-white">Book a customer for Tuesday at 2pm and add the RM180 supplier receipt to expenses.</div>
                    <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-neutral-700">Done — the appointment is booked and the receipt has been added. I’ll remind you before the customer arrives.</div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-xs text-neutral-400"><MessageCircle className="w-4 h-4" /> Message Robin...</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-display font-medium text-neutral-950 mb-4">The extra pair of hands your company needs</h2>
              <p className="text-neutral-600 font-light text-lg">Robin helps business owners stay responsive and organised through simple text messages. No new dashboard to learn — just delegate work in WhatsApp or Telegram. Robin speaks English and Mandarin.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {capabilities.map(({ icon: Icon, title, description }, index) => (
                <motion.div key={title} className="group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-neutral-100 p-3 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors"><Icon className="h-6 w-6" strokeWidth={1.5} /></div>
                  <h3 className="text-xl font-display font-medium text-neutral-950 mb-3">{title}</h3><p className="text-neutral-600 font-light leading-relaxed">{description}</p>
                </motion.div>
                
              ))}
            </div>
          </div>
          <IntegrationsCarousel />
        </section>

        <section id="demos" className="scroll-mt-20 bg-neutral-50 py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-neutral-200/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700">See Robin in action</span>
                <h2 className="text-3xl font-display font-medium text-neutral-950 sm:text-4xl">A little help, right when you need it</h2>
                <p className="mt-4 max-w-xl text-lg font-light leading-relaxed text-neutral-600">From a quick expense update to a new appointment, Robin turns simple messages into useful action.</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => setActiveVideo((activeVideo - 1 + videoDemos.length) % videoDemos.length)} aria-label="Previous demo" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-900 hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
                <button type="button" onClick={() => setActiveVideo((activeVideo + 1) % videoDemos.length)} aria-label="Next demo" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-900 hover:text-white"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
            <div className="grid items-center gap-8 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-8 md:grid-cols-[1.15fr_.85fr]">
              <video key={videoDemos[activeVideo].video} controls autoPlay muted loop playsInline className="w-full rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm">
                <source src={videoDemos[activeVideo].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div>
                <p className="mb-3 text-sm font-medium text-neutral-500">0{activeVideo + 1} / 0{videoDemos.length}</p>
                <h3 className="mb-4 text-2xl font-display font-medium text-neutral-950">{videoDemos[activeVideo].title}</h3>
                <p className="text-lg font-light leading-relaxed text-neutral-600">{videoDemos[activeVideo].description}</p>
                <div className="mt-8 flex gap-2">{videoDemos.map((demo, index) => <button key={demo.title} type="button" onClick={() => setActiveVideo(index)} aria-label={`View demo ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeVideo ? 'w-10 bg-neutral-950' : 'w-5 bg-neutral-300'}`} />)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-neutral-950 text-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"><div><h2 className="text-3xl lg:text-4xl font-display font-medium mb-6">Simple by design</h2><p className="text-neutral-400 font-light text-lg max-w-md">The best assistant is one you actually want to use. Robin meets you where you are, remembers the context, and keeps the interaction human.</p></div><div className="space-y-8">{steps.map(([number, title, description]) => <div key={number} className="flex gap-5 border-b border-neutral-800 pb-8"><span className="text-sm font-mono text-neutral-500 pt-1">{number}</span><div><h3 className="text-xl font-display font-medium mb-2">{title}</h3><p className="text-neutral-400 font-light leading-relaxed">{description}</p></div></div>)}</div></div></div>
        </section>

        <section id="contact" className="py-24 bg-neutral-50 scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 bg-neutral-200/50 border border-neutral-300/30 mb-6 font-display uppercase tracking-wider">Coming soon</span>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-neutral-950 mb-6 tracking-tight">Make more time for the work that grows your business</h2>
            <p className="text-neutral-600 font-light text-lg leading-relaxed mb-10">Join the waitlist and tell us which business tasks you would like Robin to handle by text message.</p>
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

      <footer className="bg-neutral-950 pt-12 pb-10 border-t border-neutral-900 text-neutral-400"><div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light"><a href="/" className="text-white font-display font-semibold text-lg">Atom8 Studio</a><div>© {new Date().getFullYear()} Atom8 Studio. All rights reserved.</div><a href="mailto:info@atom8studio.com" className="hover:text-white transition-colors">info@atom8studio.com</a></div></footer>
      </div>
    </>
  );
}
