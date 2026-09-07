import React from 'react';
import { METRICS } from '../data/portfolioData';
import { TrendingUp } from 'lucide-react';

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-12 border-y-2 border-[#2B2342] bg-[#090710] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-[#9D72E8] font-bold tracking-widest uppercase">
          <TrendingUp className="h-4 w-4" />
          <span>PRODUCTION IMPACT METRICS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-none bg-[#110D1D] border-2 border-[#2B2342] hover:border-[#9D72E8] hover:shadow-[4px_4px_0_0_#9D72E8] transition-all duration-150 group"
            >
              <div className="text-2xl sm:text-3xl font-mono font-black text-white group-hover:text-[#9D72E8] transition-colors mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-[#D8B4FE] mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-[#8C82A2] leading-snug font-mono">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
