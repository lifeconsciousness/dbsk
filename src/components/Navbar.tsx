interface NavbarProps {
  onNavigate?: (page: 'home' | 'learning' | 'shop') => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => onNavigate?.('home')}
              className="font-extrabold text-2xl tracking-tight text-brand-blue hover:opacity-80 transition"
            >
              DBSK
            </button>
          </div>
          <div className="hidden md:block">
            {/* <a href="#features" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium">How it Works</a> */}
            <button 
              onClick={() => onNavigate?.('learning')}
              className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium"
            >
              Learn
            </button>
            <button 
              onClick={() => onNavigate?.('shop')}
              className="text-slate-600 hover:text-brand-blue px-3 py-2 text-sm font-medium"
            >
              Shop
            </button>
            <a href="#waitlist" className="ml-4 bg-brand-blue text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition">Get Early Access</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
