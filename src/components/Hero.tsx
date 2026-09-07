import React from 'react';
import { Award, Bot, Sparkles, ShieldCheck, Activity, Zap, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';
import avatarPhoto from '../assets/avatar.jpg';

const STAR_CLIP =
  'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Accolade ribbon pills */}
        <Reveal className="flex flex-wrap items-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-[3px] border-black text-xs font-mono text-black shadow-[2px_2px_0_0_#000000]">
            <Award className="h-3.5 w-3.5 text-[#FF5FA2]" />
            <span className="font-bold">WINNER &middot; SOFTEC &rsquo;26 NATIONAL AI HACKATHON</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFC300] text-black font-bold border-2 border-black">1st / 80+ Teams</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-[3px] border-black text-xs font-mono text-black shadow-[2px_2px_0_0_#000000]">
            <Sparkles className="h-3.5 w-3.5 text-[#4D7CFE]" />
            <span className="font-bold">WINNER &middot; SOFTEC &rsquo;25 GAME DEV COMPETITION</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-[3px] border-black text-xs font-mono text-black shadow-[2px_2px_0_0_#000000]">
            <TrendingUp className="h-3.5 w-3.5 text-[#8FD14F]" />
            <span className="font-bold">7,075 AUTOMATION RUNS &middot; 99.7% SUCCESS RATE</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left: Name-forward heading */}
          <Reveal delay={80} className="lg:col-span-8">
            {/* Open-to-work tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 bg-[#FFC300] border-2 border-black text-[11px] font-mono font-bold text-black -rotate-2 shadow-[2px_2px_0_0_#000000]">
              <Zap className="h-3.5 w-3.5 fill-black" />
              <span>OPEN FOR WORK &mdash; WORLDWIDE</span>
            </div>

            <h1 className="leading-[0.95] mb-4 font-heading">
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight"
                style={{ WebkitTextStroke: '2px #111111' }}
              >
                NAUMAN
              </span>
              <span className="inline-block text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight bg-[#FFC300] border-[3px] border-black px-3 mt-2 shadow-[6px_6px_0_0_#000000]">
                ARIF.
              </span>
            </h1>

            <div className="inline-block px-4 py-2 mb-6 bg-black text-[#8FD14F] font-mono text-xs sm:text-sm font-bold tracking-wide border-2 border-black">
              BACKEND AI ENGINEER &mdash; SHIPS TO PRODUCTION, NOT DEMOS
            </div>

            <p className="text-base sm:text-lg text-[#3A342A] max-w-2xl font-normal leading-relaxed mb-8">
              Engineering outbound systems, conversational voice AI, and production data pipelines. I architect resilient automation architectures, sub-800ms full-duplex voice agents, and high-precision prompt logic &mdash; shipping across 5 European countries and converting dialogue into measurable business value.
            </p>

            {/* Hero Stat Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mb-8">
              <div className="p-4 bg-[#FFC300] border-[3px] border-black shadow-[4px_4px_0_0_#000000]">
                <div className="text-2xl sm:text-3xl font-mono font-black text-black">95%</div>
                <div className="text-[11px] font-bold text-black uppercase tracking-wide">Voice Booking Accuracy</div>
              </div>
              <div className="p-4 bg-[#8FD14F] border-[3px] border-black shadow-[4px_4px_0_0_#000000]">
                <div className="text-2xl sm:text-3xl font-mono font-black text-black">5</div>
                <div className="text-[11px] font-bold text-black uppercase tracking-wide">EU Countries Shipped To</div>
              </div>
              <div className="p-4 bg-[#FF5FA2] border-[3px] border-black shadow-[4px_4px_0_0_#000000]">
                <div className="text-2xl sm:text-3xl font-mono font-black text-black">2x</div>
                <div className="text-[11px] font-bold text-black uppercase tracking-wide">National Champion</div>
              </div>
              <div className="p-4 bg-[#4D7CFE] border-[3px] border-black shadow-[4px_4px_0_0_#000000]">
                <div className="text-2xl sm:text-3xl font-mono font-black text-black">300+</div>
                <div className="text-[11px] font-bold text-black uppercase tracking-wide">Prompt Sets Shipped</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#systems"
                className="px-6 py-3.5 bg-[#FFC300] hover:bg-[#FFD84D] text-black font-mono text-sm font-bold tracking-wider border-[3px] border-black shadow-[4px_4px_0_0_#000000] hover:shadow-[6px_6px_0_0_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <ArrowUpRight className="h-4 w-4" />
                <span>SEE THE WORK</span>
              </a>

              <a
                href="mailto:naumanarif432@gmail.com"
                className="px-6 py-3.5 bg-black hover:bg-[#1a1a1a] text-white border-[3px] border-black shadow-[4px_4px_0_0_#8FD14F] hover:shadow-[6px_6px_0_0_#8FD14F] hover:-translate-x-0.5 hover:-translate-y-0.5 font-mono text-sm font-bold transition-all flex items-center gap-2"
              >
                <span>HIRE ME</span>
              </a>
            </div>
          </Reveal>

          {/* Right: Photo card (swap placeholder for a real photo anytime) */}
          <Reveal delay={160} className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-[#E8DCC4] border-[3px] border-black shadow-[8px_8px_0_0_#000000] p-3 pb-5 w-56 sm:w-64">
                <div className="aspect-[4/5] w-full bg-[#4D7CFE] border-[3px] border-black overflow-hidden">
                  <img
                    src={avatarPhoto}
                    alt="Nauman Arif"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 20%' }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wide text-black">
                  <span>FIG. 01</span>
                  <span className="text-[#B8452F]">&mdash; The Engineer</span>
                </div>
              </div>

              {/* Availability tag */}
              <div
                style={{ top: '330px', left: '12px' }}
                className="absolute px-2.5 py-1 bg-white border-2 border-black text-[10px] font-mono font-bold text-black -rotate-3 shadow-[2px_2px_0_0_#000000] z-10"
              >
                REMOTE &middot; WORLDWIDE
              </div>

              {/* Starburst badge */}
              <div
                className="absolute -top-6 -right-6 h-20 w-20 bg-[#FFC300] border-2 border-black flex items-center justify-center rotate-12"
                style={{ clipPath: STAR_CLIP }}
              >
                <span className="font-mono text-[9px] font-black text-black text-center leading-tight -rotate-12">2x<br />NATL<br />WINNER</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Real-time System Telemetry HUD Bar */}
        <Reveal delay={240} className="bg-white border-[3px] border-black shadow-[6px_6px_0_0_#000000] p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x-2 divide-black/10 mt-10">
          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#FF5FA2] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Activity className="h-3.5 w-3.5" />
              <span>NODE TELEMETRY</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-black flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8FD14F] animate-pulse border border-black" />
              <span>ONLINE &amp; SHIPPING</span>
            </div>
            <div className="text-[11px] font-mono text-[#5C5648]">Remote &middot; Worldwide</div>
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
            <div className="text-[11px] font-mono text-[#5C5648]">100% Payment Collection</div>
          </div>

          <div className="px-3 pt-2 md:pt-0">
            <div className="text-[11px] font-mono text-[#FFC300] uppercase tracking-wider flex items-center gap-1.5 mb-1 font-bold">
              <Award className="h-3.5 w-3.5" />
              <span>HONORS &amp; TITLES</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-black">2x National Winner</div>
            <div className="text-[11px] font-mono text-[#5C5648]">SOFTEC '25 &amp; '26</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
