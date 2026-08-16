import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Trophy, Code2, Zap } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const AchievementsSection: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#000000', '#27272a', '#52525b', '#a1a1aa'],
    });
  };

  return (
    <section id="achievements" className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      
      {/* Editorial Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200 mb-12"
      >
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
            02 / Outcomes & Performance
          </div>
          <a href="#achievements">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-black tracking-tight leading-tight">
              Achievements & Honors
            </h2>
          </a>
        </div>
        <p className="text-sm text-zinc-600 font-sans max-w-md">
          Competitive programming figures, algorithmic accuracy, and hackathon MVPs.
        </p>
      </motion.div>

      {/* 3D Big Numbers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <TiltCard onClick={triggerConfetti} className="h-full flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black shadow-sm">
                    {idx === 0 && <Trophy className="w-6 h-6 text-amber-600" />}
                    {idx === 1 && <Code2 className="w-6 h-6 text-black" />}
                    {idx === 2 && <Zap className="w-6 h-6 text-black" />}
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200 font-bold">
                    {item.badge}
                  </span>
                </div>

                {/* Big Outcome Metric Number */}
                <div className="text-5xl md:text-6xl font-extrabold font-mono text-black mb-3 tracking-tight">
                  {item.value}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="pt-4 border-t border-zinc-200 text-xs font-mono text-black flex items-center gap-1.5 hover:underline font-bold"
                >
                  <span>Verify Profile on Platform →</span>
                </a>
              ) : (
                <div className="pt-4 border-t border-zinc-200 text-xs font-mono text-zinc-500">
                  <span>Verified Competitive Honor</span>
                </div>
              )}
            </TiltCard>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
