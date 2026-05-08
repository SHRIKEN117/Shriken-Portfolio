'use client';
import { useEffect, useRef } from 'react';

export default function About() {
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

  const traits = [
    {
      icon: '⚡',
      title: 'Ship-Fast Mindset',
      desc: 'AI-native tooling, prompt engineering, and component-driven architecture to iterate without sacrificing quality.',
    },
    {
      icon: '🔗',
      title: 'End-to-End Ownership',
      desc: 'From Flutter UIs to Node.js APIs to AWS infrastructure—full vertical fluency across the entire stack.',
    },
    {
      icon: '📐',
      title: 'Product Thinking',
      desc: 'Engineering decisions rooted in user impact. I ask why before how, and design for maintainability from day one.',
    },
  ];

  return (
    <section id="about" ref={ref} className="section-glow py-28 max-w-6xl mx-auto px-6">
      {/* Section label */}
      <div className="reveal flex items-center gap-3 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">01 / About</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="reveal font-display font-700 text-4xl sm:text-5xl leading-tight mb-6">
            Building things that
            <span className="block text-gradient">actually work at scale</span>
          </h2>
          <p className="reveal reveal-delay-1 font-body text-muted text-lg leading-relaxed mb-5">
            I'm a Computer Science graduate student at Pace University (MS, May 2026) with three years of hands-on 
            engineering across startups and product teams. My work sits at the intersection of 
            performance, developer experience, and user delight.
          </p>
          <p className="reveal reveal-delay-2 font-body text-muted leading-relaxed mb-8">
            At Tiger Advisory, I rebuilt the frontend architecture from scratch—15+ reusable React components, 
            real-time Supabase auth for 1,000+ users, and a 30% velocity gain through AI-assisted development. 
            At Parthvitech, I slashed API latency by 53% on a Flutter insurance app that drove 35% engagement 
            growth in its first month. I work best in cross-functional teams where I can own problems end-to-end.
          </p>
          <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
            {['React.js', 'Flutter', 'Node.js', 'AWS', 'TypeScript', 'Firebase'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-lg border border-border text-muted bg-surface hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Trait cards */}
        <div className="flex flex-col gap-4">
          {traits.map((t, i) => (
            <div
              key={t.title}
              className={`reveal reveal-delay-${i + 1} card-border rounded-2xl p-6 group hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.06)]`}
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-0.5">{t.icon}</div>
                <div>
                  <h3 className="font-display font-600 text-text mb-2 group-hover:text-accent transition-colors">
                    {t.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Education callout */}
          <div className="reveal reveal-delay-4 card-border rounded-2xl p-6 border-l-2 border-l-accent">
            <div className="font-mono text-xs text-accent mb-2 uppercase tracking-widest">Education</div>
            <div className="font-display font-600 text-text">Pace University, New York</div>
            <div className="font-body text-sm text-muted">M.S. Computer Science · GPA 3.8 · May 2026</div>
            <div className="mt-2 font-body text-xs text-muted">
              B.S. Computer Science · Parul Institute of Engineering & Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
