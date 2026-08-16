import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ExternalLink, FolderGit2, Sparkles, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { TiltCard } from './TiltCard';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#000000', '#27272a', '#52525b'],
    });
  };

  return (
    <section id="projects" className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      
      {/* Editorial Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 mb-12"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-bold shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-black tracking-tight leading-tight">
            Case Studies & Architecture
          </h2>
        </div>
        <p className="text-sm text-zinc-600 font-sans max-w-md leading-relaxed">
          Hover and click any project card to open complete system architecture, benchmarks, and source code.
        </p>
      </motion.div>

      {/* Case Studies List */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TiltCard onClick={() => handleOpenProject(project)}>
              
              {/* Header Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-black text-white font-mono text-xs font-bold flex items-center justify-center shadow">
                    0{index + 1}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-bold">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{project.period}</span>
                </div>

                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-black transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-full border border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-black transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 pt-4">
                
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-black leading-tight">
                      {project.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-sm font-semibold text-zinc-700">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-zinc-600 leading-relaxed font-sans pt-1">
                    {project.description}
                  </p>

                  {/* Solution Highlights */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-black" />
                      Key Features:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-700 font-sans">
                      {project.highlights.slice(0, 3).map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-black font-bold">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column Metrics */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3 shadow-inner">
                    <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                      Benchmark Metrics
                    </div>

                    {project.metrics && (
                      <div className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-extrabold font-mono text-black tracking-tight">
                          {project.metrics.split('|')[0] || project.metrics}
                        </div>
                        <div className="text-xs text-zinc-500 font-sans">Tested Concurrency & Performance</div>
                      </div>
                    )}

                    <div className="pt-3 border-t border-zinc-200 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white text-zinc-800 border border-zinc-200 shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
