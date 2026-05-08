'use client';
import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    label: 'Languages',
    icon: '< />',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Java', 'SQL', 'HTML/CSS', 'R'],
  },
  {
    label: 'Frontend & Mobile',
    icon: '◻',
    skills: ['React.js', 'Next.js', 'Flutter', 'Tailwind CSS', 'Figma'],
  },
  {
    label: 'Backend & APIs',
    icon: '⬡',
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT'],
  },
  {
    label: 'Databases',
    icon: '◈',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'DynamoDB'],
  },
  {
    label: 'Cloud & DevOps',
    icon: '☁',
    skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'Git/GitHub'],
  },
  {
    label: 'AI & Data',
    icon: '◉',
    skills: ['TensorFlow', 'Keras', 'Pandas', 'Seaborn', 'Tableau', 'Power BI'],
  },
  {
    label: 'Tooling',
    icon: '⚙',
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

      <h2 className="reveal font-display font-700 text-4xl sm:text-5xl leading-tight tracking-heading mb-4 text-text">
        Tech I work with
      </h2>
      <p className="reveal font-body text-muted mb-14 max-w-xl">
        Full-stack fluency across frontend, mobile, backend, and cloud—with a growing focus on AI-native development workflows.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className={`reveal reveal-delay-${(i % 3) + 1} card-border p-6 group hover:border-[#c7c7cc] transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm w-8 h-8 flex items-center justify-center rounded-lg text-accent bg-accent/10">
                {group.icon}
              </span>
              <h3 className="font-display font-600 text-sm tracking-wide uppercase text-accent">
                {group.label}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-150 cursor-default"
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
