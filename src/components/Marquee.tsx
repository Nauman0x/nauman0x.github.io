import React from 'react';

interface MarqueeProps {
  items: string[];
  bg?: string;
  text?: string;
  border?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  bg = '#111111',
  text = '#EDE9F8',
  border = '#000000',
}) => {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y-[3px] py-3"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center shrink-0 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest"
            style={{ color: text }}
          >
            <span className="px-4">{item}</span>
            <span className="px-1" style={{ color: '#FFC300' }}>&#9670;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
