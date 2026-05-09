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
        background: scrolled ? 'rgba(245,245,247,0.85)' : 'rgba(245,245,247,0.72)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #e8e8ed' : '1px solid transparent',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-700 text-base tracking-tight">
          <span className="text-text">SP</span>
          <span className="text-muted">&nbsp;/&nbsp;dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-xs text-text hover:text-accent-link transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:shrikenpatel@gmail.com"
              className="font-body text-sm px-4 py-1.5 rounded-pill bg-accent text-white hover:bg-[#0077ed] transition-colors duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text p-2 relative w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`absolute left-1 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`absolute left-1 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-1 top-6 w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-5">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-text hover:text-accent-link transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:shrikenpatel@gmail.com"
                className="inline-block font-body text-sm px-5 py-2 rounded-pill bg-accent text-white hover:bg-[#0077ed] transition-colors"
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
