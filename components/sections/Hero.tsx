'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { useScrollAnimation, useParallaxGrid } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const { ref: contentRef, isInView } = useScrollAnimation({ once: false });
  const parallaxRef = useParallaxGrid(0.3);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 md:px-8 border-b border-white/10 overflow-hidden grid-parallax" ref={parallaxRef}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 text-xs font-mono text-gray-600">
          GITHUB.COM/RITIKG05
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={contentRef}>
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            {/* Badge */}
            <div className="section-label">
              AVAILABLE • INTERNSHIPS & FULL-TIME
            </div>

            {/* Section Number */}
            <div className="section-label">01 / PORTFOLIO</div>

            {/* Main Heading */}
            <div className="space-y-0">
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                FULL-STACK
              </h1>
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                <span className="text-[#ff3b0a]">+ AI</span>
                <span className="text-gray-700">.</span>
              </h1>
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight text-gray-700">
                BUILT TO SHIP.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base text-gray-400 leading-relaxed max-w-md">
              B.Tech Data Science student and Full-Stack Developer with experience in AI, MERN stack, and Cloud. I build modern web applications, AI-powered tools, and data-driven solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 py-8 border-y border-white/10">
              <div className="space-y-1">
                <div className="text-xs font-mono text-gray-500">IBM</div>
                <div className="text-sm font-bold">GEN-AI INTERNSHIP</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-gray-500">04+</div>
                <div className="text-sm font-bold">PROJECTS</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-gray-500">1500+</div>
                <div className="text-sm font-bold">LEETCODE RATING</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-gray-500">300+</div>
                <div className="text-sm font-bold">CODECHEF PROBLEMS</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-[#ff3b0a] text-white font-mono text-sm font-bold tracking-widest hover:bg-[#e63500] transition-colors"
              >
                SEE SELECTED WORK
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-white/30 text-white font-mono text-sm font-bold tracking-widest hover:border-[#ff3b0a] hover:text-[#ff3b0a] transition-colors"
              >
                GET IN TOUCH
              </button>
            </div>

            {/* Scroll CTA */}
            <div className="flex flex-col items-center gap-2 pt-12">
              <div className="text-xs font-mono text-gray-500 tracking-widest">SCROLL</div>
              <ArrowDown className="w-4 h-4 text-gray-500 animate-bounce" />
              <div className="text-xs font-mono text-gray-500">EXPLORE</div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative h-96 md:h-full min-h-96 md:min-h-screen flex items-center justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-96 md:w-80 md:h-[500px] border border-white/20 overflow-hidden group hover:border-[#ff3b0a] hover:shadow-[0_0_30px_rgba(255,59,10,0.3)] transition-all duration-300">
              <Image
                src="/profile.jpg.png"
                alt="Ritik Gupta"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-xs font-mono text-gray-500 text-center pb-4">
              // RITIK GUPTA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
