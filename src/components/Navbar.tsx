import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// 01. Experience', href: '#experience' },
    { name: '// 02. Systems', href: '#systems' },
    { name: '// 03. Voice AI', href: '#voice' },
    { name: '// 04. Research', href: '#research' },
    { name: '// 05. Console', href: '#console' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#07060A]/95 border-b-2 border-[#2B2342] py-3 shadow-[0_6px_0_0_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-none bg-[#141021] border-2 border-[#9D72E8] shadow-[2px_2px_0_0_#9D72E8] group-hover:bg-[#9D72E8] group-hover:text-black flex items-center justify-center text-[#9D72E8] transition-all duration-150">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <div className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1.5">
              <span>NAUMAN.ARIF</span>
              <span className="text-xs text-[#9D72E8] font-normal">[0x]</span>
            </div>
            <div className="text-[10px] font-mono text-[#9B92B0] tracking-tight">AI & SYSTEMS ENGINEER</div>
          </div>
        </a>

        {/* Live Status Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#110D1D] border-2 border-[#FBBF24]/60 text-[11px] font-mono text-[#FCD34D] shadow-[2px_2px_0_0_#2B2342]">
          <span className="h-2 w-2 rounded-full bg-[#FBBF24] animate-ping" />
          <span className="h-2 w-2 rounded-full bg-[#FBBF24] -ml-4" />
          <span className="font-bold">STATUS: CONTRACT / FULL-TIME READY</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9A91B0] hover:text-[#9D72E8] hover:border-b-2 hover:border-[#9D72E8] transition-colors duration-100 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Quick Social / Action Shortcuts */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/Nauman0x"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-none text-[#C4BED9] hover:text-black hover:bg-[#9D72E8] border-2 border-[#2B2342] hover:border-[#9D72E8] hover:shadow-[2px_2px_0_0_#9D72E8] transition-all"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/naumanariff/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-none text-[#C4BED9] hover:text-black hover:bg-[#9D72E8] border-2 border-[#2B2342] hover:border-[#9D72E8] hover:shadow-[2px_2px_0_0_#9D72E8] transition-all"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:naumanarif432@gmail.com"
            aria-label="Send Email"
            className="px-4 py-1.5 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-xs font-bold border-2 border-black shadow-[3px_3px_0_0_#FFFFFF] hover:shadow-[4px_4px_0_0_#FFFFFF] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>CONNECT</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-none text-[#9A91B0] hover:text-white bg-[#141021] border-2 border-[#2B2342]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0A17] border-b-2 border-[#2B2342] px-4 py-4 font-mono text-xs space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C2BDD4] hover:text-[#9D72E8] py-2 border-b border-[#211933]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com/Nauman0x"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 rounded-none text-center bg-[#151024] text-white border-2 border-[#2B2342]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/naumanariff/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 rounded-none text-center bg-[#151024] text-white border-2 border-[#2B2342]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
