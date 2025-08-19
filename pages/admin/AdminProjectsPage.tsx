import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import Button from '../../components/ui/Button';
import type { Project, ProjectLink } from '../../types';
import { ProjectCategory } from '../../types';
import { Plus, Edit, Trash2 } from 'lucide-react';
import ImageUpload from '../../components/ui/ImageUpload';

const emptyProject: Omit<Project, 'id'> = {
  title: '',
  year: new Date().getFullYear(),
  category: ProjectCategory.WEB,
  summary: '',
  imageUrl: '',
  tags: [],
  roles: [],
  links: [],
};

const AdminProjectsPage: React.FC = () => {
  const { projects, addProject, editProject, deleteProject } = useData();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleAddNew = () => {
    setEditingProject({ ...emptyProject, id: `proj-${Date.now()}` });
    setIsFormVisible(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsFormVisible(true);
  };
  
  const handleDelete = (projectId: string) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
        deleteProject(projectId);
    }
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
    setEditingProject(null);
  };

  const handleSave = (project: Project) => {
    if (projects.some(p => p.id === project.id)) {
      editProject(project);
    } else {
      addProject(project);
    }
    handleFormClose();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-heading text-4xl text-brand-accent uppercase tracking-wider">Manage Projects</h1>
        {!isFormVisible && (
          <Button variant="primary" onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" /> Add New Project
          </Button>
        )}
      </div>

      {isFormVisible && editingProject ? (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={handleFormClose}
          isNew={!projects.some(p => p.id === editingProject.id)}
        />
      ) : (
        <div className="bg-brand-bg-900 p-4">
          <div className="hidden md:grid grid-cols-5 gap-4 font-mono text-gray-400 p-4 border-b border-white/10">
            <span className="col-span-2">Title</span>
            <span>Category</span>
            <span>Year</span>
            <span className="text-right">Actions</span>
          </div>
          {projects.map(project => (
            <div key={project.id} className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center p-4 border-b border-white/10 last:border-b-0 hover:bg-white/5">
              <div className="flex items-center gap-4 col-span-2 md:col-span-2">
                <img src={project.imageUrl || 'https://picsum.photos/seed/placeholder/80/50'} alt={project.title} className="w-20 aspect-video object-cover rounded-sm hidden sm:block"/>
                <span className="text-white truncate">{project.title}</span>
              </div>
              <span className="hidden md:block">{project.category}</span>
              <span className="hidden md:block">{project.year}</span>
              <div className="flex gap-2 justify-end col-span-1">
                <button onClick={() => handleEdit(project)} className="text-blue-400 hover:text-blue-300 p-2" aria-label={`Edit ${project.title}`}><Edit size={18} /></button>
                <button onClick={() => handleDelete(project.id)} className="text-brand-accent hover:text-red-400 p-2" aria-label={`Delete ${project.title}`}><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Sub-component for the form
const ProjectForm: React.FC<{ project: Project; onSave: (project: Project) => void; onCancel: () => void; isNew: boolean; }> = ({ project, onSave, onCancel, isNew }) => {
  const [formData, setFormData] = useState({
      ...project,
      links: project.links || [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'year' ? parseInt(value, 10) : value }));
  };
  
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({...prev, [name]: value.split(',').map(s => s.trim())}));
  };

  const handleImageUpload = (base64: string) => {
    setFormData(prev => ({...prev, imageUrl: base64}));
  };
  
  const handleImageRemove = () => {
      setFormData(prev => ({...prev, imageUrl: ''}));
  };

  const handleLinkChange = (index: number, field: keyof ProjectLink, value: string) => {
      const newLinks = [...formData.links];
      newLinks[index] = { ...newLinks[index], [field]: value };
      setFormData(prev => ({ ...prev, links: newLinks }));
  };

  const handleAddLink = () => {
      setFormData(prev => ({ ...prev, links: [...(prev.links || []), { name: '', url: '' }] }));
  };

  const handleRemoveLink = (index: number) => {
      setFormData(prev => ({ ...prev, links: (prev.links || []).filter((_, i) => i !== index) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-brand-bg-900 p-8 mb-8">
      <h2 className="font-heading text-2xl mb-6">{isNew ? 'Add New Project' : 'Edit Project'}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Title" name="title" value={formData.title} onChange={handleChange} required/>
            <InputField label="Year" name="year" type="number" value={formData.year} onChange={handleChange} required/>
        </div>
        
        <SelectField label="Category" name="category" value={formData.category} onChange={handleChange} options={Object.values(ProjectCategory)} />
        
        <div>
            <label className="block text-sm font-mono text-gray-400 mb-1" htmlFor="summary">Summary</label>
            <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} rows={4} className="w-full bg-white/5 border border-white/20 p-2 text-white outline-none focus:ring-2 focus:ring-brand-accent" required/>
        </div>

        <ImageUpload
            initialImageUrl={formData.imageUrl}
            onImageUpload={handleImageUpload}
            onImageRemove={handleImageRemove}
        />

        <div>
            <label className="block text-sm font-mono text-gray-400 mb-2">Project Links</label>
            <div className="space-y-3">
                {formData.links.map((link, index) => (
                    <div key={index} className="flex items-end gap-2 p-3 bg-white/5 rounded-md">
                        <div className="flex-grow">
                            <label htmlFor={`link-name-${index}`} className="block text-xs font-mono text-gray-400 mb-1">Link Name</label>
                            <input
                                id={`link-name-${index}`}
                                type="text"
                                placeholder="e.g. Live Demo"
                                value={link.name}
                                onChange={(e) => handleLinkChange(index, 'name', e.target.value)}
                                className="w-full bg-white/5 border border-white/20 p-2 text-white outline-none focus:ring-2 focus:ring-brand-accent"
                            />
                        </div>
                        <div className="flex-grow">
                            <label htmlFor={`link-url-${index}`} className="block text-xs font-mono text-gray-400 mb-1">URL</label>
                            <input
                                id={`link-url-${index}`}
                                type="url"
                                placeholder="https://..."
                                value={link.url}
                                onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                                className="w-full bg-white/5 border border-white/20 p-2 text-white outline-none focus:ring-2 focus:ring-brand-accent"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => handleRemoveLink(index)}
                            className="text-brand-accent hover:text-red-400 p-2 shrink-0"
                            aria-label="Remove Link"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
                <Button type="button" variant="outline" onClick={handleAddLink} className="w-full !mt-4">
                    <Plus className="mr-2 h-4 w-4" /> Add Link
                </Button>
            </div>
        </div>

        <InputField label="Tags (comma-separated)" name="tags" value={formData.tags.join(', ')} onChange={handleArrayChange} />
        <InputField label="Roles (comma-separated)" name="roles" value={formData.roles.join(', ')} onChange={handleArrayChange} />

        <div className="flex justify-end gap-4 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit" variant="primary">Save Project</Button>
        </div>
      </form>
    </div>
  );
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {label: string}> = ({ label, name, ...props}) => (
    <div>
        <label className="block text-sm font-mono text-gray-400 mb-1" htmlFor={name}>{label}</label>
        <input name={name} id={name} {...props} className="w-full bg-white/5 border border-white/20 p-2 text-white outline-none focus:ring-2 focus:ring-brand-accent" />
    </div>
)

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {label: string, options: string[]}> = ({ label, name, options, ...props}) => (
    <div>
        <label className="block text-sm font-mono text-gray-400 mb-1" htmlFor={name}>{label}</label>
        <select name={name} id={name} {...props} className="w-full bg-brand-bg-800 border border-white/20 p-2 text-white outline-none focus:ring-2 focus:ring-brand-accent">
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
)

export default AdminProjectsPage;