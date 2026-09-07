import React from 'react';

interface CompanyLogoProps {
  company: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ company }) => {
  if (company === 'Global Health') {
    return (
      <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 border-2 border-black bg-[#0A1F12] flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 100" className="h-9 w-9 sm:h-10 sm:w-10">
          <circle cx="50" cy="50" r="40" fill="#8FD14F" />
          <path d="M10,50 H90 M50,10 V90" stroke="#5CA82E" strokeWidth="3" />
          <path d="M50,10 C24,30 24,70 50,90 C76,70 76,30 50,10 Z" fill="none" stroke="#5CA82E" strokeWidth="3" />
          <path
            d="M8,50 H30 L38,28 L50,72 L60,38 L68,50 H92"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (company === 'Hatzs Dimension') {
    return (
      <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 border-2 border-black bg-black flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-7 w-7 sm:h-8 sm:w-8">
          <rect x="12" y="12" width="28" height="28" rx="7" fill="#4BDE6F" />
          <rect x="12" y="60" width="28" height="28" rx="7" fill="#4BDE6F" />
          <rect x="60" y="36" width="28" height="28" rx="7" fill="#4BDE6F" />
        </svg>
      </div>
    );
  }

  if (company === 'CAAISC') {
    return (
      <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 border-2 border-black bg-white flex items-center justify-center">
        <span
          className="font-black text-xl sm:text-2xl tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #2563EB, #38BDF8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          C
        </span>
      </div>
    );
  }

  return null;
};
