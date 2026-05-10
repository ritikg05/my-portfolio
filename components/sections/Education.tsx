'use client';

export default function Education() {
  const achievements = [
    '1500+ rating on LeetCode',
    'Solved 300+ problems on CodeChef',
    'Runner-up — Pragyam Hackathon',
    'Participant — TCS CodeVita 2023 & 2024',
    'Google Cloud & Oracle Cloud certifications'
  ];

  return (
    <section id="education" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="section-label mb-8">06 / SCHOOLING</div>

        {/* Heading */}
        <h2 className="section-heading mb-8">EDU-RECORD</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-2">B.Tech</h3>
              <h4 className="text-lg font-bold text-gray-300">Data Science</h4>
              <p className="text-xs font-mono text-gray-500 mt-2 tracking-widest">
                UNDERGRADUATE • DATA SCIENCE SPECIALISATION
              </p>
            </div>

            <p className="text-base text-gray-400 leading-relaxed">
              Coursework spanning Data Structures, Algorithms, Machine Learning, Databases, Web Development, and Cloud — applied directly into shipped projects and the IBM internship.
            </p>

            <div className="border border-white/10 p-4">
              <div className="text-sm font-mono text-gray-500 mb-1">STATUS</div>
              <div className="text-base font-bold">CURRENTLY PURSUING</div>
            </div>
          </div>

          {/* Right - Achievements */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-widest mb-6">AWARDS & HONORS</h3>
            {achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
                <div className="w-2 h-2 bg-[#ff3b0a] mt-2 flex-shrink-0" />
                <p className="text-sm text-gray-400">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
