'use client';
import { useEffect, useRef } from 'react';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      label: 'Email',
      value: 'shrikenpatel@gmail.com',
      href: 'mailto:shrikenpatel@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sp117',
      href: 'https://linkedin.com/in/sp117',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+1 (973) 264-6277',
      href: 'tel:+19732646277',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-glow py-28 max-w-6xl mx-auto px-6">
      <div className="reveal flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">05 / Contact</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Big CTA block */}
      <div className="reveal card-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 100%, #00D4FF, transparent)',
          }}
        />

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="reveal font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Open to opportunities
          </div>
          <h2 className="reveal font-display font-700 text-4xl sm:text-5xl leading-tight mb-6">
            Let's build something
            <span className="block text-gradient">worth shipping</span>
          </h2>
          <p className="reveal reveal-delay-1 font-body text-muted text-lg leading-relaxed mb-10">
            I'm actively seeking full-time software engineering roles starting Summer 2026. 
            Remote, hybrid, or relocation — let's talk if your team values clean code, fast iteration, 
            and products that make a real difference.
          </p>

          {/* Contact links */}
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-surface hover:border-accent hover:bg-accent/5 transition-all duration-200"
              >
                <span className="text-muted group-hover:text-accent transition-colors">{l.icon}</span>
                <div className="text-left">
                  <div className="font-mono text-xs text-muted group-hover:text-accent transition-colors">{l.label}</div>
                  <div className="font-body text-sm text-text group-hover:text-white transition-colors">{l.value}</div>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:shrikenpatel@gmail.com"
            className="reveal reveal-delay-3 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-bg font-display font-600 hover:bg-white transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]"
          >
            Send me a message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
