import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, Play, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

const CATEGORY_ACCENTS: Record<Project['category'], string> = {
  flagship: '#FFC300',
  voice: '#4D7CFE',
  'games-vision': '#8FD14F',
  automation: '#FF5FA2',
};

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const accent = CATEGORY_ACCENTS[project.category];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-[#EDE9F8] border-l-[3px] border-black h-full overflow-y-auto p-6 sm:p-8 shadow-2xl z-10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b-[3px] border-black mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-black font-bold uppercase tracking-wider px-2 py-0.5 border-2 border-black" style={{ backgroundColor: accent }}>
              PROJECT INSPECTOR // {project.id}
            </span>
            {project.award && (
              <span className="px-2 py-0.5 bg-black text-[#FFC300] text-[10px] font-mono font-black border-2 border-black">
                {project.award}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white text-black hover:bg-black hover:text-[#FFC300] transition-all border-2 border-black shadow-[2px_2px_0_0_#000000]"
            aria-label="Close drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-2">{project.title}</h2>
          <p className="text-sm font-mono font-bold" style={{ color: accent }}>{project.subtitle}</p>
        </div>

        {/* Action Link Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white hover:bg-[#E3DCF3] text-black border-[3px] border-black font-mono text-xs font-bold flex items-center gap-2 shadow-[3px_3px_0_0_#000000] transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              <span>SOURCE REPO</span>
            </a>
          )}
          {project.links.itch && (
            <a
              href={project.links.itch}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#FF5A36] hover:bg-[#ff6e50] text-white font-mono text-xs font-bold flex items-center gap-2 border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-all"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>PLAY ON ITCH.IO</span>
            </a>
          )}
          {project.links.video && (
            <a
              href={project.links.video}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#FFC300] hover:bg-[#FFD84D] text-black font-mono text-xs font-bold flex items-center gap-2 border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              <span>WATCH DEMO VIDEO</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#FFC300] hover:bg-[#FFD84D] text-black font-mono text-xs font-bold flex items-center gap-2 border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              <span>LIVE SITE</span>
            </a>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono text-black font-bold mb-2 uppercase tracking-wider">TECHNOLOGIES USED</div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full border-2 border-black text-[10px] font-mono font-bold uppercase text-black bg-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <div className="text-xs font-mono text-black font-bold mb-2 uppercase tracking-wider">OVERVIEW &amp; PROBLEM SOLVED</div>
          <p className="text-sm text-[#3A342A] leading-relaxed font-normal">{project.description}</p>
        </div>

        {/* Hard Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 p-4 bg-white border-[3px] border-black shadow-[4px_4px_0_0_#000000]">
            <div className="text-xs font-mono text-black mb-3 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="h-4 w-4" />
              <span>VERIFIED OUTCOMES</span>
            </div>
            <ul className="space-y-2">
              {project.metrics.map((m, i) => (
                <li key={i} className="text-xs text-black flex items-start gap-2">
                  <span className="mt-0.5 font-bold" style={{ color: accent }}>&#9632;</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Points */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-mono text-black mb-3 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <Layers className="h-4 w-4" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-3 bg-white border-2 border-black text-[#171310]">
                  {arch}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-auto pt-6 border-t-2 border-black/15 flex items-center justify-between text-[11px] font-mono text-[#5C5648]">
          <span>READY FOR PRODUCTION</span>
          <button onClick={onClose} className="hover:text-black underline font-bold">
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
