import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  'React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'TypeScript', 'Next.js',
  'Tailwind CSS', 'Express.js', 'REST APIs', 'Data Structures & Algorithms',
  'CodeChef 3★ (1609)', 'Git & GitHub', 'JWT Auth', 'Vite', 'Postman'
];

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-4 my-12 border-y border-zinc-800 shadow-xl relative z-10">
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
      >
        {[...skillsList, ...skillsList].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-mono text-sm font-bold tracking-wider uppercase text-zinc-200">
              {skill}
            </span>
            <span className="text-zinc-600 font-bold">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
