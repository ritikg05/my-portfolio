'use client';

import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="section-label mb-8">07 / GET IN TOUCH</div>

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-black leading-none tracking-tight mb-8">
          LET&apos;S
          <br />
          BUILD.
        </h2>

        {/* Description */}
        <p className="text-base text-gray-400 mb-16 max-w-2xl leading-relaxed">
          For roles, freelance work, or to compare notes on storage engines — send a note. I read everything that lands here.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-sm font-mono tracking-widest font-bold mb-2">EMAIL</h3>
              <a
                href="mailto:HRG19976@gmail.com"
                className="text-lg hover:text-[#ff3b0a] transition-colors break-all"
              >
                HRG19976@gmail.com
              </a>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-mono tracking-widest font-bold mb-4">SOCIAL</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/ritikg05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff3b0a] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff3b0a] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LINKEDIN
                </a>
                <a
                  href="mailto:HRG19976@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff3b0a] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  EMAIL
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border-b border-white/20 py-3 px-0 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff3b0a] transition-colors text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border-b border-white/20 py-3 px-0 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff3b0a] transition-colors text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border-b border-white/20 py-3 px-0 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff3b0a] transition-colors text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black border-b border-white/20 py-3 px-0 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff3b0a] transition-colors text-sm resize-none"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-[#ff3b0a] text-white font-mono text-sm font-bold tracking-widest hover:bg-[#e63500] transition-colors disabled:opacity-50"
                  disabled={submitted}
                >
                  {submitted ? 'SENT ✓' : 'SEND MESSAGE →'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
