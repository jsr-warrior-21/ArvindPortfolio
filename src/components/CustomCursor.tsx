import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ultra-Smooth Dual Spring Physics
  const cursorX = useSpring(-100, { stiffness: 1000, damping: 35 });
  const cursorY = useSpring(-100, { stiffness: 1000, damping: 35 });

  const ringX = useSpring(-100, { stiffness: 350, damping: 25 });
  const ringY = useSpring(-100, { stiffness: 350, damping: 25 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const projectCard = target.closest('#projects .studio-card');
      const actionButton = target.closest('a, button, input, textarea');

      if (projectCard) {
        setIsHovered(true);
        setCursorText('CLICK TO VIEW');
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);
      } else if (actionButton) {
        setIsHovered(true);
        setCursorText('');
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);
      } else {
        setIsHovered(false);
        setCursorText('');
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden hidden md:block">
      
      {/* Outer Circle Cursor: Perfect Round Circle with "CLICK TO VIEW" text */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.85 : cursorText ? 1.0 : isHovered ? 1.5 : 1,
          width: cursorText ? '5rem' : '2.5rem',
          height: cursorText ? '5rem' : '2.5rem',
          backgroundColor: cursorText ? '#000000' : isHovered ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.03)',
          borderColor: cursorText ? '#000000' : isHovered ? '#000000' : 'rgba(0, 0, 0, 0.25)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        className="rounded-full border border-black flex flex-col items-center justify-center pointer-events-none shadow-2xl overflow-hidden text-center"
      >
        {cursorText && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center leading-none space-y-0.5"
          >
            <span className="text-[9px] font-mono font-extrabold text-white tracking-wider uppercase">
              CLICK
            </span>
            <span className="text-[9px] font-mono font-extrabold text-white tracking-wider uppercase">
              TO VIEW
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Inner Core Precision Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorText ? 0 : isClicked ? 1.8 : isHovered ? 1.3 : 1,
          backgroundColor: '#000000',
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
        className="w-2.5 h-2.5 rounded-full bg-black pointer-events-none shadow-sm"
      />
    </div>
  );
};
