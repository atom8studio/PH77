import { useEffect, useState } from 'react';
import { ArrowRight, BellRing, Bolt, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import logo from '../assets/images/logo_horizontal.png';
import budgetVideo from '../assets/videos/Budget.mp4';
import calendarVideo from '../assets/videos/Calendar.mp4';
import compareVideo from '../assets/videos/Compare.mp4';

const integrations = ['Gmail', 'Calendar', 'Notion', 'Telgram', 'WhatsApp', 'Google Docs', 'Google Sheets'];

const benefits = [
  { icon: Bolt, title: 'Takes action, not just notes', description: 'Book and reschedules meetings, and drafts replies on your behalf.', tone: 'coral' },
  { icon: BellRing, title: 'Stay a step ahead', description: 'Surfaces conflicts and changes before they become your problem.', tone: 'slate' },
  { icon: MessageCircle, title: 'Meets you where you are', description: 'Seamlessly integrated in WhatsApp, and Telegram — no new app required.', tone: 'coral' },
];

const steps = [
  ['1', 'Send a message', 'Plain language, no commands to memorize.'],
  ['2', 'It takes it from there', 'Asks what matters, get your permission and handles them in the background.'],
  ['3', 'Forget it', 'Your plan is updated, admin tasks are handled, and your day is freed up for what matters.'],
];

const videoDemos = [
  { title: 'Update expenses in seconds', description: 'Send a receipt or expense update by message and keep your business records current.', video: budgetVideo },
  { title: 'Schedule your next meeting', description: 'Ask Robin to find a time, book the calendar invite, and remind everyone involved.', video: calendarVideo },
  { title: 'Avoid information overload', description: 'Go through information, and turn everyday questions into clear actions.', video: compareVideo },
];

export default function BusinessAdminPage() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    document.title = 'Your personal assistant | Atom8 Studio';
    return () => { document.title = 'Atom8 Studio - AI Consultancy for ASEAN Enterprises'; };
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
    <div className="min-h-screen overflow-hidden bg-[#FDFBF7] font-sans text-[#2C2C2A] antialiased">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="flex w-25 items-center rounded-lg" aria-label="Atom8 Studio home">
            <img src={logo} alt="Atom8 Studio" className="rounded-sm object-contain" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Business admin navigation">
            <a href="#how-it-works" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">How it works</a>
            <a href="#demo" className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">Demo</a>
          </nav>
          <a href="#contact" className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800">Get started</a>
        </div>
      </header>

      <main className="pt-20">
        <section id="product" className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.1fr_.8fr] lg:px-8 lg:pb-32 lg:pt-20">
          <div>
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-neutral-800 bg-neutral-200/60 border border-neutral-300/30 mb-8 font-display tracking-wide uppercase">YOUR ON THE GO ASSISTANT</div>
            <h1 className="mb-5 max-w-2xl font-display text-5xl font-medium leading-[1.08] tracking-tight text-[#2C2C2A] sm:text-6xl">Free your head for what’s next</h1>
            <p className="mb-7 max-w-xl text-lg leading-relaxed text-[#5F5E5A]">Robins handles the follow-ups, scheduling, reminders, and small decisions that quietly fill your day. Just send a message, and it gets the work moving — so you can stay focused on the bigger picture.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex justify-center items-center gap-2 rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
                See how Robin helps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-[#0B141A] p-2 shadow-2xl">
            <div className="flex items-center gap-3 rounded-t-[1.35rem] bg-[#075E54] px-4 py-3 text-white"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#128C7E] text-sm text-[#DCF8C6]">n</span><span className="text-sm font-medium">Robin</span></div>
            <div className="min-h-[290px] bg-[#ECE5DD] p-4 text-sm"><div className="mb-3 max-w-[82%] rounded-lg bg-white p-3 shadow-sm">Please move my 9am and book a haircut in its place</div><div className="mb-3 ml-auto max-w-[82%] rounded-lg bg-[#DCF8C6] p-3 shadow-sm">Done. Your 9am is now 11am, I have notified David.</div><div className="ml-auto max-w-[82%] rounded-lg bg-[#DCF8C6] p-3 shadow-sm">You're booked at One Hair for 9:30am — I shall update your calendar</div></div>
          </div>
        </section>

        <section id="how-it-works" className="bg-[#F3EDE0] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-7 text-center font-display text-3xl font-medium">Works with the tools you already use</h2>
            <div className="mb-12 flex flex-wrap justify-center gap-2">{integrations.map(item => <span key={item} className="rounded-full border border-[#D3D1C7] bg-white px-4 py-2 text-sm text-[#444441]">{item}</span>)}</div>
            <div className="grid gap-4 md:grid-cols-3">
              {
                benefits.map(({ icon: Icon, title, description, tone }) => <div key={title} className={`rounded-2xl p-6 ${tone === 'coral' ? 'bg-[#FAECE7] text-[#4A1B0C]' : tone === 'slate' ? 'bg-[#F0EADD] text-[#33424A]' : 'bg-[#FBEAF0] text-[#4B1528]'}`}><div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#D85A30] text-white"><Icon className="h-4 w-4" /></div>
                  <h3 className="mb-2 font-display text-lg font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{description}</p>
                </div>)}
              </div>
            </div>
            </section>

        <section className="bg-[#33302B] px-6 py-24 text-[#F6F1E7] lg:px-8"><h2 className="mb-12 text-center font-display text-3xl font-medium">How it works</h2><div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">{steps.map(([number, title, description]) => <div key={number} className="relative text-center"><span className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#8CA2AE] text-sm font-medium text-[#26313A]">{number}</span><h3 className="mb-2 font-display text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-[#B5AFA1]">{description}</p></div>)}</div></section>

        <section id="demo" className="scroll-mt-20 bg-[#F3EDE0] px-6 py-24 lg:px-8"><div className="mx-auto max-w-5xl"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><span className="mb-4 inline-flex rounded-full bg-[#F0EADD] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4A5D68]">See Robin in action</span><h2 className="font-display text-3xl font-medium text-[#2C2C2A] sm:text-4xl">A little help, right when you need it</h2><p className="mt-4 max-w-xl text-lg font-light leading-relaxed text-[#5F5E5A]">From a quick expense update to a new appointment, Robin turns simple messages into useful action.</p></div><div className="flex gap-2"><button type="button" onClick={() => setActiveVideo((activeVideo - 1 + videoDemos.length) % videoDemos.length)} aria-label="Previous demo" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8CA2AE] text-[#4A5D68] transition hover:bg-[#2C2C2A] hover:text-white"><ChevronLeft className="h-5 w-5" /></button><button type="button" onClick={() => setActiveVideo((activeVideo + 1) % videoDemos.length)} aria-label="Next demo" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8CA2AE] text-[#4A5D68] transition hover:bg-[#2C2C2A] hover:text-white"><ChevronRight className="h-5 w-5" /></button></div></div><div className="grid items-center gap-8 rounded-3xl border border-[#D3D1C7] bg-white p-5 shadow-sm sm:p-8 md:grid-cols-[1.15fr_.85fr]"><video key={videoDemos[activeVideo].video} controls autoPlay muted loop playsInline className="w-full rounded-2xl border border-[#D3D1C7] bg-[#F0EADD] shadow-sm"><source src={videoDemos[activeVideo].video} type="video/mp4" />Your browser does not support the video tag.</video><div><p className="mb-3 text-sm font-medium text-[#8CA2AE]">0{activeVideo + 1} / 0{videoDemos.length}</p><h3 className="mb-4 font-display text-2xl font-medium text-[#2C2C2A]">{videoDemos[activeVideo].title}</h3><p className="text-lg font-light leading-relaxed text-[#5F5E5A]">{videoDemos[activeVideo].description}</p><div className="mt-8 flex gap-2">{videoDemos.map((demo, index) => <button key={demo.title} type="button" onClick={() => setActiveVideo(index)} aria-label={`View demo ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === activeVideo ? 'w-10 bg-[#2C2C2A]' : 'w-5 bg-[#D3D1C7]'}`} />)}</div></div></div></div></section>

        <section id="contact" className="bg-[#FDFBF7] px-6 py-24 text-center lg:px-8">
          <div className="mx-auto max-w-xl">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 bg-neutral-200/50 border border-neutral-300/30 mb-6 font-display uppercase tracking-wider">Coming soon</span>
            <h2 className="font-display text-4xl font-medium leading-tight text-[#2C2C2A]">Off your mind, into a chat</h2>
            <p className="mt-4 leading-relaxed text-[#5F5E5A]">If you'd like to be part of the pilot program, we'd welcome the chance to speak with you.</p>
          </div>

          <div className="max-w-3xl mx-auto px-6 py-6 lg:px-8 text-center">
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
    </div>
  );
}
