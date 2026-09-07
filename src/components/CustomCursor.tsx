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
      {/* Outer Brutalist Reticle */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 border-2 border-black transition-all duration-150 ease-out ${
          isPointer
            ? 'h-10 w-10 bg-[#FFC300]/40 shadow-[3px_3px_0_0_#000000]'
            : 'h-6 w-6 bg-transparent shadow-[2px_2px_0_0_#000000]'
        }`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
        }}
      />
      {/* Center Precision Square */}
      <div
        className="fixed h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-black"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </div>
  );
};
