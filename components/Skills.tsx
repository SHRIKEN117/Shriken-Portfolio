'use client';
import { useEffect, useRef } from 'react';
import { StackFlowIntegrator } from '@/components/ui/stack-flow-integrator';

const skillGroups = [
  {
    label: 'Languages',
    icon: '< />',
    accent: '#00D4FF',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Java', 'SQL', 'HTML/CSS', 'R'],
  },
  {
    label: 'Frontend & Mobile',
    icon: '◻',
    accent: '#7C3AED',
    skills: ['React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'Figma'],
  },
  {
    label: 'Backend & APIs',
    icon: '⬡',
    accent: '#00D4FF',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT'],
  },
  {
    label: 'Databases',
    icon: '◈',
    accent: '#7C3AED',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'DynamoDB'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁',
    accent: '#F59E0B',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'Git/GitHub'],
  },
  {
    label: 'AI & Data',
    icon: '◉',
    accent: '#F59E0B',
    skills: ['TensorFlow', 'Keras', 'Pandas', 'Seaborn', 'Tableau', 'Power BI'],
  },
  {
    label: 'Tooling',
    icon: '⚙',
    accent: '#00D4FF',
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
      <div className="reveal flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent tracking-widest uppercase">04 / Skills</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <h2 className="reveal font-display font-700 text-4xl sm:text-5xl leading-tight mb-4">
        Tech I work with
      </h2>
      <p className="reveal font-body text-muted mb-14 max-w-xl">
        Full-stack fluency across frontend, mobile, backend, and cloud—with a growing focus on AI-native development workflows.
      </p>

      <div className="reveal mb-14">
        <StackFlowIntegrator />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className={`reveal reveal-delay-${(i % 3) + 1} card-border rounded-2xl p-6 group hover:shadow-lg transition-all duration-300`}
            style={
              { '--group-accent': group.accent } as React.CSSProperties
            }
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-mono text-sm w-8 h-8 flex items-center justify-center rounded-lg"
                style={{ color: group.accent, background: `${group.accent}15` }}
              >
                {group.icon}
              </span>
              <h3
                className="font-display font-600 text-sm tracking-wide uppercase"
                style={{ color: group.accent }}
              >
                {group.label}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 rounded-lg border border-border text-muted hover:text-text hover:border-opacity-60 transition-all duration-150 cursor-default"
                  style={
                    { '--hover-color': group.accent } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = group.accent + '60';
                    (e.currentTarget as HTMLElement).style.color = group.accent;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '';
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
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
