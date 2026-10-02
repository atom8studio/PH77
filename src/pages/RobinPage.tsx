import { useEffect, useState } from 'react';
import { Bell, CalendarDays, ChevronLeft, ChevronRight, CircleDollarSign, MessageCircleMore, UsersRound } from 'lucide-react';
import Header from '../components/Header';
import IntegrationsCarousel from '../components/IntegrationsCarousel';
import SEO from '../components/SEO';

const audiences = [
  { title: 'For professionals', description: 'Keep your own day moving without juggling another task app or dashboard.', points: ['Calendar and meeting coordination', 'Reminders and follow-ups', 'Expense tracking'] },
  { title: 'For small businesses', description: 'Keep everyday customer and team admin moving in one familiar conversation.', points: ['Customer enquiries and appointments', 'Receipts, expenses and updates', 'Team coordination and follow-ups'] },
];

const capabilities = [
  { icon: CalendarDays, title: 'Schedule and coordinate', description: 'Find a time, book the meeting, send the invite and keep everyone informed.' },
  { icon: Bell, title: 'Remember and follow up', description: 'Set reminders for deadlines, renewals and the tasks that are easy to miss.' },
  { icon: CircleDollarSign, title: 'Track expenses', description: 'Log receipts and expense updates by message, then ask for a clear summary.' },
  { icon: MessageCircleMore, title: 'Keep requests moving', description: 'Turn customer questions and everyday requests into clear next actions.' },
  { icon: UsersRound, title: 'Retrieve and trigger work', description: 'Find the information you need and start the next step without switching tools.' },
];

const videoDemos = [
  { title: 'Stay up to date with chat summaries', description: 'Ask Robin to summarize your chats so you can quickly catch up on what matters.', videoId: 'U7CImgSgAOI' },
  { title: 'Stay on top of your inbox', description: 'Ask Robin to find, organize, and act on the emails that matter.', videoId: 'wYI7c3X0dR0' },
  { title: 'Keep personal expenses up to date', description: 'Log spending from a receipt or message and ask Robin for a quick total.', videoId: 'PWHtz619tt4' },
  { title: 'Manage your calendar with ease', description: 'Coordinate your schedule and keep appointments moving without opening another app.', videoId: 'hkeWvQCvz4M' },
  { title: 'Analyse data in seconds', description: 'Turn everyday information into clear, useful answers and next steps.', videoId: 'eZtV7Sd7vac' },
  { title: 'Find the information you need', description: 'Retrieve the right details quickly, without searching across multiple tools.', videoId: 'XM91NC0RFIY' },
];

const steps = [
  ['01', 'Message Robin', 'Write what you need in plain language, the same way you would message a colleague.'],
  ['02', 'Robin takes action', 'Robin checks the details and takes care of the task in the background.'],
  ['03', 'You get confirmation', 'A short reply lets you know it is done. Nothing else to open or chase.'],
];

