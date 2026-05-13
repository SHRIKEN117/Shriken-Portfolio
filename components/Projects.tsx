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
    id: 'fixflow',
    tag: 'Full-Stack · Capstone',
    title: 'FixFlow',
    subtitle: 'Maintenance Management System',
    description:
      'A full-stack facility maintenance platform managing the complete ticket lifecycle — from submission through approval, technician assignment, and closure. Features role-based access control, automated SLA enforcement, a financial workflow (estimates → invoices → payments), real-time Socket.io notifications, and HTML email alerts.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    highlights: [
      'Three-role RBAC (Admin / Technician / User) with guarded status transitions',
      'Automated SLA sweep every 15 min — flags at-risk and breached tickets',
      'Full financial workflow: line-item estimates → invoices → payment recording',
      'Real-time push notifications via Socket.io + HTML email on every status change',
    ],
    featured: true,
  },
  {
    id: 'insurance-app',
    tag: 'Mobile · Flutter',
    title: 'InsureFlow',
    subtitle: 'Insurance Product Showcase App',
    description:
      'A production Flutter application for an insurance company delivering motor and health product browsing with seamless API integration. Optimized data-fetching reduced API latency by 53% while boosting user engagement 35% in month one.',
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
          className="font-mono text-xs text-[#52e1fe] px-2.5 py-1 rounded-md"
          style={{ background: 'rgba(82,225,254,0.06)', border: '1px solid rgba(82,225,254,0.12)' }}
        >
          {project.tag}
        </span>
        {project.featured && (
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-md text-[#abafb4]"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Featured
          </span>
        )}
      </div>

      <h3
        className="font-body font-medium text-2xl text-white mb-1"
        style={{ letterSpacing: '-0.025em' }}
      >
        {project.title}
      </h3>
      <p className="font-body text-sm text-[#6e727a] mb-4">{project.subtitle}</p>

      <p className="font-body text-sm text-[#abafb4] leading-relaxed mb-6">{project.description}</p>

      <ul className="space-y-2 mb-7">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 font-body text-sm text-[#abafb4]">
            <span className="text-[#52e1fe]/40 mt-0.5 shrink-0 text-xs">›</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
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
        <span className="font-mono text-xs text-[#52e1fe] tracking-widest uppercase">02 / Projects</span>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      <div className="reveal mb-12">
        <h2
          className="font-body font-medium text-4xl sm:text-5xl leading-tight mb-4 text-white"
          style={{ letterSpacing: '-0.025em' }}
        >
          Things I've built
        </h2>
        <p className="font-body text-[#abafb4] max-w-xl">
          A selection of projects spanning AI integration, mobile engineering, and full-stack architecture—each with measurable outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
