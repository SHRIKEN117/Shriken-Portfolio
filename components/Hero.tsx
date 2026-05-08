'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('[data-delay]');
    items.forEach((item) => {
      const delay = item.getAttribute('data-delay') || '0';
      item.style.animationDelay = `${delay}ms`;
      item.classList.add('animate-in');
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16" id="hero">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, #00D4FF, transparent 70%)',
            top: '15%',
            right: '10%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-8 animate-float"
          style={{
            background: 'radial-gradient(circle, #7C3AED, transparent 70%)',
            bottom: '20%',
            left: '5%',
            filter: 'blur(80px)',
            animationDelay: '2s',
          }}
        />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 py-24">
        {/* Status badge */}
        <div
          data-delay="0"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs font-mono text-accent mb-8"
          style={{ opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          Available for full-time roles · Summer 2026
        </div>

        {/* Name */}
        <h1
          data-delay="100"
          className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight mb-6"
          style={{ opacity: 0 }}
        >
          Shriken
          <br />
          <span className="text-gradient">Patel</span>
        </h1>

        {/* Role */}
        <div
          data-delay="200"
          className="flex items-center gap-3 mb-6"
          style={{ opacity: 0 }}
        >
          <div className="w-8 h-px bg-accent" />
          <span className="font-mono text-sm text-accent tracking-widest uppercase">
            Full-Stack &amp; Mobile Engineer
          </span>
        </div>

        {/* Tagline */}
        <p
          data-delay="300"
          className="font-body text-xl sm:text-2xl text-muted max-w-2xl leading-relaxed mb-10"
          style={{ opacity: 0 }}
        >
          I architect systems that scale—from real-time authentication serving{' '}
          <span className="text-text">thousands of users</span> to{' '}
          <span className="text-text">AI-native mobile apps</span> that cut latency in half.
        </p>

        {/* Stats row */}
        <div
          data-delay="350"
          className="flex flex-wrap gap-6 mb-10"
          style={{ opacity: 0 }}
        >
          {[
            { n: '15+', label: 'Reusable Components' },
            { n: '53%', label: 'API Latency Reduced' },
            { n: '30%', label: 'Dev Speed Gained' },
            { n: '1K+', label: 'Active Users Served' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-700 text-2xl text-accent">{s.n}</div>
              <div className="font-body text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          data-delay="450"
          className="flex flex-wrap gap-4"
          style={{ opacity: 0 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-bg font-display font-600 text-sm hover:bg-white transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]"
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-text hover:border-accent hover:text-accent transition-all duration-200 font-display font-600 text-sm"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/sp117"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-muted hover:border-border hover:text-text transition-all duration-200 font-display font-600 text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          data-delay="600"
          className="mt-16 flex items-center gap-2 text-muted text-xs font-mono"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-accent" />
            <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
          </div>
          <span>scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
