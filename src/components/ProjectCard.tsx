import React, { useState, useRef } from 'react';
import type { Project } from '../data/portfolioData';
import { ExternalLink, Play, ArrowUpRight, Award, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

const CATEGORY_ACCENTS: Record<Project['category'], string> = {
  flagship: '#FFC300',
  voice: '#4D7CFE',
  'games-vision': '#8FD14F',
  automation: '#FF5FA2',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const accent = CATEGORY_ACCENTS[project.category];

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
        boxShadow: isHovered ? `6px 6px 0px 0px ${accent}` : '4px 4px 0px 0px #000000',
      }}
      className="cursor-pointer group relative flex flex-col justify-between bg-white border-[3px] border-black p-6 transition-all duration-200 overflow-hidden"
    >
      <div>
        {/* Card Header Info */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 border-2 border-black"
              style={{ backgroundColor: accent }}
            >
              SYS // {project.category}
            </span>
            {project.award && (
              <span className="px-2 py-0.5 bg-black text-[#FFC300] text-[10px] font-mono font-black flex items-center gap-1 border-2 border-black">
                <Award className="h-3 w-3" />
                <span>CHAMPION</span>
              </span>
            )}
          </div>
          <div className="h-7 w-7 bg-white border-2 border-black group-hover:bg-black group-hover:text-[#FFC300] flex items-center justify-center text-black transition-all">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-black text-black mb-1.5 flex items-center gap-2">
          <span>{project.title}</span>
        </h3>
        <p className="text-xs font-mono font-bold mb-4 line-clamp-1" style={{ color: accent }}>{project.subtitle}</p>

        {/* Short Description */}
        <p className="text-xs text-[#3A342A] leading-relaxed line-clamp-3 mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech tags + Links */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full border-2 border-black text-[10px] font-mono font-bold uppercase text-black"
            >
              {t}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase text-[#5C5648]">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t-2 border-black/15 text-xs font-mono text-black">
          <span className="flex items-center gap-1 font-bold transition-colors">
            <span>INSPECT SPECS</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </span>
          <div className="flex items-center gap-2 text-[#5C5648]">
            {project.links.github && <GithubIcon className="h-3.5 w-3.5 hover:text-black transition-colors" />}
            {project.links.itch && <Play className="h-3.5 w-3.5 hover:text-[#FF5A36] transition-colors" />}
            {project.links.video && <ExternalLink className="h-3.5 w-3.5 hover:text-black transition-colors" />}
          </div>
        </div>
      </div>
    </div>
  );
};
