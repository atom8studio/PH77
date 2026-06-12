export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-neutral-950 font-display font-bold text-xl leading-none">N</span>
              </div>
              <span className="font-display font-semibold text-lg text-white tracking-tight">Nexa Consult</span>
            </div>
            <p className="max-w-xs text-sm font-light leading-relaxed mb-6">
              An AI Transformation & Automation Consultancy helping Malaysian mid-sized enterprises navigate implementation and governance.
            </p>
            <div className="flex gap-4">
               {/* Placeholders for social icons */}
               <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-600 transition-colors cursor-pointer">
                 <span className="text-sm font-medium">IN</span>
               </div>
               <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-600 transition-colors cursor-pointer">
                 <span className="text-sm font-medium">X</span>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display mt-2 md:mt-0">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#expertise" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#approach" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display mt-2 md:mt-0">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="mailto:hello@nexaconsult.com.my" className="hover:text-white transition-colors">hello@nexaconsult.com.my</a></li>
              <li><span className="text-neutral-500">Kuala Lumpur, Malaysia</span></li>
              <li className="mt-6">
                <a href="#contact" className="inline-block border-b border-neutral-600 pb-1 hover:text-white hover:border-white transition-colors">
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>&copy; {new Date().getFullYear()} Nexa AI Consultancy. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
