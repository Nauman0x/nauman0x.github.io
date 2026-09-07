import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDrawer } from './ProjectDrawer';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'voice' | 'games-vision' | 'automation'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Systems' },
    { id: 'flagship', label: 'Flagships' },
    { id: 'voice', label: 'Voice & Agents' },
    { id: 'games-vision', label: 'Game Dev & Vision' },
    { id: 'automation', label: 'Pipelines & Infrastructure' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="systems" className="py-24 relative bg-[#EDE9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-black uppercase tracking-widest mb-2 font-bold">
              <Layers className="h-4 w-4" />
              <span>PRODUCTION CATALOG // 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight font-heading">
              Selected Systems &amp; Deployments
            </h2>
          </div>

          {/* Filter Group */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border-[3px] border-black font-mono text-xs shadow-[3px_3px_0_0_#000000]">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 transition-all duration-100 ${
                  activeFilter === f.id
                    ? 'bg-[#FFC300] text-black font-bold border-2 border-black'
                    : 'text-[#5C5648] font-bold hover:text-black hover:bg-[#EDE9F8]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Inspector Slide-Over */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
