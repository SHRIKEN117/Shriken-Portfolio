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
    accent: '#00D4FF',
    featured: true,
  },
  {
    id: 'prescripto',
    tag: 'Web App · UX',
    title: 'Prescripto',
    subtitle: 'Doctor Appointment Booking Portal',
    description:
      'A responsive, client-side healthcare portal enabling patients to browse doctors by specialty, view detailed profiles, and schedule appointments — built for zero-friction access without backend dependencies. Demonstrates component-driven architecture and performance-first design.',
    stack: ['React.js', 'Tailwind CSS', 'React Router', 'Context API'],
    highlights: [
      'Specialty-based doctor directory with filters',
      'Multi-step booking flow with conflict prevention',
      'Client-side routing with lazy loading',
      'Mobile-first, WCAG-compliant design',
    ],
    accent: '#7C3AED',
    featured: true,
  },
  {
    id: 'insurance-app',
    tag: 'Mobile · Flutter',
    title: 'InsureFlow',
    subtitle: 'Insurance Product Showcase App',
    description:
      'A production Flutter application for an insurance company delivering motor and health product browsing with seamless API integration. Architected for scale with reusable widget systems and optimized data-fetching that reduced API latency by 53% while boosting user engagement 35% in month one.',
    stack: ['Flutter', 'Dart', 'RESTful APIs', 'Postman', 'Material Design'],
    highlights: [
      '53% API latency reduction via caching',
      '35% engagement increase at launch',
      'Reusable widget component library',
      'Collaborative QA-to-deployment pipeline',
    ],
    accent: '#F59E0B',
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1} group relative rounded-2xl overflow-hidden card-border hover:border-opacity-50 transition-all duration-500`}
      style={
        {
          '--card-accent': project.accent,
        } as React.CSSProperties
      }
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded-md"
          style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
        >
          Featured
        </div>
      )}

      <div className="p-7">
        {/* Tag */}
        <div className="font-mono text-xs mb-3" style={{ color: project.accent }}>
          {project.tag}
        </div>

        {/* Title */}
        <h3 className="font-display font-700 text-2xl text-text mb-1 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted mb-4">{project.subtitle}</p>

        {/* Description */}
        <p className="font-body text-sm text-muted leading-relaxed mb-6">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-7">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 font-body text-sm text-muted">
              <span style={{ color: project.accent }} className="mt-0.5 text-xs">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-surface text-muted"
            >
              {s}
            </span>
          ))}
        </div>
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
    <section id="projects" ref={ref} className="section-glow py-28 max-w-6xl mx-auto px-6">
      <div className="reveal flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">02 / Projects</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="reveal mb-12">
        <h2 className="font-display font-700 text-4xl sm:text-5xl leading-tight mb-4">
          Things I've built
        </h2>
        <p className="font-body text-muted max-w-xl">
          A selection of projects spanning AI integration, mobile engineering, and full-stack architecture—each with measurable outcomes.
        </p>
      </div>

      {/* Featured two */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {projects.filter((p) => p.featured).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* Additional */}
      <div className="grid md:grid-cols-1 gap-6">
        {projects.filter((p) => !p.featured).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + 2} />
        ))}
      </div>
    </section>
  );
}
