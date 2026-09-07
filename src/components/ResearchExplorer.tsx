import React, { useState } from 'react';
import { RESEARCH_PAPER } from '../data/portfolioData';
import { BookOpen, FileText, CheckCircle, ExternalLink } from 'lucide-react';

export const ResearchExplorer: React.FC = () => {
  const [showAbstractModal, setShowAbstractModal] = useState(false);

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#9D72E8] uppercase tracking-widest mb-3">
          <BookOpen className="h-4 w-4" />
          <span>EMPIRICAL RESEARCH & STATISTICAL STUDY // 03</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Urban Stray Coexistence & Policy Modeling
        </h2>
        <p className="text-sm sm:text-base text-[#A197B8] max-w-3xl font-normal leading-relaxed mb-12">
          Bridging technical software systems with empirical social science. Authored a statistical mixed-methods study investigating sustainable, humane stray management across urban Pakistan, evaluating public preference, behavioral psychology, and Trap-Neuter-Vaccinate-Release (TNVR).
        </p>

        {/* Paper Feature Box */}
        <div className="rounded-none bg-[#0F0C1B] border-2 border-[#2B2342] p-6 sm:p-10 shadow-[8px_8px_0_0_#2B2342] relative overflow-hidden">
          {/* Solid accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#9D72E8]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Paper Info & Core Abstract */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-transparent border-2 border-[#9D72E8]/60 text-[11px] font-mono text-[#D8B4FE]">
                  EMPIRICAL WORKING PAPER
                </span>
                <span className="text-xs font-mono text-[#877D9E]">
                  {RESEARCH_PAPER.institution}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-snug">
                {RESEARCH_PAPER.title}
              </h3>

              <div className="text-xs font-mono text-[#9D72E8] font-bold mb-6">
                Authors: {RESEARCH_PAPER.authors.join(' · ')}
              </div>

              <p className="text-sm text-[#BCB6D1] leading-relaxed font-normal mb-6">
                {RESEARCH_PAPER.abstract}
              </p>

              {/* Insights List */}
              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-mono text-[#9D72E8] uppercase tracking-wider font-bold">
                  KEY STATISTICAL INFERENCES:
                </div>
                {RESEARCH_PAPER.insights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CBC6DB] leading-relaxed">
                    <CheckCircle className="h-4 w-4 text-[#9D72E8] shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowAbstractModal(true)}
                  className="px-5 py-2.5 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-xs font-bold flex items-center gap-2 border-2 border-black shadow-[3px_3px_0_0_#FFFFFF] transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>VIEW FULL ABSTRACT & METHODOLOGY</span>
                </button>

                <a
                  href="https://github.com/Nauman0x/Paw-s-Pal"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-none bg-[#151024] hover:bg-[#201836] text-[#D8B4FE] border-2 border-[#2E2248] hover:border-[#9D72E8] font-mono text-xs font-bold flex items-center gap-2 shadow-[2px_2px_0_0_#2B2342] hover:shadow-[2px_2px_0_0_#9D72E8] transition-all"
                >
                  <ExternalLink className="h-4 w-4 text-[#9D72E8]" />
                  <span>VIEW APPLICATION (PAW'S PAL)</span>
                </a>
              </div>
            </div>

            {/* Right Col: Statistical Metrics Card */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {RESEARCH_PAPER.keyStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-none bg-[#140F24] border-2 border-[#2B2044] hover:border-[#9D72E8] hover:shadow-[3px_3px_0_0_#9D72E8] transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-mono font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#D8B4FE] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-[#8C82A2]">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Modal */}
      {showAbstractModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85"
            onClick={() => setShowAbstractModal(false)}
          />
          <div className="relative w-full max-w-2xl rounded-none bg-[#0F0C1B] border-2 border-[#9D72E8] shadow-[8px_8px_0_0_#9D72E8] p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10">
            <h3 className="text-xl font-black text-white mb-2">{RESEARCH_PAPER.title}</h3>
            <p className="text-xs font-mono text-[#9D72E8] font-bold mb-4">
              Lead Author: Nauman Arif (bscs23060@itu.edu.pk) · Information Technology University
            </p>
            <div className="text-xs text-[#BCB6D1] leading-relaxed space-y-4 mb-6">
              <p>
                <strong>Methodology:</strong> Standardized online questionnaire administered across urban citizens (N=406). Evaluated demographics, exposure frequency, perception of stray aggression, and willingness to financially contribute to TNVR campaigns.
              </p>
              <p>
                <strong>Analytical Techniques:</strong>
                <br />• Chi-Square test of independence (χ² = 36.19, df = 16, p = 0.0027) confirming interaction frequency directly predicts perception.
                <br />• Collapsed contingency table (χ² = 17.48, df = 2, p = 0.00016, Cramér’s V = 0.207).
                <br />• Point-biserial correlation for pet ownership (r = -0.401, p &lt; 0.001) &amp; Mann-Whitney U test.
                <br />• One-tailed Z-test proving mistreatment is cited significantly more than disease (Z = 16.30, McNemar’s χ² = 208.10, p &lt; 0.001).
                <br />• Principal Component Analysis (PCA): PC1 alone accounts for 44.4% of variance, proving citizens favor a unified multi-tiered intervention package.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowAbstractModal(false)}
                className="px-5 py-2 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-xs font-bold border-2 border-black shadow-[2px_2px_0_0_#FFFFFF] transition-all"
              >
                CLOSE MODAL
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
