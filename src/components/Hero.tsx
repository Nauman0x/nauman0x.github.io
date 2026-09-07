import React, { useState, useEffect } from 'react';
import { Award, Bot, Cpu, Volume2, Sparkles, ShieldCheck, Activity, UserRound } from 'lucide-react';

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Accolade ribbon pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-[3px] border-black text-xs font-mono text-black shadow-[2px_2px_0_0_#000000]">
            <Award className="h-3.5 w-3.5 text-[#FF5FA2]" />
            <span className="font-bold">WINNER &middot; SOFTEC &rsquo;26 NATIONAL AI HACKATHON</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFC300] text-black font-bold border-2 border-black">1st / 80+ Teams</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-[3px] border-black text-xs font-mono text-black shadow-[2px_2px_0_0_#000000]">
            <Sparkles className="h-3.5 w-3.5 text-[#4D7CFE]" />
            <span className="font-bold">WINNER &middot; SOFTEC &rsquo;25 GAME DEV COMPETITION</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Main Title Heading */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.06] mb-6 font-heading">
              Engineering Outbound Systems,{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-4 sm:h-5 bg-[#FFC300] -z-10" />
                Conversational Voice AI
              </span>
              , &amp; Production Data Pipelines.
            </h1>

            <p className="text-base sm:text-xl text-[#3A342A] max-w-2xl font-normal leading-relaxed mb-8">
              I architect resilient automation architectures, sub-800ms full-duplex voice agents, and high-precision prompt logic.
              From European healthcare pipelines to national hackathon-winning platforms, I ship systems that convert dialogue into measurable business value.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#systems"
                className="px-6 py-3.5 bg-[#FFC300] hover:bg-[#FFD84D] text-black font-mono text-sm font-bold tracking-wider border-[3px] border-black shadow-[4px_4px_0_0_#000000] hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Cpu className="h-4 w-4" />
                <span>EXPLORE SYSTEMS</span>
              </a>

              <a
                href="#voice"
                className="px-6 py-3.5 bg-white hover:bg-[#F5F0E4] text-black border-[3px] border-black shadow-[4px_4px_0_0_#4D7CFE] hover:shadow-[6px_6px_0_0_#4D7CFE] hover:-translate-x-0.5 hover:-translate-y-0.5 font-mono text-sm font-bold transition-all flex items-center gap-2"
              >
                <Volume2 className="h-4 w-4 text-[#4D7CFE]" />
                <span>TEST VOICE CALLS</span>
              </a>

              <a
                href="#console"
                className="px-4 py-3.5 bg-black hover:bg-[#241B3B] text-[#8FD14F] border-[3px] border-black shadow-[3px_3px_0_0_#8FD14F] hover:shadow-[4px_4px_0_0_#8FD14F] font-mono text-xs font-bold transition-all flex items-center gap-2"
              >
                <span className="font-bold">$</span>
                <span>OPEN CONSOLE</span>
              </a>
            </div>
          </div>

          {/* Right: Polaroid photo card (swap placeholder for a real photo anytime) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-3 pb-5 w-56 sm:w-64">
                <div className="aspect-[4/5] w-full bg-[#EDE6D6] border-[3px] border-black flex items-center justify-center overflow-hidden">
                  <UserRound className="h-20 w-20 text-black/30" strokeWidth={1.25} />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wide">
                  <span>Nauman, PK</span>
                  <span className="text-[#FF5FA2]">&mdash; The Engineer</span>
                </div>
              </div>
              {/* Sticker badge */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-[#8FD14F] border-[3px] border-black shadow-[3px_3px_0_0_#000000] flex items-center justify-center rotate-12">
                <span className="font-mono text-[9px] font-black text-black text-center leading-tight">2x<br />NATL<br />WINNER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time System Telemetry HUD Bar */}
        <div className="bg-white border-[3px] border-black shadow-[6px_6px_0_0_#000000] p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x-2 divide-black/10 mt-4">
          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#FF5FA2] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Activity className="h-3.5 w-3.5" />
              <span>NODE TELEMETRY</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-black flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8FD14F] animate-pulse border border-black" />
              <span>ONLINE &middot; {timeStr || '16:00:00'} PKT</span>
            </div>
            <div className="text-[11px] font-mono text-[#5C5648]">Lahore, Pakistan</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#4D7CFE] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Bot className="h-3.5 w-3.5" />
              <span>CONVERSATION ENGINE</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-black">95% Booking Rate</div>
            <div className="text-[11px] font-mono text-[#5C5648]">Sub-800ms Latency Target</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#8FD14F] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>IDEMPOTENT BILLING</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-black">5 EU Countries</div>
            <div className="text-[11px] font-mono text-[#5C5648]">92% Payment Collection</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#FFC300] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Award className="h-3.5 w-3.5" />
              <span>HONORS &amp; TITLES</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-black">2x National Winner</div>
            <div className="text-[11px] font-mono text-[#5C5648]">SOFTEC '25 &amp; '26</div>
          </div>
        </div>
      </div>
    </section>
  );
};
