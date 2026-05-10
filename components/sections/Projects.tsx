'use client';

export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'Health Guard',
      description: 'AI-powered heart health recommendation system.',
      tags: ['AI', 'FULL-STACK', 'PYTHON', 'PYTORCH']
    },
    {
      num: '02',
      title: 'Data Visualization Dashboard',
      description: 'A MERN-stack dashboard with Excel upload, authentication, analytics charts, and interactive visualizations using Chart.js and Three.js.',
      tags: ['MONGODB', 'EXPRESS', 'REACT', 'NODE.JS', 'CHART.JS', 'THREE.JS']
    },
    {
      num: '03',
      title: 'Intelligent Object Detection System',
      description: 'An AI-powered system for object detection and environment analysis using deep learning techniques.',
      tags: ['PYTHON', 'PYTORCH', 'DEEP LEARNING', 'COMPUTER VISION']
    },
    {
      num: '04',
      title: 'Book Store REST API',
      description: 'A backend RESTful API with authentication, CRUD operations, and database integration.',
      tags: ['NODE.JS', 'EXPRESS', 'MONGODB', 'JWT']
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="section-label mb-8">05 / SELECTED WORK</div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Heading */}
          <h2 className="section-heading">PROJECTS.</h2>

          {/* Description */}
          <p className="text-base text-gray-400 leading-relaxed">
            AI-powered applications, full-stack web platforms, dashboards, REST APIs and intelligent systems focused on solving real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="relative border border-white/10 p-8 hover:border-[#ff3b0a] glow-hover transition-all group overflow-hidden">
              {/* Project Number Background */}
              <div className="project-number">{project.num}</div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl font-black text-white/10">PROJECT {project.num}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
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
