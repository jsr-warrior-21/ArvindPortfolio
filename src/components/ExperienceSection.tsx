import React from 'react';
import { experiences } from '../data/portfolioData';

interface DeviconMap {
  [key: string]: string;
}

const deviconLogos: DeviconMap = {
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'JavaScript (ES6+)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Agile / Scrum': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Performance Optimization': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      
      {/* Huge Section Title */}
      <div className="mb-16 text-center space-y-3">
        <a href="#experience">
          <h2 className="text-4xl text-center md:text-6xl font-bold text-black tracking-tight font-heading">
            Experience
          </h2>
        </a>
        <p className="mx-auto max-w-3xl font-normal text-base text-center text-zinc-600 font-sans">
          My professional web engineering journey.
        </p>
      </div>

      {/* Timeline Wrapper - Matches Full 7xl Layout */}
      <div className="flex flex-col gap-8 md:gap-12 relative max-w-5xl mx-auto">
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-zinc-200 hidden md:block -translate-x-1/2" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="studio-card rounded-3xl border border-zinc-200 p-6 md:p-8 space-y-6 shadow-sm bg-white hover:border-zinc-400 transition-all">
              
              {/* Header Title & Date Pill */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-200 pb-4">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black font-heading">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-zinc-700 font-sans">
                    {exp.company} — {exp.location}
                  </div>
                </div>

                <div className="inline-flex items-center rounded-full border border-zinc-200 px-3.5 py-1 bg-zinc-100 font-mono text-xs text-zinc-800 font-bold w-fit">
                  {exp.period}
                </div>
              </div>

              {/* Achievements Bullet List */}
              <ul className="list-disc list-outside ml-4 space-y-2.5 text-base text-zinc-800 leading-relaxed font-sans">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>

              {/* Devicon Technology Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200">
                {exp.technologies.map((tech) => {
                  const logoUrl = deviconLogos[tech];

                  return (
                    <div
                      key={tech}
                      className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 gap-2 shadow-sm font-mono"
                    >
                      {logoUrl && (
                        <img
                          src={logoUrl}
                          alt={tech}
                          className="w-3.5 h-3.5 object-contain opacity-90"
                        />
                      )}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