export default function RobinPage() {
  const [activeVideo, setActiveVideo] = useState(0);

  const requestVideo = (index: number) => {
    if (index !== activeVideo) setActiveVideo(index);
  };

  useEffect(() => {
    const scriptSrc = 'https://tally.so/widgets/embed.js';
    const loadTally = () => window.Tally?.loadEmbeds();
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.onload = loadTally;
      document.body.appendChild(script);
    } else {
      loadTally();
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <SEO title="Robin | Your Admin, Handled | Atom8 Studio" description="Robin turns messages into completed work, from appointments and reminders to expenses, customer requests and follow-ups." canonical="https://atom8studio.com/robin" />
      <Header links={[{ href: '#who', label: 'Who it helps' }, { href: '#capabilities', label: 'Capabilities' }, { href: '#demos', label: 'Demos' }]} ctaLabel="Get started" />

      <main className="pt-20">
        <section className="relative overflow-hidden pb-24 pt-24 lg:pb-32 lg:pt-36">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#7E9BB7]/20 via-neutral-50 to-neutral-50" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
            <div className="lg:col-span-7">
              <p className="mb-8 inline-flex rounded-full border border-[#7E9BB7]/30 bg-[#7E9BB7]/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-[#607D99]">For professionals and small teams</p>
              <h1 className="mb-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-neutral-950 sm:text-6xl lg:text-8xl">Your admin,<br /><span className="text-gradient">handled.</span></h1>
              <p className="mb-8 max-w-2xl text-xl font-light leading-relaxed text-neutral-700">Robin turns simple messages into completed work: appointments, reminders, expenses, customer requests and follow-ups.</p>
              <p className="mb-9 max-w-xl text-base font-light leading-relaxed text-neutral-500">Less admin without another dashboard. Just message Robin through the tools you already use.</p>
              <div className="flex flex-col gap-4 sm:flex-row"><a href="#contact" className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800">Tell us what Robin should handle</a><a href="#demos" className="inline-flex items-center justify-center rounded-full border border-neutral-200 px-8 py-3.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white">Watch the demos</a></div>
            </div>
            <div className="lg:col-span-5">
              <div className="ml-auto max-w-md rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3 border-b border-neutral-100 pb-5"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7E9BB7]/15 text-[#607D99]"><MessageCircleMore className="h-5 w-5" /></span><div><p className="font-display font-medium">Robin</p><p className="text-xs text-neutral-500">Ready to help</p></div><span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" /></div>
                <div className="space-y-4 text-sm"><div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-neutral-950 px-4 py-3 text-white">Book a customer for Tuesday at 2pm, then remind me to submit expenses on Friday.</div><div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-neutral-700">Done. The appointment is booked and your reminder is set.</div><div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-neutral-950 px-4 py-3 text-white">What do I need to follow up on?</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="who" className="scroll-mt-20 bg-white py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-14 max-w-2xl"><p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">Who Robin helps</p><h2 className="mb-5 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">One conversation, built around the work you do.</h2><p className="text-lg font-light leading-relaxed text-neutral-600">Robin works for people who need less to remember and teams who need everyday work to keep moving.</p></div><div className="grid gap-6 md:grid-cols-2">{audiences.map((audience) => <article key={audience.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8"><h3 className="mb-3 font-display text-2xl font-medium">{audience.title}</h3><p className="mb-7 leading-relaxed text-neutral-600">{audience.description}</p><ul className="space-y-3">{audience.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm text-neutral-700"><span className="h-2 w-2 rounded-full bg-[#7E9BB7]" />{point}</li>)}</ul></article>)}</div></div></section>

        <section id="capabilities" className="scroll-mt-20 py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-14 max-w-2xl"><p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">What Robin handles</p><h2 className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">Everyday admin, off your plate.</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">{capabilities.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-6"><div className="mb-5 inline-flex rounded-xl bg-[#7E9BB7]/15 p-3 text-[#607D99]"><Icon className="h-5 w-5" /></div><h3 className="mb-3 font-display text-lg font-medium">{title}</h3><p className="text-sm leading-relaxed text-neutral-600">{description}</p></article>)}</div></div><IntegrationsCarousel /></section>

        <section id="demos" className="scroll-mt-20 bg-white py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">See Robin in action</p><h2 className="font-display text-3xl font-medium text-neutral-950 sm:text-4xl">Six tasks. One conversation.</h2><p className="mt-4 max-w-xl text-lg font-light leading-relaxed text-neutral-600">From one quick update to a customer request, Robin turns messages into useful action.</p></div>
              <div className="flex gap-2"><button type="button" onClick={() => requestVideo((activeVideo - 1 + videoDemos.length) % videoDemos.length)} aria-label="Previous demo" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-[#7E9BB7] hover:bg-[#7E9BB7]/10"><ChevronLeft className="h-5 w-5" /></button><button type="button" onClick={() => requestVideo((activeVideo + 1) % videoDemos.length)} aria-label="Next demo" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-[#7E9BB7] hover:bg-[#7E9BB7]/10"><ChevronRight className="h-5 w-5" /></button></div>
            </div>
            <div className="grid items-center gap-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm sm:p-8 md:grid-cols-[1.15fr_.85fr]">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm">
                <div className="aspect-[9/16] max-h-[620px] bg-neutral-950"><iframe key={videoDemos[activeVideo].videoId} src={`https://www.youtube.com/embed/${videoDemos[activeVideo].videoId}?rel=0&origin=${encodeURIComponent(window.location.origin)}`} title={videoDemos[activeVideo].title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
              </div>
              <div><p className="mb-3 text-sm font-medium text-[#607D99]">{String(activeVideo + 1).padStart(2, '0')} / {String(videoDemos.length).padStart(2, '0')}</p><h3 className="mb-4 font-display text-2xl font-medium text-neutral-950">{videoDemos[activeVideo].title}</h3><p className="text-lg font-light leading-relaxed text-neutral-600">{videoDemos[activeVideo].description}</p><div className="mt-8 flex flex-wrap gap-2">{videoDemos.map((demo, index) => <button key={demo.title} type="button" onClick={() => requestVideo(index)} aria-label={`View ${demo.title}`} aria-current={index === activeVideo} className={`h-2 rounded-full transition-all ${index === activeVideo ? 'w-10 bg-[#7E9BB7]' : 'w-5 bg-neutral-300 hover:bg-[#7E9BB7]/60'}`} />)}</div></div>
            </div>
          </div>
        </section>

        <section id="how" className="bg-neutral-950 py-24 text-white"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-14 max-w-2xl"><p className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-[#7E9BB7]">How it works</p><h2 className="mb-5 font-display text-3xl font-medium sm:text-4xl">Simple by design.</h2><p className="text-lg font-light leading-relaxed text-neutral-400">No new workflow to learn. Just start with the message you would have sent to a colleague.</p></div><div className="grid gap-6 md:grid-cols-3">{steps.map(([number, title, description]) => <article key={number} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7"><p className="mb-5 font-display text-sm font-semibold text-[#7E9BB7]">{number}</p><h3 className="mb-3 font-display text-xl font-medium">{title}</h3><p className="font-light leading-relaxed text-neutral-400">{description}</p></article>)}</div></div></section>

        <section id="contact" className="scroll-mt-20 bg-neutral-50 py-24"><div className="mx-auto max-w-3xl px-6 text-center lg:px-8"><p className="mb-5 inline-flex rounded-full border border-[#7E9BB7]/30 bg-[#7E9BB7]/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wider text-[#607D99]">Coming soon</p><h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">Tell us what you want Robin to handle.</h2><p className="mb-10 text-lg font-light leading-relaxed text-neutral-600">Whether it is personal admin, small-business admin or both, tell us where a simple conversation could save you time.</p></div><div className="mx-auto max-w-3xl px-6 text-center lg:px-8"><iframe data-tally-src="https://tally.so/embed/Gxy1No?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="500" frameBorder="0" marginHeight={0} marginWidth={0} title="Robin waitlist" /></div></section>
      </main>

      <footer className="border-t border-neutral-900 bg-neutral-950 px-6 py-10 text-neutral-400 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs font-light md:flex-row"><a href="/" className="font-display text-lg font-semibold text-white">Atom8 Studio</a><div className="flex items-center gap-4">© {new Date().getFullYear()} Atom8 Studio. All rights reserved.<a href="/virtual-assistant/privacy" className="transition-colors hover:text-white">Privacy Policy</a></div><a href="mailto:info@atom8studio.com" className="transition-colors hover:text-white">info@atom8studio.com</a></div></footer>
    </div>
  );
}
