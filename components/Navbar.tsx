'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { num: '01', label: 'ABOUT', id: 'about' },
    { num: '02', label: 'SKILLS', id: 'skills' },
    { num: '03', label: 'EXPERIENCE', id: 'experience' },
    { num: '04', label: 'WORK', id: 'projects' },
    { num: '05', label: 'EDUCATION', id: 'education' },
    { num: '06', label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav className="nav-blur sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-black tracking-widest hover:text-[#ff3b0a] transition-colors"
            >
              RITIK.GUPTA
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-mono tracking-widest text-gray-400 hover:text-[#ff3b0a] transition-colors"
              >
                <span className="text-[#ff3b0a]">{item.num}</span> {item.label}
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex">
            <a
              href="https://drive.google.com/file/d/1Gli4gTgkh4Gk5D0DjEjQXlGTB3061Kd-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/30 text-xs font-mono tracking-widest hover:border-[#ff3b0a] hover:text-[#ff3b0a] transition-all"
            >
              RESUME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-xs font-mono tracking-widest text-gray-400 hover:text-[#ff3b0a] transition-colors py-2"
              >
                <span className="text-[#ff3b0a]">{item.num}</span> {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
