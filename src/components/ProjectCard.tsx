import React, { useState, useRef } from 'react';
import type { Project } from '../data/portfolioData';
import { ExternalLink, Play, ArrowUpRight, Award, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotX(rotateX);
    setRotY(rotateY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) ${isHovered ? 'scale3d(1.01, 1.01, 1.01)' : 'scale3d(1, 1, 1)'}`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.35s ease-out',
      }}
      className="cursor-pointer group relative flex flex-col justify-between rounded-none bg-[#0F0C1B] border-2 border-[#2B2342] hover:border-[#9D72E8] hover:shadow-[6px_6px_0_0_#9D72E8] p-6 transition-all duration-200 overflow-hidden"
    >
      <div>
        {/* Card Header Info */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] text-[#9D72E8] font-bold tracking-widest uppercase">
              SYS // {project.category}
            </span>
            {project.award && (
              <span className="px-2 py-0.5 rounded-none bg-[#9D72E8] text-black text-[10px] font-mono font-black flex items-center gap-1 border border-black shadow-[2px_2px_0_0_#000000]">
                <Award className="h-3 w-3 text-black" />
                <span>CHAMPION</span>
              </span>
            )}
          </div>
          <div className="h-7 w-7 rounded-none bg-[#181329] border-2 border-[#2B2342] group-hover:border-[#9D72E8] group-hover:bg-[#9D72E8] group-hover:text-black flex items-center justify-center text-[#9A91B0] transition-all">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#B794F4] transition-colors mb-1.5 flex items-center gap-2">
          <span>{project.title}</span>
        </h3>
        <p className="text-xs font-mono text-[#9D72E8] mb-4 line-clamp-1">{project.subtitle}</p>

        {/* Short Description */}
        <p className="text-xs text-[#BCB6D1] leading-relaxed line-clamp-3 mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech tags + Links */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full bg-transparent border border-[#9D72E8]/40 text-[10px] font-mono uppercase text-[#D8B4FE]"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase text-[#8C81A6]">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t-2 border-[#211836] text-xs font-mono text-[#8C81A6]">
          <span className="group-hover:text-[#9D72E8] flex items-center gap-1 font-bold transition-colors">
            <span>INSPECT SPECS</span>
            <ChevronRight className="h-3.5 w-3.5 text-[#9D72E8]" />
          </span>
          <div className="flex items-center gap-2">
            {project.links.github && <GithubIcon className="h-3.5 w-3.5 hover:text-white transition-colors" />}
            {project.links.itch && <Play className="h-3.5 w-3.5 hover:text-[#FA5C5C] transition-colors" />}
            {project.links.video && <ExternalLink className="h-3.5 w-3.5 hover:text-white transition-colors" />}
          </div>
        </div>
      </div>
    </div>
  );
};
