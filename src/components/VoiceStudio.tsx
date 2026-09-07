import React, { useState } from 'react';
import { AUDIO_SAMPLES, type AudioSample } from '../data/portfolioData';
import { ExternalLink, Radio, Sliders, Headphones } from 'lucide-react';

const ACCENT = '#4D7CFE';

export const VoiceStudio: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<AudioSample>(AUDIO_SAMPLES[0]);

  return (
    <section id="voice" className="py-24 bg-white border-y-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-black font-bold uppercase tracking-widest mb-3">
          <Radio className="h-4 w-4" />
          <span>VOICE LAB &amp; CONVERSATION STUDIO // 02</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-4 font-heading">
          Full-Duplex Speech &amp; Acoustic Turn-Taking
        </h2>
        <p className="text-sm sm:text-base text-[#3A342A] max-w-2xl font-normal leading-relaxed mb-3">
          Unlike brittle canned chatbots, production voice agents must handle latency jitter, speech-in interruptions, IVR voicemails, and strict single-question triage.
        </p>
        <p className="text-xs sm:text-sm text-[#5C5648] max-w-2xl font-mono leading-relaxed mb-12">
          These are demos of my prompt-writing work &mdash; real call recordings are linked from Google Drive below.
        </p>

        {/* Audio Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Sample Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {AUDIO_SAMPLES.map((sample) => {
              const isCurrent = selectedSample.id === sample.id;
              return (
                <div
                  key={sample.id}
                  onClick={() => setSelectedSample(sample)}
                  style={isCurrent ? { boxShadow: `4px 4px 0px 0px ${ACCENT}` } : undefined}
                  className={`p-4 cursor-pointer border-[3px] border-black transition-all duration-150 ${
                    isCurrent ? 'bg-[#EAF0FF]' : 'bg-[#F5F0E4] hover:bg-[#EDE6D6]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-black">{sample.title}</span>
                    <span className="text-[11px] font-mono text-black px-2.5 py-0.5 rounded-full border-2 border-black bg-white">
                      {sample.duration}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold mb-2" style={{ color: ACCENT }}>{sample.agentType}</div>
                  <div className="text-xs text-[#5C5648] line-clamp-1">{sample.scenario}</div>
                </div>
              );
            })}

            {/* Link to all Drive recordings */}
            <a
              href="https://drive.google.com/drive/folders/1yhcmfIIaLUbjgfetupg0k35NIRv8iz_w?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="mt-4 p-3 bg-white border-[3px] border-black hover:shadow-[3px_3px_0_0_#000000] text-xs font-mono font-bold text-black flex items-center justify-between group transition-all"
            >
              <span>ACCESS GOOGLE DRIVE CALL ARCHIVE</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Sample Detail Card */}
          <div className="lg:col-span-7 bg-[#F5F0E4] border-[3px] border-black p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0_0_#000000]">
            <div>
              {/* Card Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-black/15 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#8FD14F] border border-black" />
                  <span className="font-mono text-xs text-black uppercase tracking-wider font-bold">
                    PROMPT SAMPLE // {selectedSample.agentType}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#5C5648]">{selectedSample.duration}</span>
              </div>

              {/* Currently Selected Title */}
              <h3 className="text-xl sm:text-2xl font-black text-black mb-2">{selectedSample.title}</h3>
              <p className="text-xs font-mono font-bold mb-6" style={{ color: ACCENT }}>{selectedSample.scenario}</p>

              {/* Engineering Rule Card */}
              <div className="p-4 bg-white border-2 border-black mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold" style={{ color: ACCENT }}>
                  <Sliders className="h-3.5 w-3.5" />
                  <span>CRITICAL PROMPT CONSTRAINT</span>
                </div>
                <div className="text-xs text-black font-mono leading-relaxed">
                  {selectedSample.keyRule}
                </div>
              </div>
            </div>

            {/* Drive Link */}
            <div className="pt-4 border-t-2 border-black/15">
              <a
                href={selectedSample.driveLink}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: ACCENT }}
                className="w-full px-5 py-3 hover:brightness-110 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-all"
              >
                <Headphones className="h-4 w-4" />
                <span>LISTEN TO RECORDING (DRIVE)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
