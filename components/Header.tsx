import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSnark } from '../context/SnarkContext';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Shield } from 'lucide-react';
import Toggle from './ui/Toggle';
import { useI18n } from '../context/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/about', labelKey: 'nav.about' },
  { path: '/work', labelKey: 'nav.work' },
  { path: '/services', labelKey: 'nav.services' },
  { path: '/contact', labelKey: 'nav.contact' },
];

const Header: React.FC = () => {
  const { isSnarky, toggleSnarkMode } = useSnark();
  const { socials } = useData();
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    `flex items-center relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
      isActive ? 'text-brand-accent' : 'text-brand-text hover:text-brand-accent'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-brand-bg-800/80 backdrop-blur-sm border-b border-brand-primary-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-heading text-brand-text tracking-widest">
            Chilly<span className="text-brand-accent">_X</span>
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {t(link.labelKey)}
              </NavLink>
            ))}
            {isAuthenticated && (
              <NavLink to="/admin" className={linkClass}>
                <Shield className="mr-1 h-4 w-4" /> {t('nav.admin')}
              </NavLink>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
                <span className="text-xs font-mono">Snark:</span>
                <Toggle checked={isSnarky} onChange={toggleSnarkMode} />
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            {socials.slice(0, 3).map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors">
                <link.icon className="w-5 h-5" />
              </a>
            ))}
            <div className="w-px h-6 bg-white/20"></div>
            <LanguageSwitcher size="sm" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text hover:text-brand-accent">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-bg-800 border-t border-brand-primary-700/20">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                {t(link.labelKey)}
              </NavLink>
            ))}
             {isAuthenticated && (
              <NavLink to="/admin" className={linkClass} onClick={() => setIsMenuOpen(false)}>
                <Shield className="mr-1 h-4 w-4" /> {t('nav.admin')}
              </NavLink>
            )}
             <div className="flex items-center space-x-2 pt-4">
                <span className="text-xs font-mono">Snark Mode:</span>
                <Toggle checked={isSnarky} onChange={toggleSnarkMode} />
            </div>
            <LanguageSwitcher size="sm" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;