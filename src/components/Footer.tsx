import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Marquee } from './Marquee';

const TICKER_ITEMS = [
  'SELECTED WORK',
  'TRAINED MODELS',
  'SHIPPED APPS',
  'LIVE DEMOS',
  'REAL USERS',
  'PRODUCTION SYSTEMS',
];

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'naumanarif432@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black relative">
      <Marquee items={TICKER_ITEMS} bg="#FFC300" text="#111111" border="#000000" />

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b-2 border-white/15">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 bg-[#FFC300] border-[3px] border-white flex items-center justify-center text-black">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-mono text-base font-bold text-white tracking-wider">
                NAUMAN.ARIF <span className="text-[#8FD14F] font-normal">[0x]</span>
              </span>
            </div>
            <p className="text-sm text-[#C4BFAE] max-w-md font-normal">
              Backend AI &amp; Automation Engineer. 2x SOFTEC National Champion. Ready to architect high-impact voice agents, data pipelines, and intelligent products.
            </p>
          </div>

          {/* Quick Connect & Email Copy */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={copyEmail}
              className="px-4 py-2.5 bg-[#111111] hover:bg-[#1C1C1C] text-white border-[3px] border-white/30 hover:border-white font-mono text-xs flex items-center gap-2 transition-all"
            >
              {copied ? <Check className="h-4 w-4 text-[#8FD14F]" /> : <Copy className="h-4 w-4 text-[#FFC300]" />}
              <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : email}</span>
            </button>

            <a
              href="mailto:naumanarif432@gmail.com"
              className="px-5 py-2.5 bg-[#FFC300] hover:bg-[#FFD84D] text-black font-mono text-xs font-bold flex items-center gap-2 border-[3px] border-white shadow-[3px_3px_0_0_#FFFFFF] hover:shadow-[4px_4px_0_0_#FFFFFF] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>SEND INQUIRY</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8A8474]">
          <div>
            © {new Date().getFullYear()} Nauman Arif · All Rights Reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Nauman0x"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFC300] flex items-center gap-1 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naumanariff/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFC300] flex items-center gap-1 transition-colors"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://naumanarif.itch.io/cyber-bloom"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FFC300] flex items-center gap-1 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Itch.io</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
