import React, { useState } from 'react';
import { Terminal, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },
    { name: 'experience', href: '#experience' },
    { name: 'honors', href: '#achievements' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 header-blur py-4 px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Studio Brand Logo - AY Box Removed, Only Name & Subtitle Remain */}
        <a href="#hero" className="flex flex-col group">
          <span className="text-sm md:text-base font-bold font-heading text-black tracking-tight group-hover:text-zinc-700 transition-colors">
            {personalDetails.name}
          </span>
          <span className="text-[10px] font-mono text-zinc-600 font-medium">
            IIIT Ranchi CSE
          </span>
        </a>

        {/* Center Studio Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-zinc-600 hover:text-black transition-colors lowercase tracking-wider font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          
          {/* Resume PDF Download Button */}
          <a
            href="/Arvind_Yadav_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-300 bg-white text-xs font-mono text-black font-bold hover:bg-zinc-100 transition-colors shadow-sm"
            title="Download / View Resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-black" />
            <span>Resume</span>
          </a>

          {/* Direct Let's Talk CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white font-mono text-xs font-bold hover:bg-zinc-800 transition-colors shadow-md"
          >
            <span>let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* CLI Shortcut */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-100 text-xs font-mono text-zinc-800 hover:border-zinc-300 hover:bg-zinc-200 transition-colors"
            title="Open Interactive CLI (Ctrl+K)"
          >
            <Terminal className="w-3.5 h-3.5 text-zinc-600" />
            <span>CLI</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full border border-zinc-200 text-black"
            aria-label="Open menu"
          >
            <span className="text-xs font-mono lowercase">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-white/98 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-200 text-black">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 p-3 text-zinc-600 hover:text-black"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-heading font-bold text-zinc-600 hover:text-black transition-colors lowercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Arvind_Yadav_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-8 py-3 rounded-full border border-black text-black font-mono text-sm font-bold flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3 rounded-full bg-black text-white font-mono text-sm font-bold flex items-center gap-2"
            >
              <span>let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
