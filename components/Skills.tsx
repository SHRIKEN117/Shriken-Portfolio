'use client';
import { useEffect, useRef } from 'react';

const CodeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const ServerIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

const CloudIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const CpuIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const skillGroups = [
  {
    label: 'Languages',
    Icon: CodeIcon,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Java', 'SQL', 'HTML/CSS', 'R'],
  },
  {
    label: 'Frontend & Mobile',
    Icon: MonitorIcon,
    skills: ['React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'Figma'],
  },
  {
    label: 'Backend & APIs',
    Icon: ServerIcon,
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT'],
  },
  {
    label: 'Databases',
    Icon: DatabaseIcon,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'DynamoDB'],
  },
  {
    label: 'Cloud & DevOps',
    Icon: CloudIcon,
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'Git/GitHub'],
  },
  {
    label: 'AI & Data',
    Icon: CpuIcon,
    skills: ['TensorFlow', 'Keras', 'Pandas', 'Seaborn', 'Tableau', 'Power BI'],
  },
  {
    label: 'Tooling',
    Icon: WrenchIcon,
    skills: ['Postman', 'Windsurf IDE', 'Figma', 'Prompt Engineering'],
  },
];

export default function Skills() {
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

  return (
    <section id="skills" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <div className="reveal flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-[#999999] tracking-widest uppercase">04 / Skills</span>
        <div className="flex-1 h-px bg-[#333333]" />
      </div>

      <h2 className="reveal font-display text-4xl sm:text-5xl leading-tight mb-4 text-white" style={{ fontWeight: 500, letterSpacing: '-0.025em' }}>
        Tech I work with
      </h2>
      <p className="reveal font-body text-[#999999] mb-14 max-w-xl" style={{ fontWeight: 300 }}>
        Full-stack fluency across frontend, mobile, backend, and cloud—with a growing focus on AI-native development workflows.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className={`reveal reveal-delay-${(i % 3) + 1} card-border p-6`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-7 h-7 flex items-center justify-center rounded-md text-[#c0c0c0]"
                style={{ background: 'rgba(200,200,200,0.08)' }}
              >
                <group.Icon />
              </span>
              <h3 className="font-mono text-xs tracking-widest uppercase text-[#c0c0c0]">
                {group.label}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded-pill text-[#999999] hover:text-white transition-colors duration-150 cursor-default"
                  style={{ background: 'rgba(200,200,200,0.06)', border: '1px solid #333333' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
