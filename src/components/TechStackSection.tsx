import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import type { SkillItem } from '../types';

interface DeviconMap {
  [key: string]: string;
}

const deviconLogos: DeviconMap = {
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Redux Toolkit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'HTML5 & CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Socket.IO': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Data Structures & Algorithms': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
};

export const TechStackSection: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<{ [categoryTitle: string]: SkillItem | null }>({});

  const handleSelectSkill = (categoryTitle: string, skill: SkillItem) => {
    setSelectedSkills((prev) => ({
      ...prev,
      [categoryTitle]: prev[categoryTitle]?.name === skill.name ? null : skill,
    }));
  };

  return (
    <section id="skills" className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 shadow-sm font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>TECHNICAL MATRIX</span>
        </div>

        <a href="#skills">
          <h2 className="text-4xl text-center md:text-6xl font-bold text-black tracking-tight">
            Tech Stack
          </h2>
        </a>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-800">
          Everything I build with
        </h3>
        <p className="text-sm text-zinc-600 font-normal">
          (hint: tap a skill badge to view real project implementation)
        </p>
      </motion.div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, idx) => {
          const activeSkill = selectedSkills[cat.title];

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="studio-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 border border-zinc-200 shadow-sm bg-white"
            >
              <div>
                <h4 className="text-xl font-bold text-black">
                  {cat.title}
                </h4>
                <p className="mt-1 text-sm text-zinc-600">
                  {cat.subtitle}
                </p>

                {/* Skill Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isPressed = activeSkill?.name === skill.name;
                    const logoUrl = deviconLogos[skill.name];

                    return (
                      <button
                        key={skill.name}
                        type="button"
                        aria-pressed={isPressed}
                        onClick={() => handleSelectSkill(cat.title, skill)}
                        className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                          isPressed
                            ? 'bg-black text-white border-black shadow-md font-bold'
                            : 'border-zinc-200 bg-zinc-100 text-zinc-800 hover:border-zinc-400 hover:text-black'
                        }`}
                      >
                        {logoUrl && (
                          <img
                            src={logoUrl}
                            alt={skill.name}
                            className="w-3.5 h-3.5 object-contain opacity-90"
                          />
                        )}
                        <span>{skill.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Info Box */}
              <div className="mt-6 min-h-[3.5rem] border-t border-zinc-200 pt-3 text-xs leading-relaxed transition-opacity duration-200 text-zinc-700">
                {activeSkill ? (
                  <p className="text-black font-mono">
                    <strong className="text-black font-bold">{activeSkill.name}:</strong> {activeSkill.description}
                  </p>
                ) : (
                  <p className="text-zinc-500 italic">
                    Pick a skill above ↑
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
