import { Check, CircleHelp, Clipboard, RotateCcw, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { calculateBaseScoreV4, calculateQualScore } from 'cvss4';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';

type MetricKey = 'AV' | 'AC' | 'AT' | 'PR' | 'UI' | 'VC' | 'VI' | 'VA' | 'SC' | 'SI' | 'SA';
type Metrics = Record<MetricKey, string>;

type Metric = {
  key: MetricKey;
  label: string;
  helper: string;
  options: Array<{ value: string; label: string; detail: string }>;
};

const initialMetrics: Metrics = {
  AV: 'N', AC: 'L', AT: 'N', PR: 'N', UI: 'N',
  VC: 'H', VI: 'H', VA: 'H', SC: 'N', SI: 'N', SA: 'N',
};

const metricGroups: Array<{ title: string; description: string; metrics: Metric[] }> = [
  {
    title: 'Exploitability', description: 'How an attacker reaches and exploits the vulnerability.', metrics: [
      { key: 'AV', label: 'Attack Vector', helper: 'Where the attack must originate.', options: [
        { value: 'N', label: 'Network', detail: 'Remotely exploitable over a network' }, { value: 'A', label: 'Adjacent', detail: 'Same restricted network segment' }, { value: 'L', label: 'Local', detail: 'Local system access required' }, { value: 'P', label: 'Physical', detail: 'Physical interaction required' },
      ] },
      { key: 'AC', label: 'Attack Complexity', helper: 'Conditions beyond the attacker’s control.', options: [
        { value: 'L', label: 'Low', detail: 'No special conditions' }, { value: 'H', label: 'High', detail: 'Specific conditions are required' },
      ] },
      { key: 'AT', label: 'Attack Requirements', helper: 'Prerequisites for a successful attack.', options: [
        { value: 'N', label: 'None', detail: 'No prerequisite conditions' }, { value: 'P', label: 'Present', detail: 'A prerequisite condition must exist' },
      ] },
      { key: 'PR', label: 'Privileges Required', helper: 'Access needed before exploitation.', options: [
        { value: 'N', label: 'None', detail: 'No authorization required' }, { value: 'L', label: 'Low', detail: 'Basic user privileges required' }, { value: 'H', label: 'High', detail: 'Significant privileges required' },
      ] },
      { key: 'UI', label: 'User Interaction', helper: 'Whether another person must act.', options: [
        { value: 'N', label: 'None', detail: 'No user involvement' }, { value: 'P', label: 'Passive', detail: 'User must be exposed to the attack' }, { value: 'A', label: 'Active', detail: 'User must perform an action' },
      ] },
    ],
  },
  {
    title: 'Vulnerable System Impact', description: 'Direct impact to the system containing the vulnerability.', metrics: [
      { key: 'VC', label: 'Confidentiality', helper: 'Exposure of information in the vulnerable system.', options: [{ value: 'H', label: 'High', detail: 'Total loss of confidentiality' }, { value: 'L', label: 'Low', detail: 'Some disclosure of information' }, { value: 'N', label: 'None', detail: 'No confidentiality impact' }] },
      { key: 'VI', label: 'Integrity', helper: 'Modification of data in the vulnerable system.', options: [{ value: 'H', label: 'High', detail: 'Total loss of integrity' }, { value: 'L', label: 'Low', detail: 'Some data can be modified' }, { value: 'N', label: 'None', detail: 'No integrity impact' }] },
      { key: 'VA', label: 'Availability', helper: 'Disruption of service in the vulnerable system.', options: [{ value: 'H', label: 'High', detail: 'Total loss of availability' }, { value: 'L', label: 'Low', detail: 'Reduced performance or interruption' }, { value: 'N', label: 'None', detail: 'No availability impact' }] },
    ],
  },
  {
    title: 'Subsequent System Impact', description: 'Impact on systems beyond the vulnerable component.', metrics: [
      { key: 'SC', label: 'Confidentiality', helper: 'Exposure of data in subsequent systems.', options: [{ value: 'H', label: 'High', detail: 'Total loss of confidentiality' }, { value: 'L', label: 'Low', detail: 'Some disclosure of information' }, { value: 'N', label: 'None', detail: 'No confidentiality impact' }] },
      { key: 'SI', label: 'Integrity', helper: 'Modification of data in subsequent systems.', options: [{ value: 'H', label: 'High', detail: 'Total loss of integrity' }, { value: 'L', label: 'Low', detail: 'Some data can be modified' }, { value: 'N', label: 'None', detail: 'No integrity impact' }] },
      { key: 'SA', label: 'Availability', helper: 'Disruption to subsequent systems.', options: [{ value: 'H', label: 'High', detail: 'Total loss of availability' }, { value: 'L', label: 'Low', detail: 'Reduced performance or interruption' }, { value: 'N', label: 'None', detail: 'No availability impact' }] },
    ],
  },
];

const severityStyles: Record<string, string> = {
  None: 'bg-slate-100 text-slate-700 ring-slate-200', Low: 'bg-sky-100 text-sky-800 ring-sky-200', Medium: 'bg-amber-100 text-amber-800 ring-amber-200', High: 'bg-orange-100 text-orange-800 ring-orange-200', Critical: 'bg-red-100 text-red-800 ring-red-200',
};

export default function CvssCalculatorPage() {
  const [metrics, setMetrics] = useState<Metrics>(initialMetrics);
  const [copied, setCopied] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const vector = `CVSS:4.0/${Object.entries(metrics).map(([key, value]) => `${key}:${value}`).join('/')}`;
  const score = useMemo(() => calculateBaseScoreV4(vector), [vector]);
  const severity = calculateQualScore(score);

  const updateMetric = (key: MetricKey, value: string) => setMetrics(current => ({ ...current, [key]: value }));
  const copyVector = async () => {
    await navigator.clipboard.writeText(vector);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setGuideOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-950">
      <SEO title="CVSS v4.0 Base Score Calculator | Atom8 Studio" description="Calculate CVSS v4.0 Base Scores using the standard technical severity metrics." canonical="https://atom8studio.com/cvss-calc" />
      <Header links={[{ href: '/', label: 'Home' }, { href: '/robin', label: 'Robin' }]} showCta={false} />

      <main className="relative flex-grow overflow-hidden pt-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-105 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/70 via-neutral-50/70 to-neutral-50" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 max-w-3xl">
            <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">Technical severity, <span className="text-gradient">made clear.</span></h1>
            <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-neutral-700">Select the vulnerability’s inherent technical characteristics to generate a CVSS v4.0 Base Score and vector.</p>
            <button type="button" onClick={() => setGuideOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"><CircleHelp size={17} className="text-[#607D99]" />How this calculator works</button>
          </div>

          <section className="mb-12 max-w-3xl" aria-labelledby="cvss-video-title">
            <h2 id="cvss-video-title" className="mb-4 font-display text-2xl font-semibold text-neutral-950">Web Security 101: OWASP Top 10</h2>
            <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm"><iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/bBvqhmqbNf0?rel=0" title="Web Security 101: OWASP Top 10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
          </section>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-6">
            {metricGroups.map(group => (
              <section key={group.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-5 py-5 sm:px-7"><h2 className="font-display text-xl font-semibold">{group.title}</h2><p className="mt-1 text-sm text-slate-500">{group.description}</p></div>
                <div className="divide-y divide-slate-100">
                  {group.metrics.map(metric => (
                    <div key={metric.key} className="px-5 py-5 sm:px-7">
                      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><div><span className="mr-2 font-mono text-xs font-semibold text-[#607D99]">{metric.key}</span><span className="font-medium">{metric.label}</span></div><span className="text-sm text-slate-500">{metric.helper}</span></div>
                      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                        {metric.options.map(option => {
                          const selected = metrics[metric.key] === option.value;
                          return <button type="button" key={option.value} onClick={() => updateMetric(metric.key, option.value)} className={`rounded-xl border px-3 py-3 text-left transition ${selected ? 'border-[#7E9BB7] bg-[#7E9BB7]/10 ring-1 ring-[#7E9BB7]' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`} aria-pressed={selected}>
                            <div className="flex items-center justify-between gap-2"><span className="text-sm font-semibold">{option.label}</span><span className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${selected ? 'bg-[#607D99] text-white' : 'bg-slate-100 text-slate-500'}`}>{option.value}</span></div><p className="mt-1 text-xs leading-5 text-slate-500">{option.detail}</p>
                          </button>;
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 lg:top-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">Base score</p>
            <div className="mt-4 flex items-end justify-between"><span className="font-display text-7xl font-semibold tracking-tighter">{score.toFixed(1)}</span><span className={`mb-2 rounded-full px-3 py-1 text-sm font-semibold ring-1 ${severityStyles[severity]}`}>{severity}</span></div>
            <div className="mt-6 grid grid-cols-5 overflow-hidden rounded-lg text-xs font-semibold text-white" aria-label="CVSS severity scale"><span className="bg-slate-500 px-1 py-2 text-center">0</span><span className="bg-sky-500 px-1 py-2 text-center">0.1–3.9</span><span className="bg-amber-500 px-1 py-2 text-center">4–6.9</span><span className="bg-orange-500 px-1 py-2 text-center">7–8.9</span><span className="bg-red-600 px-1 py-2 text-center">9–10</span></div>
            <div className="mt-7 border-t border-slate-100 pt-6"><p className="mb-2 text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Vector</p><code className="block break-all rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100">{vector}</code>
              <button type="button" onClick={copyVector} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">{copied ? <Check size={16} /> : <Clipboard size={16} />}{copied ? 'Copied vector' : 'Copy vector'}</button>
              <button type="button" onClick={() => setMetrics(initialMetrics)} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"><RotateCcw size={15} />Reset example</button>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-500">Base metrics express intrinsic technical severity. They do not account for current exploitation, compensating controls, or your organization’s environment.</p>
          </aside>
        </div>
        <p className="mt-10 text-xs leading-5 text-slate-500">CVSS is a trademark of FIRST.org, Inc. This calculator implements the CVSS v4.0 Base metric model; verify results against the official <a className="underline underline-offset-2 hover:text-slate-900" href="https://www.first.org/cvss/calculator/v4.0" target="_blank" rel="noreferrer">CVSS calculator</a> for formal publication.</p>
        </div>
      </main>
      <Footer />
      {guideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4" role="presentation" onMouseDown={() => setGuideOpen(false)}>
          <section className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="metric-guide-title" onMouseDown={event => event.stopPropagation()}>
            <div className="sticky top-0 flex items-start justify-between border-b border-slate-100 bg-white px-6 py-5 sm:px-8">
              <div><p className="text-xs font-semibold tracking-[0.16em] text-[#607D99] uppercase">Quick guide</p><h2 id="metric-guide-title" className="mt-1 font-display text-2xl font-semibold">What the CVSS Base Score measures</h2></div>
              <button type="button" onClick={() => setGuideOpen(false)} className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label="Close metric guide"><X size={21} /></button>
            </div>
            <div className="space-y-7 px-6 py-6 sm:px-8">
              <p className="text-base leading-7 text-slate-600">This calculator rates a vulnerability’s <strong className="font-semibold text-slate-900">intrinsic technical severity</strong> on a 0.0–10.0 scale. Choose the conditions needed to exploit it, then its direct and downstream impact. The result is a standardized score and a vector that records every choice.</p>
              <div className="rounded-xl border border-[#7E9BB7]/25 bg-[#7E9BB7]/10 p-4 text-sm leading-6 text-neutral-800"><strong>What it does not measure:</strong> whether attackers are exploiting the issue now, the value of your affected assets, exposure in your environment, or the effectiveness of your compensating controls. Use CVSS Threat and Environmental metrics for those decisions.</div>
              <div className="grid gap-4 sm:grid-cols-3">
                <article className="rounded-xl border border-slate-200 p-4"><p className="font-mono text-xs font-semibold text-[#607D99]">01 · AV → UI</p><h3 className="mt-2 font-semibold">Exploitability</h3><p className="mt-2 text-sm leading-6 text-slate-600">How reachable the flaw is, how difficult it is to exploit, what conditions or privileges are needed, and whether a user must participate.</p></article>
                <article className="rounded-xl border border-slate-200 p-4"><p className="font-mono text-xs font-semibold text-[#607D99]">02 · VC / VI / VA</p><h3 className="mt-2 font-semibold">Direct impact</h3><p className="mt-2 text-sm leading-6 text-slate-600">The loss of confidentiality, integrity, or availability in the vulnerable system itself.</p></article>
                <article className="rounded-xl border border-slate-200 p-4"><p className="font-mono text-xs font-semibold text-[#607D99]">03 · SC / SI / SA</p><h3 className="mt-2 font-semibold">Downstream impact</h3><p className="mt-2 text-sm leading-6 text-slate-600">The impact that can propagate to other systems beyond the vulnerable component.</p></article>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Metric reference</h3>
                <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200">
                  {metricGroups.map(group => <div key={group.title} className="p-4"><h4 className="font-semibold">{group.title}</h4><p className="mt-1 text-sm text-slate-500">{group.description}</p><dl className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">{group.metrics.map(metric => <div key={metric.key} className="flex gap-2 text-sm"><dt className="shrink-0 font-mono font-semibold text-[#607D99]">{metric.key}</dt><dd className="text-slate-600"><strong className="font-medium text-slate-900">{metric.label}:</strong> {metric.helper}</dd></div>)}</dl></div>)}
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-500">Tip: start with the least favorable conditions that must be true for the vulnerability to be exploited. The score updates immediately as you make each selection.</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
