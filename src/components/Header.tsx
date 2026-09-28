import myLogo from '../assets/images/logo_horizontal.png';

type HeaderProps = {
  links?: Array<{ href: string; label: string }>;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Header({ links, ctaHref = '#contact', ctaLabel = 'Book Assessment' }: HeaderProps) {
  const navLinks = links ?? [
    { href: '#services', label: 'Services' },
    { href: '#approach', label: 'Approach' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' },
    { href: '/robin', label: 'Robin' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-b border-neutral-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-25 rounded-lg flex items-center justify-center">
            <a href="/" className="w-25 rounded-lg flex items-center" aria-label="Atom8 Studio home">
              <img 
                src={myLogo}
                alt="Atom8 Studio Logo" 
                className="object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
        
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">{link.label}</a>)}
        </nav>
        
        <div className="flex items-center">
          <a href={ctaHref} className="text-sm font-medium text-white bg-neutral-950 px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
