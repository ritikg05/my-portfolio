'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Generative AI Intern',
      company: 'IBM',
      description: 'Worked on Generative AI using Python and PyTorch.',
      tags: ['PYTHON', 'PYTORCH', 'GENERATIVE AI'],
      period: '2024'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="section-label mb-8">04 / TRAJECTORY</div>

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-black leading-none tracking-tight mb-4">TIME·LINE</h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-16">
          A short list of places that taught me to ship. Internships, OSS, and one stubborn side project.
        </p>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative border-l-2 border-[#ff3b0a] pl-8 pb-8">
              {/* Timeline dot */}
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-[#ff3b0a] rounded-full" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-sm font-mono text-[#ff3b0a] tracking-widest mt-1">{exp.company} • {exp.period}</p>
                </div>

                <p className="text-sm text-gray-400">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
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
