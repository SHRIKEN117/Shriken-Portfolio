'use client';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #333333' : '1px solid transparent',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
        <a href="#" className="font-body font-medium text-sm tracking-tight text-white">
          SP<span className="text-muted">&nbsp;/&nbsp;dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-xs text-[#c0c0c0] hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:shrikenpatel@gmail.com"
              className="font-body text-xs px-5 py-2 rounded-pill bg-[#f5f5f0] text-black font-medium hover:opacity-90 transition-opacity duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 relative w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`absolute left-1 top-2 w-6 h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`absolute left-1 top-4 w-6 h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-1 top-6 w-6 h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#333333] bg-black px-6 py-6">
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-[#c0c0c0] hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:shrikenpatel@gmail.com"
                className="inline-block font-body text-sm px-6 py-2.5 rounded-pill bg-[#f5f5f0] text-black font-medium hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
