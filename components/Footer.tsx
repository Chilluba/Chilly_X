
import React from 'react';
import { useData } from '../context/DataContext';

const Footer: React.FC = () => {
  const { socials, profile } = useData();
  return (
    <footer className="bg-brand-bg-800 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {profile.fullName}. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-5">
            {socials.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
