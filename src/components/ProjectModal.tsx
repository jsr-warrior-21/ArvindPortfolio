import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Zap, Layers } from 'lucide-react';
import type { ProjectItem } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200 pt-20">
      
      {/* Heavy Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Solid Opaque Light Modal Box */}
      <div className="modal-box-solid relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 bg-white text-black border border-zinc-200">
        
        {/* Sticky Close Header Strip */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black text-white font-bold">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-semibold">
              {project.period}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-mono font-bold hover:bg-zinc-800 transition-colors shadow-md cursor-pointer"
            aria-label="Close modal"
          >
            <span>Close (ESC)</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header Title */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-black">
            {project.title}
          </h3>

          <p className="text-base text-zinc-700 font-semibold font-sans">
            {project.subtitle}
          </p>
        </div>

        {/* Performance Metrics Callout */}
        {project.metrics && (
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-3 text-sm font-mono text-black shadow-inner">
            <Zap className="w-5 h-5 text-black flex-shrink-0" />
            <span><strong>Metrics & Benchmark:</strong> {project.metrics}</span>
          </div>
        )}

        {/* Architecture Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-black" />
            System Architecture
          </h4>
          <p className="text-sm text-zinc-800 leading-relaxed font-sans bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
            {project.architectureOverview}
          </p>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-black" />
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-800 leading-relaxed font-sans">
                <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-100 text-zinc-900 border border-zinc-200 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Actions & Links */}
        <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-black text-white font-mono text-xs font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-md"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-zinc-300 bg-white text-black font-mono text-xs font-bold flex items-center gap-2 hover:bg-zinc-100 transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
