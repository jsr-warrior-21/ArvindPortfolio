import React, { useEffect, useRef } from 'react';

export const Global3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 3D Nodes Matrix
    const NODE_COUNT = 35;
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
    }> = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * width * 1.5;
      const y = (Math.random() - 0.5) * height * 2.5;
      const z = Math.random() * 800 - 400;

      nodes.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) * 0.0004;
      mouseY = (e.clientY - height / 2) * 0.0004;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const scrollY = window.scrollY || 0;
      targetRotY = mouseX + scrollY * 0.0003;
      targetRotX = mouseY;

      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected: Array<{ x: number; y: number; z: number; size: number; alpha: number }> = [];

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (Math.abs(node.x) > width) node.vx *= -1;
        if (Math.abs(node.y) > height * 2) node.vy *= -1;
        if (Math.abs(node.z) > 500) node.vz *= -1;

        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.x * sinY + node.z * cosY;

        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        const fov = 600;
        const perspective = fov / (fov + z2 + 500);

        const screenX = width / 2 + x1 * perspective;
        const screenY = height / 2 + (y2 - scrollY * 0.2) * perspective;
        const alpha = Math.max(0.04, Math.min(0.25, (z2 + 500) / 1000));

        projected.push({
          x: screenX,
          y: screenY,
          z: z2,
          size: node.size * perspective,
          alpha,
        });
      });

      // Draw 3D Connecting Lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 140 * 140) {
            const lineAlpha = (1 - Math.sqrt(distSq) / 140) * Math.min(p1.alpha, p2.alpha) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw 3D Node Points
      projected.forEach((p) => {
        if (p.x >= -50 && p.x <= width + 50 && p.y >= -50 && p.y <= height + 50) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${p.alpha * 0.7})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-35"
    />
  );
};
