import React, { useEffect, useRef } from 'react';

export const ThreeJsSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Icosahedron Vertices (Golden Ratio)
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: Array<[number, number, number]> = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];

    // Scale vertices
    const scale = Math.min(width, height) * 0.22;
    const vertices = rawVertices.map(([x, y, z]) => [x * scale, y * scale, z * scale]);

    // Edges connecting vertices if distance matches icosahedron edge length
    const edges: Array<[number, number]> = [];
    const edgeDistSq = (2 * scale) ** 2 * 1.1;

    for (let i = 0; i < vertices.length; i++) {
      for (let j = i + 1; j < vertices.length; j++) {
        const dx = vertices[i][0] - vertices[j][0];
        const dy = vertices[i][1] - vertices[j][1];
        const dz = vertices[i][2] - vertices[j][2];
        const dSq = dx * dx + dy * dy + dz * dz;
        if (dSq < edgeDistSq) {
          edges.push([i, j]);
        }
      }
    }

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetAngleY = (mouseX / width) * 2;
      targetAngleX = (mouseY / height) * 2;
    };

    const handleScroll = () => {
      targetAngleY += window.scrollY * 0.0005;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation toward target angles
      angleX += (targetAngleX - angleX) * 0.05 + 0.005;
      angleY += (targetAngleY - angleY) * 0.05 + 0.008;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Project 3D points
      const projected: Array<{ x: number; y: number; z: number }> = [];

      vertices.forEach(([vx, vy, vz]) => {
        // Rotate Y
        const x1 = vx * cosY - vz * sinY;
        const z1 = vx * sinY + vz * cosY;

        // Rotate X
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        // Perspective Projection
        const fov = 400;
        const perspective = fov / (fov + z2 + 200);

        projected.push({
          x: width / 2 + x1 * perspective,
          y: height / 2 + y2 * perspective,
          z: z2,
        });
      });

      // Draw 3D Edges with depth glow
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.1, Math.min(0.9, (avgZ + 150) / 300));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha * 0.7})`;
        ctx.stroke();
      });

      // Draw 3D Vertex Nodes
      projected.forEach((p) => {
        const nodeAlpha = Math.max(0.2, (p.z + 150) / 300);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${nodeAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-64 sm:h-72 relative flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-200 shadow-inner group">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md pointer-events-none">
        Interactive 3D Matrix (No Three.js)
      </div>
    </div>
  );
};
