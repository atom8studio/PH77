export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-b border-neutral-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neutral-950 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl leading-none">N</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">Atom8 Studio</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Services</a>
          <a href="#approach" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Approach</a>
          <a href="#case-studies" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Case Studies</a>
          <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center">
          <a href="#contact" className="text-sm font-medium text-white bg-neutral-950 px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
            Book Assessment
          </a>
        </div>
      </div>
    </header>
  );
}
