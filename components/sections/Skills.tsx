'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      num: '01',
      skills: ['JavaScript', 'Python', 'Java', 'C++']
    },
    {
      title: 'Frontend',
      num: '02',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      num: '03',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication']
    },
    {
      title: 'AI / Data',
      num: '04',
      skills: ['PyTorch', 'Generative AI', 'Chart.js', 'Three.js']
    },
    {
      title: 'Tools',
      num: '05',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel']
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="section-label mb-8">03 / CAPABILITIES</div>

        {/* Heading */}
        <h2 className="section-heading mb-4">STACK-SHEET</h2>

        {/* Subtitle */}
        <p className="text-sm font-mono text-gray-500 mb-16 tracking-widest">
          TOOLS I REACH FOR DAILY. LISTED BY FREQUENCY, NOT AFFECTION.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.num} className="border border-white/10 p-8 hover:border-[#ff3b0a] transition-all glow-hover">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-red-500 font-bold text-lg">{category.num}</span>
                <h3 className="text-lg font-bold tracking-widest">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
