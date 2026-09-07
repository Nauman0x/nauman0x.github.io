import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#090712] border-t border-[#1F1732] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#9D72E8] uppercase tracking-widest mb-3">
          <Briefcase className="h-4 w-4" />
          <span>PRODUCTION WORK HISTORY // 01</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Experience & Field Track Record
        </h2>
        <p className="text-sm sm:text-base text-[#A197B8] max-w-2xl font-normal leading-relaxed mb-12">
          Engineering scalable conversational architectures, robust CRM/payment integrations, and automated operational pipelines for international companies.
        </p>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0E0B1A] border border-[#271E3C] hover:border-[#9D72E8] transition-all duration-200 shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-[#211836]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B794F4] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-[#9D72E8] font-medium mt-0.5 flex items-center gap-1.5">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline flex items-center gap-1 text-[#B794F4]"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-[#9D72E8]" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8A80A2]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161124] border border-[#2A2042]">
                    <Calendar className="h-3.5 w-3.5 text-[#9D72E8]" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161124] border border-[#2A2042]">
                    <MapPin className="h-3.5 w-3.5 text-[#9D72E8]" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#BCB6D1] flex items-start gap-2.5 leading-relaxed font-normal">
                    <CheckCircle2 className="h-4 w-4 text-[#9D72E8] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#140F24] border border-[#261D3A] text-[11px] font-mono text-[#C4BED9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
