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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Accolade ribbon pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140F22] border-2 border-[#9D72E8]/60 text-xs font-mono text-[#D8B4FE] shadow-[2px_2px_0_0_#2B2342]">
            <Award className="h-3.5 w-3.5 text-[#9D72E8]" />
            <span>WINNER · SOFTEC ’26 NATIONAL AI HACKATHON</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#9D72E8] text-black font-bold">1st / 80+ Teams</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#140F22] border-2 border-[#9D72E8]/60 text-xs font-mono text-[#D8B4FE] shadow-[2px_2px_0_0_#2B2342]">
            <Sparkles className="h-3.5 w-3.5 text-[#9D72E8]" />
            <span>WINNER · SOFTEC ’25 GAME DEV COMPETITION</span>
          </div>
        </div>

        {/* Main Title Heading */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
            Engineering Outbound Systems,{' '}
            <span className="text-[#9D72E8] border-b-4 border-[#9D72E8]">
              Conversational Voice AI
            </span>
            , & Production Data Pipelines.
          </h1>

          <p className="text-base sm:text-xl text-[#B3A9C7] max-w-2xl font-normal leading-relaxed mb-8">
            I architect resilient automation architectures, sub-800ms full-duplex voice agents, and high-precision prompt logic. 
            From European healthcare pipelines to national hackathon-winning platforms, I ship systems that convert dialogue into measurable business value.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#systems"
              className="px-6 py-3.5 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-sm font-bold tracking-wider border-2 border-black shadow-[4px_4px_0_0_#FFFFFF] hover:shadow-[6px_6px_0_0_#FFFFFF] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Cpu className="h-4 w-4" />
              <span>EXPLORE SYSTEMS</span>
            </a>

            <a
              href="#voice"
              className="px-6 py-3.5 rounded-none bg-[#141021] hover:bg-[#1C162E] text-white border-2 border-[#9D72E8] shadow-[4px_4px_0_0_#9D72E8] hover:shadow-[6px_6px_0_0_#9D72E8] hover:-translate-x-0.5 hover:-translate-y-0.5 font-mono text-sm font-bold transition-all flex items-center gap-2"
            >
              <Volume2 className="h-4 w-4 text-[#9D72E8]" />
              <span>TEST VOICE CALLS</span>
            </a>

            <a
              href="#console"
              className="px-4 py-3.5 rounded-none bg-[#0D0A17] hover:bg-[#161026] text-[#C4BED9] hover:text-white border-2 border-[#2B2342] hover:border-[#9D72E8] shadow-[3px_3px_0_0_#2B2342] hover:shadow-[3px_3px_0_0_#9D72E8] font-mono text-xs transition-all flex items-center gap-2"
            >
              <span className="text-[#9D72E8] font-bold">$</span>
              <span>OPEN CONSOLE</span>
            </a>
          </div>
        </div>

        {/* Real-time System Telemetry HUD Bar */}
        <div className="rounded-none bg-[#0E0B1A] border-2 border-[#2B2342] shadow-[6px_6px_0_0_#2B2342] p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#2B2342]">
          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#9D72E8] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Activity className="h-3.5 w-3.5" />
              <span>NODE TELEMETRY</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24] animate-pulse" />
              <span className="text-[#FCD34D]">ONLINE · {timeStr || '16:00:00'} PKT</span>
            </div>
            <div className="text-[11px] font-mono text-[#8C82A2]">Lahore, Pakistan</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#9D72E8] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Bot className="h-3.5 w-3.5" />
              <span>CONVERSATION ENGINE</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white">95% Booking Rate</div>
            <div className="text-[11px] font-mono text-[#8C82A2]">Sub-800ms Latency Target</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#9D72E8] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>IDEMPOTENT BILLING</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white">5 EU Countries</div>
            <div className="text-[11px] font-mono text-[#8C82A2]">92% Payment Collection</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#9D72E8] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Award className="h-3.5 w-3.5" />
              <span>HONORS & TITLES</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-white">2x National Winner</div>
            <div className="text-[11px] font-mono text-[#8C82A2]">SOFTEC '25 & '26</div>
          </div>
        </div>
      </div>
    </section>
  );
};
