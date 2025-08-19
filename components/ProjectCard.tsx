
import React from 'react';
import type { Project } from '../types';
import Card from './ui/Card';
import { Link as LinkIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:-translate-y-2 transform transition-transform duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-0 right-0 bg-brand-accent text-brand-bg-900 font-mono text-xs px-2 py-1">{project.year}</div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-1">{project.category}</span>
        <h3 className="text-xl font-heading tracking-wide text-brand-text mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 flex-grow mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="bg-white/10 text-brand-text text-xs font-mono px-2 py-1 rounded-sm">{tag}</span>
            ))}
        </div>

        {project.links && project.links.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-brand-accent hover:text-white transition-colors duration-200 bg-brand-accent/10 hover:bg-brand-accent/20 px-3 py-1 rounded-full"
                    >
                        <LinkIcon size={14} className="mr-2" />
                        {link.name}
                    </a>
                ))}
            </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
