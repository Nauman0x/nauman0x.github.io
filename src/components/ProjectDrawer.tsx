import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, Play, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

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

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-[#0C0916] border-l-2 border-[#9D72E8] h-full overflow-y-auto p-6 sm:p-8 shadow-2xl z-10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b-2 border-[#211836] mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#9D72E8] font-bold uppercase tracking-wider">
              PROJECT INSPECTOR // {project.id}
            </span>
            {project.award && (
              <span className="px-2 py-0.5 rounded-none bg-[#9D72E8] text-black text-[10px] font-mono font-black border border-black shadow-[2px_2px_0_0_#000000]">
                {project.award}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-none bg-[#171126] text-[#C4BED9] hover:text-black hover:bg-[#9D72E8] transition-all border-2 border-[#2B2342] hover:border-[#9D72E8] shadow-[2px_2px_0_0_#2B2342]"
            aria-label="Close drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{project.title}</h2>
          <p className="text-sm font-mono text-[#9D72E8]">{project.subtitle}</p>
        </div>

        {/* Action Link Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-none bg-[#171224] hover:bg-[#231A38] text-white border-2 border-[#372A52] hover:border-[#9D72E8] font-mono text-xs font-semibold flex items-center gap-2 shadow-[3px_3px_0_0_#2B2342] hover:shadow-[3px_3px_0_0_#9D72E8] transition-all"
            >
              <GithubIcon className="h-4 w-4 text-[#9D72E8]" />
              <span>SOURCE REPO</span>
            </a>
          )}
          {project.links.itch && (
            <a
              href={project.links.itch}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-none bg-[#FA5C5C] hover:bg-[#ff6e6e] text-white font-mono text-xs font-bold flex items-center gap-2 border-2 border-black shadow-[3px_3px_0_0_#FFFFFF] transition-all"
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
              className="px-4 py-2 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-xs font-bold flex items-center gap-2 border-2 border-black shadow-[3px_3px_0_0_#FFFFFF] transition-all"
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
              className="px-4 py-2 rounded-none bg-[#9D72E8] hover:bg-[#B794F4] text-black font-mono text-xs font-bold flex items-center gap-2 border-2 border-black shadow-[3px_3px_0_0_#FFFFFF] transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              <span>LIVE SITE</span>
            </a>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#9D72E8] font-bold mb-2 uppercase tracking-wider">TECHNOLOGIES USED</div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full bg-transparent border border-[#9D72E8]/40 text-[10px] font-mono uppercase text-[#D8B4FE]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#9D72E8] font-bold mb-2 uppercase tracking-wider">OVERVIEW & PROBLEM SOLVED</div>
          <p className="text-sm text-[#C4BED9] leading-relaxed font-normal">{project.description}</p>
        </div>

        {/* Hard Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 p-4 rounded-none bg-[#120E1E] border-2 border-[#2B2144] shadow-[4px_4px_0_0_#2B2342]">
            <div className="text-xs font-mono text-[#9D72E8] mb-3 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="h-4 w-4" />
              <span>VERIFIED OUTCOMES</span>
            </div>
            <ul className="space-y-2">
              {project.metrics.map((m, i) => (
                <li key={i} className="text-xs text-[#D3CFE0] flex items-start gap-2">
                  <span className="text-[#9D72E8] mt-0.5 font-bold">■</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Points */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-mono text-[#9D72E8] mb-3 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <Layers className="h-4 w-4 text-[#9D72E8]" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-3 rounded-none bg-[#0F0B1A] border-2 border-[#241C36] text-[#BDB6D4]">
                  {arch}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-auto pt-6 border-t border-[#211836] flex items-center justify-between text-[11px] font-mono text-[#786F8C]">
          <span>READY FOR PRODUCTION</span>
          <button onClick={onClose} className="hover:text-white underline">
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
