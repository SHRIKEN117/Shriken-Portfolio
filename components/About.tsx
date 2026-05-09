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
      title: 'Ship-Fast Mindset',
      desc: 'AI-native tooling, prompt engineering, and component-driven architecture to iterate without sacrificing quality.',
    },
    {
      title: 'End-to-End Ownership',
      desc: 'From Flutter UIs to Node.js APIs to AWS infrastructure—full vertical fluency across the entire stack.',
    },
    {
      title: 'Product Thinking',
      desc: 'Engineering decisions rooted in user impact. I ask why before how, and design for maintainability from day one.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <div className="reveal flex items-center gap-4 mb-16">
        <span className="font-mono text-xs text-[#999999] tracking-widest uppercase">01 / About</span>
        <div className="flex-1 h-px bg-[#333333]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="reveal font-display text-4xl sm:text-5xl leading-tight mb-8 text-white" style={{ fontWeight: 500, letterSpacing: '-0.025em' }}>
            Building things that
            <span className="block">actually work at scale</span>
          </h2>
          <p className="reveal reveal-delay-1 font-body text-[#999999] text-lg leading-relaxed mb-5" style={{ fontWeight: 300 }}>
            I'm a Computer Science graduate student at Pace University (MS, May 2026) with three years of hands-on
            engineering across startups and product teams. My work sits at the intersection of
            performance, developer experience, and user delight.
          </p>
          <p className="reveal reveal-delay-2 font-body text-[#999999] leading-relaxed mb-10" style={{ fontWeight: 300 }}>
            At Tiger Advisory, I rebuilt the frontend architecture from scratch—15+ reusable React components,
            real-time Supabase auth for 1,000+ users, and a 30% velocity gain through AI-assisted development.
            At Parthvitech, I slashed API latency by 53% on a Flutter insurance app that drove 35% engagement
            growth in its first month.
          </p>
          <div className="reveal reveal-delay-3 flex flex-wrap gap-2">
            {['React.js', 'Flutter', 'Node.js', 'AWS', 'TypeScript', 'Firebase'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-4 py-1.5 rounded-pill border border-[#333333] text-[#999999] hover:text-white hover:border-[#555555] transition-all duration-200 cursor-default"
                style={{ background: 'rgba(200,200,200,0.04)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {traits.map((t, i) => (
            <div
              key={t.title}
              className={`reveal reveal-delay-${i + 1} card-border p-6`}
            >
              <h3 className="font-body font-medium text-white mb-2">{t.title}</h3>
              <p className="font-body text-sm text-[#999999] leading-relaxed" style={{ fontWeight: 300 }}>{t.desc}</p>
            </div>
          ))}

          <div className="reveal reveal-delay-4 card-border p-6 border-l-2 border-l-[#c0c0c0]">
            <div className="font-mono text-xs text-[#c0c0c0] mb-2 uppercase tracking-widest">Education</div>
            <div className="font-body font-medium text-white">Pace University, New York</div>
            <div className="font-body text-sm text-[#999999]">M.S. Computer Science · GPA 3.8 · May 2026</div>
            <div className="mt-2 font-body text-xs text-[#999999]">
              B.S. Computer Science · Parul Institute of Engineering &amp; Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
