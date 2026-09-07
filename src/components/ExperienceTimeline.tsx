import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

const ACCENTS = ['#4D7CFE', '#FF5FA2', '#8FD14F'];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white border-t-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-black uppercase tracking-widest mb-3 font-bold">
          <Briefcase className="h-4 w-4" />
          <span>PRODUCTION WORK HISTORY // 01</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-4 font-heading">
          Experience &amp; Field Track Record
        </h2>
        <p className="text-sm sm:text-base text-[#3A342A] max-w-2xl font-normal leading-relaxed mb-12">
          Engineering scalable conversational architectures, robust CRM/payment integrations, and automated operational pipelines for international companies.
        </p>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <div
                key={idx}
                style={{ borderLeftColor: accent, borderLeftWidth: 8, boxShadow: `6px 6px 0px 0px ${accent}` }}
                className="p-6 sm:p-8 bg-[#F5F0E4] border-[3px] border-black transition-all duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b-2 border-black/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-black">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono font-bold mt-0.5 flex items-center gap-1.5" style={{ color: accent }}>
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-black">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#3A342A] flex items-start gap-2.5 leading-relaxed font-normal">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: accent }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-white border-2 border-black text-[10px] font-mono font-bold uppercase text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
