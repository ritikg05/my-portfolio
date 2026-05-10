'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CinematicScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth inertia scroll setup
    const lenis = document.documentElement;
    
    // Register scroll smoothing with GSAP
    gsap.registerEffect({
      name: 'scrollSmooth',
      effect: (targets: any) => {
        return gsap.to('html', {
          scrollBehavior: 'smooth',
          duration: 0.5,
        });
      },
    });

    // Handle scroll-triggered reveals for all elements with animation classes
    const reveals = document.querySelectorAll('[data-reveal]');
    reveals.forEach((reveal) => {
      gsap.to(reveal, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: reveal,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 0.5,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

// Scroll animation element wrapper
export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      data-reveal
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
