import React, { useEffect, useState } from 'react';

export const SpotlightBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Subtle Light Ambient Glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(228,228,231,0.6) 0%, rgba(244,244,245,0.3) 50%, transparent 80%)',
          top: '15%',
          left: '20%',
        }}
      />

      {/* Dynamic Cursor Spotlight Effect in Light Gray */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[120px] opacity-30 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,212,216,0.6) 0%, rgba(244,244,245,0.2) 60%, transparent 80%)',
          transform: `translate(${mousePos.x - 225}px, ${mousePos.y - 225}px)`,
        }}
      />

      {/* Subtle Dot Matrix Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
