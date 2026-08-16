import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2, Award, Sparkles, Terminal, FileText, Sparkle, ChevronDown } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { TiltCard } from './TiltCard';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto z-10 flex flex-col justify-between">
      
      <div>
        {/* Clean Status Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-black text-white border border-black font-bold shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Web Engineering Roles</span>
          </motion.span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-semibold shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-zinc-600" />
            <span>IIIT Ranchi CSE '28</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-semibold shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>CodeChef 3★ (1609 Peak)</span>
          </span>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Name & Subtitle */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-black tracking-tight leading-tight"
              >
                {personalDetails.name}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl font-heading font-semibold text-zinc-700"
              >
                Full-Stack Web Developer & Computer Science Engineer
              </motion.p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-sans max-w-2xl">
              {personalDetails.tagline} Experienced in building production-ready MERN stack web applications, high-concurrency WebSocket infrastructure, and responsive user interfaces.
            </p>

            {/* Clean 2-Card Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 py-2 max-w-md">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="studio-card p-4 rounded-2xl border border-zinc-200 text-center shadow-sm bg-white"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                  650+
                </div>
                <div className="text-xs text-zinc-600 font-sans mt-1 font-medium">
                  DSA Problems Solved
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="studio-card p-4 rounded-2xl border border-zinc-200 text-center shadow-sm bg-white"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-black">
                  8.44
                </div>
                <div className="text-xs text-zinc-600 font-sans mt-1 font-medium">
                  IIIT Ranchi CGPA
                </div>
              </motion.div>
            </div>

            {/* Action CTAs including Resume PDF Download */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/Arvind_Yadav_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-black text-white font-semibold text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Download Resume (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="px-6 py-3.5 rounded-xl border border-zinc-300 bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-6 py-3.5 rounded-xl border border-zinc-200 bg-zinc-100 text-black font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-zinc-600" />
                <span>Contact Me</span>
              </motion.a>

              <div className="flex items-center gap-3 pl-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={personalDetails.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-black transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={personalDetails.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-black transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Full Photo Reveal Studio Card & Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6"
          >
            <TiltCard className="w-full max-w-md p-6 bg-white border border-zinc-200 rounded-3xl shadow-xl space-y-6">
              
              {/* Full Studio Photo Card: Default Blur -> HD Crisp Reveal on Hover */}
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl w-full h-64 sm:h-72 border border-zinc-200 bg-zinc-900 shadow-md">
                <img
                  src="/arvind.jpg"
                  alt="Arvind Yadav"
                  className="w-full h-full object-cover object-top filter blur-md opacity-70 grayscale scale-100 group-hover:blur-none group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 z-20 shadow-md">
                  <Sparkle className="w-3 h-3 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="group-hover:hidden">Hover to reveal HD Photo</span>
                  <span className="hidden group-hover:inline text-emerald-400 font-extrabold">HD Studio Portrait</span>
                </div>

                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-bold flex items-center gap-1.5 z-20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Arvind Yadav</span>
                </span>
              </div>

              {/* Code Snippet Box */}
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-600 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-zinc-600" />
                    <span>arvind.ts</span>
                  </div>
                </div>

                <div className="font-mono text-xs space-y-1.5 text-zinc-800 leading-normal p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <div>
                    <span className="text-zinc-500 font-bold">const</span>{' '}
                    <span className="text-black font-bold">developer</span> = {'{'}
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-600">name</span>: <span className="text-black font-semibold">"{personalDetails.name}"</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-600">college</span>: <span className="text-black font-semibold">"IIIT Ranchi"</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-600">skills</span>: [
                    <span className="text-black">"React"</span>,{' '}
                    <span className="text-black">"Node.js"</span>,{' '}
                    <span className="text-black">"Socket.IO"</span>],
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-600">codeChefRating</span>: <span className="text-black font-bold">1609</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-zinc-600">dsaSolved</span>: <span className="text-black font-bold">650</span>
                  </div>
                  <div>{'}'};</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-zinc-600">
                <span className="flex items-center gap-1 font-mono text-[11px] text-black font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> 95+ Lighthouse Score
                </span>
                <span className="font-mono text-[11px] text-zinc-600">MERN Stack</span>
              </div>

            </TiltCard>
          </motion.div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="pt-12 flex flex-col items-center justify-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
      >
        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-500">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-zinc-300 bg-white text-black shadow-sm"
        >
          <ChevronDown className="w-4 h-4 text-black" />
        </motion.div>
      </motion.div>

    </section>
  );
};
