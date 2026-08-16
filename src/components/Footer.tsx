import React, { useState, useEffect } from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(Math.round((window.scrollY / totalHeight) * 100), 100));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-200 bg-zinc-50 py-10 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-0.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-black">
            <span>{personalDetails.name}</span>
            <span>•</span>
            <span className="font-mono text-zinc-600">IIIT Ranchi CSE '28</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-sans">
            Built with React 18, TypeScript & Tailwind CSS
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalDetails.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-black transition-colors shadow-sm"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalDetails.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-black transition-colors shadow-sm"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personalDetails.socials.codechef}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:text-black transition-colors shadow-sm"
            title="CodeChef Profile"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-mono text-zinc-800 hover:text-black transition-all shadow-sm group"
          title="Back to Top"
        >
          <span>Top ({scrollProgress}%)</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
