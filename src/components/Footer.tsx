import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'naumanarif432@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-20 border-t border-[#1C152B] bg-[#060509] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#9D72E8]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#1C152B]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-lg bg-[#140F24] border border-[#2B2044] flex items-center justify-center text-[#9D72E8]">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-mono text-base font-bold text-white tracking-wider">
                NAUMAN.ARIF <span className="text-[#9D72E8] font-normal">[0x]</span>
              </span>
            </div>
            <p className="text-sm text-[#938AAB] max-w-md font-normal">
              Backend AI &amp; Automation Engineer. 2x SOFTEC National Champion. Ready to architect high-impact voice agents, data pipelines, and intelligent products.
            </p>
          </div>

          {/* Quick Connect & Email Copy */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={copyEmail}
              className="px-4 py-2.5 rounded-xl bg-[#120E1E] hover:bg-[#1C162E] text-white border border-[#271E3A] hover:border-[#9D72E8] font-mono text-xs flex items-center gap-2 transition-all shadow-md"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-[#9D72E8]" />}
              <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : email}</span>
            </button>

            <a
              href="mailto:naumanarif432@gmail.com"
              className="px-5 py-2.5 rounded-xl bg-[#9D72E8] hover:bg-[#8B5CF6] text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(157,114,232,0.3)] transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>SEND INQUIRY</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#736A8A]">
          <div>
            © {new Date().getFullYear()} Nauman Arif · All Rights Reserved.
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Nauman0x"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D72E8] flex items-center gap-1 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naumanariff/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D72E8] flex items-center gap-1 transition-colors"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://naumanarif.itch.io/cyber-bloom"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D72E8] flex items-center gap-1 transition-colors"
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
