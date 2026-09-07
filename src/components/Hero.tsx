import React, { useState, useEffect } from 'react';
import { Award, Bot, Cpu, Volume2, Sparkles, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Karachi (PKT)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#9D72E8]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Accolade ribbon pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1429] border border-[#3C2D5A] text-xs font-mono text-[#D8B4FE]">
            <Award className="h-3.5 w-3.5 text-[#9D72E8]" />
            <span>WINNER · SOFTEC ’26 NATIONAL AI HACKATHON</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#9D72E8]/20 text-[#B794F4]">1st / 80+ Teams</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1429] border border-[#3C2D5A] text-xs font-mono text-[#D8B4FE]">
            <Sparkles className="h-3.5 w-3.5 text-[#9D72E8]" />
            <span>WINNER · SOFTEC ’25 GAME DEV COMPETITION</span>
          </div>
        </div>

        {/* Main Title Heading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Engineering Outbound Systems,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B794F4] via-[#9D72E8] to-[#805AD5]">
              Conversational Voice AI
            </span>
            , & Production Data Pipelines.
          </h1>

          <p className="text-base sm:text-xl text-[#A69EB8] max-w-2xl font-normal leading-relaxed mb-8">
            I architect resilient automation architectures, sub-800ms full-duplex voice agents, and high-precision prompt logic. 
            From European healthcare pipelines to national hackathon-winning platforms, I ship systems that convert dialogue into measurable business value.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#systems"
              className="px-6 py-3 rounded-xl bg-[#9D72E8] hover:bg-[#8B5CF6] text-white font-mono text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(157,114,232,0.4)] hover:shadow-[0_0_35px_rgba(157,114,232,0.6)] transition-all flex items-center gap-2"
            >
              <Cpu className="h-4 w-4" />
              <span>EXPLORE SYSTEMS</span>
            </a>

            <a
              href="#voice"
              className="px-6 py-3 rounded-xl bg-[#141021] hover:bg-[#1C162E] text-[#D8B4FE] border border-[#34274E] hover:border-[#9D72E8] font-mono text-sm font-medium transition-all flex items-center gap-2"
            >
              <Volume2 className="h-4 w-4 text-[#9D72E8]" />
              <span>TEST VOICE CALLS</span>
            </a>

            <a
              href="#console"
              className="px-4 py-3 rounded-xl bg-[#0D0A17] hover:bg-[#141021] text-[#9A91B0] hover:text-white border border-[#241C36] font-mono text-xs transition-all flex items-center gap-2"
            >
              <span className="text-[#9D72E8]">$</span>
              <span>OPEN CONSOLE</span>
            </a>
          </div>
        </div>

        {/* Real-time System Telemetry HUD Bar */}
        <div className="rounded-2xl bg-[#0E0B1A]/80 border border-[#281F3D] p-4 sm:p-5 backdrop-blur-md shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#241C36]">
          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#827896] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Activity className="h-3 w-3 text-[#9D72E8]" />
              <span>NODE TELEMETRY</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>ONLINE · {timeStr || '15:40:00'} PKT</span>
            </div>
            <div className="text-[11px] font-mono text-[#716885]">Lahore, Pakistan</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#827896] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Bot className="h-3 w-3 text-[#9D72E8]" />
              <span>CONVERSATION ENGINE</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white">95% Booking Rate</div>
            <div className="text-[11px] font-mono text-[#716885]">Sub-800ms Latency Target</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#827896] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <ShieldCheck className="h-3 w-3 text-[#9D72E8]" />
              <span>IDEMPOTENT BILLING</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white">5 EU Countries</div>
            <div className="text-[11px] font-mono text-[#716885]">92% Payment Collection</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#827896] uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Award className="h-3 w-3 text-[#9D72E8]" />
              <span>HONORS & TITLES</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white">2x National Winner</div>
            <div className="text-[11px] font-mono text-[#716885]">SOFTEC '25 & '26</div>
          </div>
        </div>
      </div>
    </section>
  );
};
