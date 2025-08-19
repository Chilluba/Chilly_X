
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { PROFILE_DATA, SOCIAL_LINKS, SKILLS_DATA, SERVICES_DATA, PROJECTS_DATA } from '../constants/data';
import type { Project, Service, SkillCategory, SocialLink } from '../types';

// Define a type for the profile data structure
type ProfileData = typeof PROFILE_DATA;

interface DataContextType {
  profile: ProfileData;
  socials: SocialLink[];
  skills: SkillCategory[];
  services: Service[];
  projects: Project[];
  updateProfile: (newProfile: ProfileData) => void;
  addProject: (project: Project) => void;
  editProject: (project: Project) => void;
  deleteProject: (projectId: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'portfolioData';

// Helper to get initial state from localStorage or defaults
const getInitialState = () => {
  try {
    const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (item) {
      const parsed = JSON.parse(item);
      // Basic check to ensure essential data exists
      if(parsed.profile && parsed.projects) {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Error reading from localStorage", error);
  }
  return {
    profile: PROFILE_DATA,
    socials: SOCIAL_LINKS,
    skills: SKILLS_DATA,
    services: SERVICES_DATA,
    projects: PROJECTS_DATA,
  };
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState(getInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [data]);

  const updateProfile = (newProfile: ProfileData) => {
    setData(prev => ({ ...prev, profile: newProfile }));
  };

  const addProject = (project: Project) => {
    setData(prev => ({ ...prev, projects: [...prev.projects, project] }));
  };

  const editProject = (updatedProject: Project) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === updatedProject.id ? updatedProject : p),
    }));
  };
  
  const deleteProject = (projectId: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== projectId),
    }));
  };

  const value = {
    ...data,
    updateProfile,
    addProject,
    editProject,
    deleteProject
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
