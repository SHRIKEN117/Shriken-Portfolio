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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(28,37,48,0.8)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-700 text-xl tracking-tight group">
          <span className="text-accent">SP</span>
          <span className="text-text opacity-60 group-hover:opacity-100 transition-opacity">
            &nbsp;/&nbsp;dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-muted hover:text-accent transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:shrikenpatel@gmail.com"
              className="font-body text-sm px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text p-2 relative w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-1 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`absolute left-1 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute left-1 top-6 w-6 h-0.5 bg-current transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-accent transition-colors font-body text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:shrikenpatel@gmail.com"
                className="inline-block text-sm px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200 font-body"
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
