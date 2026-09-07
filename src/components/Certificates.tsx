import React from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { GraduationCap, ExternalLink, BadgeCheck } from 'lucide-react';

const ACCENTS = ['#FFC300', '#8FD14F', '#FF5FA2', '#4D7CFE'];

export const Certificates: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F0E4] border-t-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-black uppercase tracking-widest mb-3 font-bold">
          <GraduationCap className="h-4 w-4" />
          <span>CREDENTIALS &amp; COURSEWORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-4 font-heading">
          Certificates &amp; Continued Learning
        </h2>
        <p className="text-sm sm:text-base text-[#3A342A] max-w-2xl font-normal leading-relaxed mb-12">
          Verified coursework and simulations backing the systems above &mdash; data analytics, applied ML, and Python foundations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <a
                key={cert.id}
                href={cert.verifyLink}
                target="_blank"
                rel="noreferrer"
                style={{ boxShadow: `4px 4px 0px 0px ${accent}` }}
                className="group flex flex-col justify-between bg-white border-[3px] border-black p-5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-2 py-0.5 border-2 border-black text-[10px] font-mono font-bold uppercase text-black"
                      style={{ backgroundColor: accent }}
                    >
                      VERIFIED
                    </span>
                    <BadgeCheck className="h-4 w-4 text-black" />
                  </div>
                  <h3 className="text-base font-black text-black leading-snug mb-1.5">{cert.title}</h3>
                  <p className="text-xs font-mono font-bold text-[#5C5648] mb-1">{cert.issuer}</p>
                  <p className="text-[11px] font-mono text-[#8A8474] mb-4">
                    Issued {cert.date}
                    {cert.credentialId && <> &middot; ID: {cert.credentialId}</>}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t-2 border-black/10 text-xs font-mono font-bold text-black">
                  <span>VIEW CREDENTIAL</span>
                  <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
