'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CinematicScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth HTML scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize all GSAP scroll-triggered animations from classes
    gsap.utils.toArray('[class*="scroll-fade"]').forEach((element: any) => {
      if (element.classList.contains('scroll-fade-in') || 
          element.classList.contains('scroll-fade-left') || 
          element.classList.contains('scroll-fade-right')) {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
            once: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
