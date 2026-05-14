import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-blue-500/30">
      
      {/* Navigation (Glassmorphic) */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-neutral-950/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight text-white">G. Jaya Sundar Prakash</h1>
          <a href="#contact" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 text-sm font-medium backdrop-blur-md border border-white/5">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* I. Hero Section */}
      <header className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
            Elevating Digital Learning through <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Strategic Visual Innovation.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Senior Visual Designer specializing in high-fidelity info-animation and interactive eLearning solutions for global industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition duration-300">
              View Portfolio
            </button>
            <button className="px-8 py-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 font-medium">
              Download CV
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        
        {/* II. Core Expertise */}
        <section>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">Core Expertise & Strategic Impact</h3>
            <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "End-to-End Design", desc: "Orchestrating the complete lifecycle from initial conceptualization to final delivery." },
              { title: "Information Design", desc: "Expertly distilling structural data into actionable, easy-to-understand visual forms." },
              { title: "Creative Leadership", desc: "Mentoring junior designers and fostering high-performance creative environments." },
              { title: "Industry Versatility", desc: "Delivering solutions for Pharma, Banking, Financial Services, and Telecom sectors." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300 group">
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* III. Featured Showreels */}
        <section>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">Featured Showreels</h3>
            <p className="text-neutral-400 mt-2">Hover to play. Discover the technical 'how' and the business 'why'.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            
            {/* Showreel Card 1 */}
            <div className="group relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 aspect-video md:aspect-[4/5] flex flex-col justify-end p-6 cursor-pointer">
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition duration-700 -z-10">
                {/* Placeholder for Video Background */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-2">Interactive eLearning Mastery</h4>
                <p className="text-sm text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Leveraging Articulate Storyline 360 to build immersive, logic-based learning environments that drive user engagement and retention.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">Storyline 360</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">Captivate</span>
                </div>
              </div>
            </div>

            {/* Showreel Card 2 */}
            <div className="group relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 aspect-video md:aspect-square flex flex-col justify-end p-6 cursor-pointer">
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition duration-700 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-2">High-Impact Info-Animation</h4>
                <p className="text-sm text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Transforming complex corporate data into fluid, high-fidelity motion graphics that simplify technical concepts for global stakeholders.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">After Effects</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">Premiere Pro</span>
                </div>
              </div>
            </div>

            {/* Showreel Card 3 */}
            <div className="group relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 aspect-video md:aspect-[4/5] flex flex-col justify-end p-6 cursor-pointer">
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition duration-700 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-2">K-12 Educational Storytelling</h4>
                <p className="text-sm text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Synthesizing SME requirements into engaging, age-appropriate visual activities and animations that revolutionize the digital classroom.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">Animate CC</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white">Photoshop</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* IV. Professional Trajectory */}
        <section>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">Professional Trajectory</h3>
          </div>
          <div className="space-y-4">
            {[
              { period: "Apr 2025 – Present", role: "Freelance Graphic Designer", org: "Global eLearning Agencies" },
              { period: "Sep 2016 – Mar 2025", role: "Assistant Manager (Visual Design)", org: "C&K Management Ltd" },
              { period: "Mar 2015 – Aug 2016", role: "Freelance Visual Designer", org: "C&K Management, Prism Multimedia" },
              { period: "May 2012 – Feb 2015", role: "Graphic Designer & Animator", org: "Sunitha Info Vision Limited" }
            ].map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/5 hover:bg-white/10 transition">
                <div className="w-full md:w-1/3 text-neutral-400 text-sm mb-2 md:mb-0">{job.period}</div>
                <div className="w-full md:w-1/3 text-white font-medium text-lg">{job.role}</div>
                <div className="w-full md:w-1/3 text-neutral-400 md:text-right">{job.org}</div>
              </div>
            ))}
          </div>
        </section>

        {/* V. Technical Arsenal */}
        <section>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">Technical Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Authoring & Interactive</h4>
              <p className="text-neutral-400">Articulate Storyline 360, Adobe Captivate</p>
            </div>
            <div className="p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Motion & Video</h4>
              <p className="text-neutral-400">Adobe After Effects, Premiere Pro, Animate CC</p>
            </div>
            <div className="p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Design, Layout & Audio</h4>
              <p className="text-neutral-400">Photoshop, Adobe Flash, WavePad, Audacity</p>
            </div>
            <div className="p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 bg-gradient-to-br from-blue-900/20 to-transparent">
              <h4 className="text-white font-semibold mb-4">Emerging Tech</h4>
              <p className="text-blue-300">Advanced knowledge of AR and VR tools.</p>
            </div>
          </div>
        </section>

      </main>

      {/* VI. Contact */}
      <footer id="contact" className="border-t border-white/10 backdrop-blur-xl bg-black/50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Connect & Collaborate</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Available for freelance opportunities and long-term collaborations in eLearning and Visual Design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-neutral-300">
            <a href="mailto:prakashgunturu07@gmail.com" className="flex items-center justify-center gap-2 hover:text-white transition">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">✉</span>
              prakashgunturu07@gmail.com
            </a>
            <a href="tel:7306070994" className="flex items-center justify-center gap-2 hover:text-white transition">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">📞</span>
              7306070994
            </a>
            <span className="flex items-center justify-center gap-2">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">📍</span>
              Hyderabad, India
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
