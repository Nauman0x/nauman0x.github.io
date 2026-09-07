import React from 'react';
import { Terminal } from 'lucide-react';
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
  return (
    <footer className="bg-black relative">
      <Marquee items={TICKER_ITEMS} bg="#FFC300" text="#111111" border="#000000" />

      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8A8474]">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 bg-[#FFC300] border-2 border-white flex items-center justify-center text-black">
            <Terminal className="h-3.5 w-3.5" />
          </div>
          <span>&copy; {new Date().getFullYear()} Nauman Arif &middot; All Rights Reserved.</span>
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
        </div>
      </div>
    </footer>
  );
};
