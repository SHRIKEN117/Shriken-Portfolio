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
        background: scrolled ? 'rgba(39,39,42,0.95)' : 'rgba(39,39,42,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? 'rgba(255,255,255,0.08) 0px 0px 0px 1px'
          : '1px solid transparent',
        boxShadow: scrolled
          ? 'rgba(255,255,255,0.06) 0px -1px 0px 0px inset'
          : 'none',
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
        <a href="#" className="font-body font-medium text-sm text-white tracking-tight">
          SP<span className="text-[#6e727a]">&nbsp;/&nbsp;dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-[#abafb4] hover:text-white transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:shrikenpatel@gmail.com"
              className="btn-primary text-xs px-4 py-2"
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
        <div
          className="md:hidden px-6 py-6"
          style={{
            background: '#27272a',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-[#abafb4] hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:shrikenpatel@gmail.com" className="btn-primary text-sm">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
