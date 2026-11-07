import { motion } from 'motion/react';
import {
  Calculator,
  ShoppingBag,
  Truck,
  Zap,
  Megaphone,
  GraduationCap,
} from 'lucide-react';

const industries = [
  {
    title: 'Finance & Accounting',
    description: 'Automate closing, reconciliation, and reporting with accurate, audit-ready data.',
    icon: Calculator,
  },
  {
    title: 'Retail & F&B',
    description: 'Connect customer loyalty, campaign performance, orders, and reconciliation.',
    icon: ShoppingBag,
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Improve fleet and inventory visibility with connected operational workflows.',
    icon: Truck,
  },
  {
    title: 'Power & Renewable Energy',
    description: 'Track projects and procurement while automating approvals and payment workflows.',
    icon: Zap,
  },
  {
    title: 'Digital Marketing & Social Media',
    description: 'Measure campaign ROI, discover KOLs, and streamline influencer reporting.',
    icon: Megaphone,
  },
  {
    title: 'Education',
    description: 'Improve communication between students and university staff, and simplify internal coordination and documentation.',
    icon: GraduationCap,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4">Built around your business</p>
          <h2 className="text-3xl lg:text-4xl font-display font-medium text-neutral-950 mb-4">Engineering Across Industries</h2>
          <p className="text-neutral-600 font-light text-lg">
            We embed engineers with your team to build practical AI, automation, and data solutions around the way you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-neutral-100 p-3 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                <industry.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-medium text-neutral-950 mb-3">{industry.title}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">{industry.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
