import React, { useState } from 'react';
import { RESEARCH_PAPERS, type ResearchPaper } from '../data/portfolioData';
import { BookOpen, FileText, CheckCircle, ExternalLink } from 'lucide-react';

const ACCENTS = ['#8FD14F', '#FF5FA2'];

interface ResearchPaperCardProps {
  paper: ResearchPaper;
  accent: string;
}

const ResearchPaperCard: React.FC<ResearchPaperCardProps> = ({ paper, accent }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white border-[3px] border-black p-6 sm:p-10 shadow-[8px_8px_0_0_#000000] relative overflow-hidden">
        {/* Solid accent border top */}
        <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: accent }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Col: Paper Info & Core Abstract */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full border-2 border-black text-[11px] font-mono font-bold text-black" style={{ backgroundColor: accent }}>
                EMPIRICAL WORKING PAPER
              </span>
              <span className="text-xs font-mono text-[#5C5648]">
                {paper.institution}{paper.period ? ` · ${paper.period}` : ''}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 leading-snug">
              {paper.title}
            </h3>

            <div className="text-xs font-mono text-black font-bold mb-6">
              Authors: {paper.authors.join(' · ')}
            </div>

            <p className="text-sm text-[#3A342A] leading-relaxed font-normal mb-6">
              {paper.abstract}
            </p>

            {/* Insights List */}
            <div className="space-y-2.5 mb-8">
              <div className="text-xs font-mono text-black uppercase tracking-wider font-bold">
                KEY STATISTICAL INFERENCES:
              </div>
              {paper.insights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3A342A] leading-relaxed">
                  <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span>{insight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowModal(true)}
                style={{ backgroundColor: accent }}
                className="px-5 py-2.5 hover:brightness-105 text-black font-mono text-xs font-bold flex items-center gap-2 border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>VIEW FULL ABSTRACT &amp; METHODOLOGY</span>
              </button>

              {paper.links?.application && (
                <a
                  href={paper.links.application.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-white hover:bg-[#EDE9F8] text-black border-[3px] border-black font-mono text-xs font-bold flex items-center gap-2 shadow-[2px_2px_0_0_#000000] transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{paper.links.application.label.toUpperCase()}</span>
                </a>
              )}

              {paper.links?.slides && (
                <a
                  href={paper.links.slides}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-white hover:bg-[#EDE9F8] text-black border-[3px] border-black font-mono text-xs font-bold flex items-center gap-2 shadow-[2px_2px_0_0_#000000] transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>VIEW PRESENTATION</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Col: Statistical Metrics Card */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {paper.keyStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 bg-[#EDE9F8] border-2 border-black hover:shadow-[3px_3px_0_0_#000000] transition-all"
              >
                <div className="text-2xl sm:text-3xl font-mono font-black text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-black mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-[#5C5648]">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Abstract Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/75"
            onClick={() => setShowModal(false)}
          />
          <div className="relative w-full max-w-2xl bg-white border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10">
            <h3 className="text-xl font-black text-black mb-2">{paper.title}</h3>
            <p className="text-xs font-mono text-black font-bold mb-4">
              {paper.institution}{paper.period ? ` · ${paper.period}` : ''}
            </p>
            <div className="text-xs text-[#3A342A] leading-relaxed space-y-4 mb-6">
              <p>
                <strong>Methodology:</strong> {paper.methodology}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                style={{ backgroundColor: accent }}
                className="px-5 py-2 text-black font-mono text-xs font-bold border-[3px] border-black shadow-[2px_2px_0_0_#000000] transition-all"
              >
                CLOSE MODAL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ResearchExplorer: React.FC = () => {
  return (
    <section id="research" className="py-24 relative bg-[#EDE9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-black uppercase tracking-widest mb-3 font-bold">
          <BookOpen className="h-4 w-4" />
          <span>EMPIRICAL RESEARCH &amp; STATISTICAL STUDIES // 03</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-4 font-heading">
          Research &amp; Policy Modeling
        </h2>
        <p className="text-sm sm:text-base text-[#3A342A] max-w-3xl font-normal leading-relaxed mb-12">
          Bridging technical software systems with empirical social science &mdash; statistical, mixed-methods studies on public perception, behavioral psychology, and policy intervention.
        </p>

        <div className="space-y-10">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <ResearchPaperCard key={paper.id} paper={paper} accent={ACCENTS[idx % ACCENTS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};
