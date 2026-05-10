'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black grid-overlay min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-overlap">
        <About />
      </div>
      <div className="section-overlap">
        <Skills />
      </div>
      <div className="section-overlap">
        <Experience />
      </div>
      <div className="section-overlap">
        <Projects />
      </div>
      <div className="section-overlap">
        <Education />
      </div>
      <div className="section-overlap">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
