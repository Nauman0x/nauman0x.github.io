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
      <div className="relative w-full max-w-2xl bg-[#0C0916] border-l border-[#2B2144] h-full overflow-y-auto p-6 sm:p-8 shadow-2xl z-10 animate-slide-in-right flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#211836] mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#9D72E8] uppercase tracking-wider">
              PROJECT INSPECTOR // {project.id}
            </span>
            {project.award && (
              <span className="px-2 py-0.5 rounded bg-[#9D72E8]/20 text-[#D8B4FE] text-[10px] font-mono border border-[#9D72E8]/30">
                {project.award}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#171126] text-[#9A91B0] hover:text-white hover:bg-[#251B3D] transition-colors border border-[#2B2144]"
            aria-label="Close drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-sm font-mono text-[#B794F4]">{project.subtitle}</p>
        </div>

        {/* Action Link Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-[#171224] hover:bg-[#231A38] text-white border border-[#372A52] font-mono text-xs font-semibold flex items-center gap-2 transition-all"
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
              className="px-4 py-2 rounded-xl bg-[#FA5C5C] hover:bg-[#ff6e6e] text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(250,92,92,0.4)] transition-all"
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
              className="px-4 py-2 rounded-xl bg-[#9D72E8] hover:bg-[#8B5CF6] text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(157,114,232,0.35)] transition-all"
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
              className="px-4 py-2 rounded-xl bg-[#9D72E8] hover:bg-[#8B5CF6] text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              <span>LIVE SITE</span>
            </a>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#8C82A2] mb-2 uppercase tracking-wider">TECHNOLOGIES USED</div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-[#130E21] border border-[#271D3E] text-[11px] font-mono text-[#C4BED9]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#8C82A2] mb-2 uppercase tracking-wider">OVERVIEW & PROBLEM SOLVED</div>
          <p className="text-sm text-[#C4BED9] leading-relaxed font-normal">{project.description}</p>
        </div>

        {/* Hard Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-[#120E1E] border border-[#2B2144]">
            <div className="text-xs font-mono text-[#9D72E8] mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              <span>VERIFIED OUTCOMES</span>
            </div>
            <ul className="space-y-2">
              {project.metrics.map((m, i) => (
                <li key={i} className="text-xs text-[#D3CFE0] flex items-start gap-2">
                  <span className="text-[#9D72E8] mt-0.5">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Points */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-6">
            <div className="text-xs font-mono text-[#8C82A2] mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-[#9D72E8]" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#0F0B1A] border border-[#241C36] text-[#BDB6D4]">
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
