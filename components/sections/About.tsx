'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="section-label mb-8">02 / ABOUT</div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Heading */}
          <div className="space-y-8">
            <h2 className="text-6xl md:text-7xl font-black leading-none tracking-tight">
              THE
              <br />
              ENGINEER
              <span className="text-gray-700">.</span>
            </h2>

            {/* Status & Focus */}
            <div className="space-y-3 border-b border-white/10 pb-8">
              <div className="section-label">STATUS • OPEN TO ROLES</div>
              <div className="section-label">FOCUS • AI • MERN • CLOUD</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 p-4 hover:border-[#ff3b0a] transition-colors">
                <div className="text-xs font-mono text-gray-500 mb-1">1500+</div>
                <div className="text-sm font-bold">LEETCODE</div>
              </div>
              <div className="border border-white/10 p-4 hover:border-[#ff3b0a] transition-colors">
                <div className="text-xs font-mono text-gray-500 mb-1">300+</div>
                <div className="text-sm font-bold">CODECHEF</div>
              </div>
              <div className="border border-white/10 p-4 hover:border-[#ff3b0a] transition-colors">
                <div className="text-xs font-mono text-gray-500 mb-1">IBM</div>
                <div className="text-sm font-bold">GEN-AI INTERN</div>
              </div>
              <div className="border border-white/10 p-4 hover:border-[#ff3b0a] transition-colors">
                <div className="text-xs font-mono text-gray-500 mb-1">B.TECH</div>
                <div className="text-sm font-bold">DATA SCIENCE</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-base text-gray-400 leading-relaxed">
              I&apos;m a B.Tech Data Science student and Full-Stack Developer with experience in AI, MERN Stack, and Cloud technologies. I build modern web applications, AI-powered tools, and data-driven solutions.
            </p>

            <p className="text-base text-gray-400 leading-relaxed">
              I completed an internship at IBM where I worked on Generative AI using Python and PyTorch. I&apos;ve also developed multiple academic and personal projects involving AI, data visualization, authentication systems, and intelligent recommendation systems.
            </p>

            {/* Approach & Goal Cards */}
            <div className="grid md:grid-cols-1 gap-6 pt-4">
              <div className="border border-white/10 p-6 hover:border-[#ff3b0a] hover:shadow-[0_0_30px_rgba(255,59,10,0.1)] transition-all">
                <h3 className="text-sm font-bold font-mono tracking-widest mb-3">
                  APPROACH
                </h3>
                <p className="text-sm text-gray-400">
                  I focus on combining clean UI/UX with AI-powered functionality to create practical and impactful applications.
                </p>
              </div>

              <div className="border border-white/10 p-6 hover:border-[#ff3b0a] hover:shadow-[0_0_30px_rgba(255,59,10,0.1)] transition-all">
                <h3 className="text-sm font-bold font-mono tracking-widest mb-3">
                  CAREER GOAL
                </h3>
                <p className="text-sm text-gray-400">
                  To become a skilled Software Engineer and AI Developer contributing to innovative products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
