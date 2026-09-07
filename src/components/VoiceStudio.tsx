import React, { useState, useEffect } from 'react';
import { AUDIO_SAMPLES, type AudioSample } from '../data/portfolioData';
import { Play, Pause, ExternalLink, Radio, Sliders } from 'lucide-react';

export const VoiceStudio: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<AudioSample>(AUDIO_SAMPLES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeBars, setActiveBars] = useState<number[]>([]);

  // Simulated live audio spectrum waveform animation
  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        const bars = Array.from({ length: 28 }, () => Math.floor(Math.random() * 85) + 15);
        setActiveBars(bars);
      }, 100);
    } else {
      setActiveBars(Array.from({ length: 28 }, () => 8));
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="voice" className="py-24 bg-[#0A0713] border-y-2 border-[#2B2342] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#9D72E8] font-bold uppercase tracking-widest mb-3">
          <Radio className="h-4 w-4" />
          <span>VOICE LAB & CONVERSATION STUDIO // 02</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
          Full-Duplex Speech & Acoustic Turn-Taking
        </h2>
        <p className="text-sm sm:text-base text-[#A197B8] max-w-2xl font-normal leading-relaxed mb-12">
          Unlike brittle canned chatbots, production voice agents must handle latency jitter, speech-in interruptions, IVR voicemails, and strict single-question triage. Test sample audio recordings and explore underlying constraint logic below.
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
                  onClick={() => {
                    setSelectedSample(sample);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-none cursor-pointer border-2 transition-all duration-150 ${
                    isCurrent
                      ? 'bg-[#150F26] border-[#9D72E8] shadow-[4px_4px_0_0_#9D72E8]'
                      : 'bg-[#0F0C1B] border-[#251D38] hover:border-[#9D72E8] hover:bg-[#130E22]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-white">{sample.title}</span>
                    <span className="text-[11px] font-mono text-[#D8B4FE] px-2.5 py-0.5 rounded-full border border-[#9D72E8]/50">
                      {sample.duration}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#9D72E8] font-semibold mb-2">{sample.agentType}</div>
                  <div className="text-xs text-[#8E84A4] line-clamp-1">{sample.scenario}</div>
                </div>
              );
            })}

            {/* Link to all Drive recordings */}
            <a
              href="https://drive.google.com/drive/folders/1yhcmfIIaLUbjgfetupg0k35NIRv8iz_w?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="mt-4 p-3 rounded-none bg-[#110D1D] border-2 border-[#2B2342] hover:border-[#9D72E8] hover:shadow-[3px_3px_0_0_#9D72E8] text-xs font-mono text-[#C4BED9] flex items-center justify-between group transition-all"
            >
              <span>ACCESS GOOGLE DRIVE CALL ARCHIVE</span>
              <ExternalLink className="h-4 w-4 text-[#9D72E8] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Interactive Synthesizer Console */}
          <div className="lg:col-span-7 rounded-none bg-[#0D0918] border-2 border-[#2B2342] p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0_0_#2B2342]">
            <div>
              {/* Console Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#211836] mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FBBF24] animate-pulse" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider font-bold">
                    SPECTRUM SIMULATOR // {selectedSample.agentType}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#7E7496]">SUB-800MS STT/TTS</span>
              </div>

              {/* Currently Selected Title */}
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{selectedSample.title}</h3>
              <p className="text-xs font-mono text-[#9D72E8] mb-6">{selectedSample.scenario}</p>

              {/* Dynamic Waveform Visualizer */}
              <div className="h-28 rounded-none bg-[#07050D] border-2 border-[#211836] p-4 flex items-end justify-between gap-1.5 mb-6 overflow-hidden">
                {activeBars.map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`flex-1 rounded-none transition-all duration-75 ${
                      isPlaying
                        ? 'bg-[#9D72E8]'
                        : 'bg-[#251D38]'
                    }`}
                  />
                ))}
              </div>

              {/* Engineering Rule Card */}
              <div className="p-4 rounded-none bg-[#120D21] border-2 border-[#241B3B] mb-6">
                <div className="text-[11px] font-mono text-[#9D72E8] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                  <Sliders className="h-3.5 w-3.5" />
                  <span>CRITICAL PROMPT CONSTRAINT</span>
                </div>
                <div className="text-xs text-[#D1CCE0] font-mono leading-relaxed">
                  {selectedSample.keyRule}
                </div>
              </div>
            </div>

            {/* Playback Controls & Drive Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#1F1732]">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="px-5 py-2.5 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-xs font-bold flex items-center gap-2 border-2 border-black shadow-[3px_3px_0_0_#FFFFFF] transition-all"
                >
                  {isPlaying ? <Pause className="h-4 w-4 fill-black" /> : <Play className="h-4 w-4 fill-black" />}
                  <span>{isPlaying ? 'PAUSE STREAM' : 'SIMULATE STREAM'}</span>
                </button>
                <span className="font-mono text-xs text-[#7A7091]">
                  {isPlaying ? 'Acoustic pipeline live' : 'Ready for test call'}
                </span>
              </div>

              <a
                href={selectedSample.driveLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-none bg-[#171126] hover:bg-[#251C3D] text-white border-2 border-[#31254D] hover:border-[#9D72E8] font-mono text-xs flex items-center gap-2 shadow-[2px_2px_0_0_#2B2342] hover:shadow-[2px_2px_0_0_#9D72E8] transition-all"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#9D72E8]" />
                <span>LISTEN TO RECORDING (DRIVE)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
