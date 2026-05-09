'use client';
import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'Tiger Advisory',
    role: 'Full-Stack Developer Intern',
    period: 'Jun 2025 – Sep 2025',
    location: 'Parsippany, NJ',
    current: true,
    bullets: [
      'Architected 15+ reusable React.js components that became the design system foundation, reducing future feature development time by 40%.',
      'Implemented real-time authentication for 1,000+ active users using Supabase, collaborating across backend and product teams to achieve zero-downtime launches.',
      'Leveraged AI-native IDE (Windsurf) with prompt engineering workflows, increasing feature delivery speed by 30% and shortening sprint iteration cycles.',
    ],
    stack: ['React.js', 'Express.js', 'Supabase', 'Windsurf', 'Prompt Engineering'],
  },
  {
    company: 'Parthvitech Innovatives LLP',
    role: 'Flutter Developer',
    period: 'Sep 2023 – Dec 2023',
    location: 'Vadodara, India',
    current: false,
    bullets: [
      'Built and shipped a production Flutter insurance application serving motor and health products, driving 35% user engagement growth in the first post-launch month.',
      'Engineered a scalable UI widget library with optimized REST API integration, reducing API latency by 53% through intelligent caching and data-fetching strategies.',
      'Partnered with design, QA, and backend teams to compress the development lifecycle by 22%, delivering all client milestones on schedule.',
    ],
    stack: ['Flutter', 'Dart', 'RESTful APIs', 'Postman', 'Material Design'],
  },
  {
    company: 'Digikentro',
    role: 'Web Developer Intern',
    period: 'Jul 2022 – Sep 2022',
    location: 'Vadodara, India',
    current: false,
    bullets: [
      'Developed adaptive responsive UIs and REST API integrations across multiple client products, improving user retention metrics post-launch.',
      'Identified and resolved 85% of critical pre-release bugs, directly improving platform stability and end-user experience at launch.',
      'Contributed Flutter features in a 4-person agile team, implementing reusable component standards that boosted team productivity by 25%.',
    ],
    stack: ['HTML/CSS', 'JavaScript', 'Flutter', 'REST APIs', 'Agile'],
  },
];

export default function Experience() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <div className="reveal flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-[#52e1fe] tracking-widest uppercase">03 / Experience</span>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      <h2
        className="reveal font-body font-medium text-4xl sm:text-5xl leading-tight mb-14 text-white"
        style={{ letterSpacing: '-0.025em' }}
      >
        Where I've worked
      </h2>

      <div className="relative">
        <div
          className="absolute left-0 md:left-6 top-0 bottom-0 w-px"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={exp.company} className={`reveal reveal-delay-${i + 1} relative pl-8 md:pl-20`}>
              <div
                className="absolute left-0 md:left-6 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-1/2"
                style={{
                  background: exp.current ? '#52e1fe' : '#27272a',
                  border: `1px solid ${exp.current ? '#52e1fe' : 'rgba(255,255,255,0.2)'}`,
                  boxShadow: exp.current ? '0 0 8px rgba(82,225,254,0.4)' : 'none',
                }}
              />

              <div className="card-border p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-body font-medium text-xl text-white">{exp.company}</h3>
                      {exp.current && (
                        <span
                          className="font-mono text-xs px-2.5 py-0.5 rounded-md text-[#52e1fe]"
                          style={{ background: 'rgba(82,225,254,0.08)', border: '1px solid rgba(82,225,254,0.15)' }}
                        >
                          Recent
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-[#52e1fe]">{exp.role}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-xs text-[#6e727a]">{exp.period}</div>
                    <div className="font-mono text-xs text-[#6e727a] mt-0.5">{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((b) => (
                    <li key={b.slice(0, 20)} className="flex items-start gap-3 font-body text-sm text-[#abafb4] leading-relaxed">
                      <span className="text-[#52e1fe]/40 mt-0.5 shrink-0 text-xs">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
