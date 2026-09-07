import React from 'react';
import { METRICS } from '../data/portfolioData';
import { TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

const ACCENTS = ['#FFC300', '#FF5FA2', '#8FD14F', '#4D7CFE', '#9D72E8', '#FF5A36'];

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-12 border-y-[3px] border-black bg-[#EDE9F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-black font-bold tracking-widest uppercase">
          <TrendingUp className="h-4 w-4" />
          <span>PRODUCTION IMPACT METRICS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {METRICS.map((metric, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <Reveal key={idx} delay={idx * 60}>
                <div
                  style={{ boxShadow: `4px 4px 0px 0px ${accent}` }}
                  className="p-4 bg-white border-[3px] border-black transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                >
                  <div className="text-2xl sm:text-3xl font-mono font-black text-black mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-black mb-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#5C5648] leading-snug font-mono">
                    {metric.desc}
                  </div>
                  <div className="h-1.5 w-8 mt-3" style={{ backgroundColor: accent }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
