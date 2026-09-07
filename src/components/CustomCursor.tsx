import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor-pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let animId: number;
    const follow = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer Glow Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out ${
          isPointer
            ? 'h-12 w-12 border-[#9D72E8] bg-[#9D72E8]/10 shadow-[0_0_20px_rgba(157,114,232,0.4)]'
            : 'h-8 w-8 border-[#9D72E8]/40 shadow-[0_0_10px_rgba(157,114,232,0.2)]'
        }`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
        }}
      />
      {/* Center Precision Dot */}
      <div
        className="fixed h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B794F4]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </div>
  );
};
