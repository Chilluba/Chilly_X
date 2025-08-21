
import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import ProjectCard from '../components/ProjectCard';
import type { ProjectCategory } from '../types';
import { ProjectCategory as PC } from '../types';
import { useI18n } from '../context/I18nContext';


const WorkPage: React.FC = () => {
  const { projects } = useData();
  const { t, tCategory } = useI18n();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = ['All', ...Object.values(PC)];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter, projects]);
  
  const FilterButton: React.FC<{ category: ProjectCategory | 'All' }> = ({ category }) => {
    const isActive = activeFilter === category;
    const baseClasses = "px-4 py-2 text-sm font-mono transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg-900";
    const activeClasses = "bg-brand-primary-500 text-white";
    const inactiveClasses = "bg-white/10 text-gray-300 hover:bg-white/20";
    return (
        <button onClick={() => setActiveFilter(category)} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            {tCategory(category)}
        </button>
    );
  };

  return (
    <div>
      <h1 className="font-heading text-5xl text-brand-accent uppercase tracking-wider mb-4 text-center">{t('work.title')}</h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        {t('work.description')}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <FilterButton key={cat} category={cat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
