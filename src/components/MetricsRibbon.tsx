import React from 'react';
import { METRICS } from '../data/portfolioData';
import { TrendingUp } from 'lucide-react';

export const MetricsRibbon: React.FC = () => {
  return (
    <section className="py-12 border-y border-[#1E1730] bg-[#090710]/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-[#9D72E8] tracking-widest uppercase">
          <TrendingUp className="h-4 w-4" />
          <span>PRODUCTION IMPACT METRICS</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#110D1D] border border-[#271E3D] hover:border-[#9D72E8] transition-all duration-200 group hover:-translate-y-1 shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white group-hover:text-[#B794F4] transition-colors mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-[#D3CFE0] mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-[#7E7494] leading-snug">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
