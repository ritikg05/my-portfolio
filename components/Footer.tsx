'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-16 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          {/* Left - Brand */}
          <div>
            <h3 className="text-lg font-black tracking-widest mb-2">RITIK.GUPTA</h3>
            <p className="text-xs font-mono text-gray-500">
              ENGINEERED, NOT GENERATED • 2026
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="space-y-3">
            {[
              { label: 'WORK', id: 'projects' },
              { label: 'ABOUT', id: 'about' },
              { label: 'CONTACT', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-sm font-mono tracking-widest text-gray-500 hover:text-[#ff3b0a] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right - CTA */}
          <div className="text-right">
            <p className="text-xs font-mono text-gray-500 mb-2">SAY HI</p>
            <a
              href="mailto:HRG19976@gmail.com"
              className="text-sm font-bold hover:text-[#ff3b0a] transition-colors break-all"
            >
              HRG19976@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs font-mono text-gray-600 text-center">
            © 2026 RITIK GUPTA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
