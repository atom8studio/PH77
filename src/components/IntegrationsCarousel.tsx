import { motion } from 'motion/react';
import { Calendar, Mail, FileText, CheckSquare, Send, MessageCircle } from 'lucide-react';

const integrations = [
  { name: 'Calendar', icon: Calendar, color: 'text-red-500' },
  { name: 'Whatsapp', icon: MessageCircle, color: 'text-green-500' },
  { name: 'ToDos', icon: FileText, color: 'text-yellow-500' },
  { name: 'Reminders', icon: CheckSquare, color: 'text-blue-500' },
  { name: 'Mail', icon: Mail, color: 'text-sky-500' },
  { name: 'Telegram', icon: Send, color: 'text-sky-500' },
  
];

export default function IntegrationsCarousel() {
  return (
    <div className="w-full mt-24 flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10 text-center"
      >
        Works with your favorite apps
      </motion.p>
      
      <div className="relative w-full max-w-[100vw] overflow-hidden flex">
        {/* Left and right fade gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FBFBFB] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FBFBFB] to-transparent z-10" />

        <div className="flex w-max animate-marquee whitespace-nowrap py-4">
          {[...integrations, ...integrations, ...integrations].map((app, idx) => (
            <div key={idx} className="pr-8">
              <div
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-sm border border-black/5"
              >
                <div className={`p-2 rounded-xl bg-gray-50 ${app.color}`}>
                  <app.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-800 text-[15px]">{app.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
