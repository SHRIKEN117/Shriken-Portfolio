'use client';
import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 'studybuddy',
    tag: 'AI · Full-Stack',
    title: 'StudyBuddy',
    subtitle: 'AI-Powered Learning Platform',
    description:
      'An intelligent educational platform that transforms passive reading into active learning. Integrates Claude AI to auto-generate quizzes from uploaded PDFs and implements a spaced repetition flashcard system proven to improve long-term retention by 40–60% over passive review.',
    stack: ['React.js', 'Node.js', 'Claude AI', 'JWT', 'PostgreSQL'],
    highlights: [
      'AI quiz generation from PDF uploads',
      'Spaced repetition algorithm (SM-2)',
      'Real-time progress tracking with analytics',
      'JWT-secured REST API + React Context state',
    ],
    featured: true,
  },
  {
    id: 'prescripto',
    tag: 'Web App · UX',
    title: 'Prescripto',
    subtitle: 'Doctor Appointment Booking Portal',
    description:
      'A responsive, client-side healthcare portal enabling patients to browse doctors by specialty, view detailed profiles, and schedule appointments — built for zero-friction access without backend dependencies.',
    stack: ['React.js', 'Tailwind CSS', 'React Router', 'Context API'],
    highlights: [
      'Specialty-based doctor directory with filters',
      'Multi-step booking flow with conflict prevention',
      'Client-side routing with lazy loading',
      'Mobile-first, WCAG-compliant design',
    ],
    featured: true,
  },
  {
    id: 'insurance-app',
    tag: 'Mobile · Flutter',
    title: 'InsureFlow',
    subtitle: 'Insurance Product Showcase App',
    description:
      'A production Flutter application for an insurance company delivering motor and health product browsing with seamless API integration. Architected for scale with reusable widget systems and optimized data-fetching that reduced API latency by 53%.',
    stack: ['Flutter', 'Dart', 'RESTful APIs', 'Postman', 'Material Design'],
    highlights: [
      '53% API latency reduction via caching',
      '35% engagement increase at launch',
      'Reusable widget component library',
      'Collaborative QA-to-deployment pipeline',
    ],
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div className={`reveal reveal-delay-${index + 1} card-border p-7`}>
      <div className="flex items-center justify-between mb-4">
        <span
          className="font-mono text-xs px-3 py-1.5 rounded-pill text-[#c0c0c0]"
          style={{ background: 'rgba(200,200,200,0.08)' }}
        >
          {project.tag}
        </span>
        {project.featured && (
          <span
            className="font-mono text-xs px-3 py-1.5 rounded-pill text-white"
            style={{ background: 'rgba(200,200,200,0.1)' }}
          >
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display text-2xl text-white mb-1" style={{ fontWeight: 500, letterSpacing: '-0.025em' }}>
        {project.title}
      </h3>
      <p className="font-body text-sm text-[#999999] mb-4">{project.subtitle}</p>

      <p className="font-body text-sm text-[#999999] leading-relaxed mb-6" style={{ fontWeight: 300 }}>
        {project.description}
      </p>

      <ul className="space-y-2 mb-7">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 font-body text-sm text-[#999999]" style={{ fontWeight: 300 }}>
            <span className="text-[#555555] mt-0.5 shrink-0">—</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs px-3 py-1 rounded-pill text-[#999999]"
            style={{ background: 'rgba(200,200,200,0.06)', border: '1px solid #333333' }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <div className="reveal flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-[#999999] tracking-widest uppercase">02 / Projects</span>
        <div className="flex-1 h-px bg-[#333333]" />
      </div>

      <div className="reveal mb-12">
        <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-4 text-white" style={{ fontWeight: 500, letterSpacing: '-0.025em' }}>
          Things I've built
        </h2>
        <p className="font-body text-[#999999] max-w-xl" style={{ fontWeight: 300 }}>
          A selection of projects spanning AI integration, mobile engineering, and full-stack architecture—each with measurable outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {projects.filter((p) => p.featured).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="grid md:grid-cols-1 gap-5">
        {projects.filter((p) => !p.featured).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + 2} />
        ))}
      </div>
    </section>
  );
}
