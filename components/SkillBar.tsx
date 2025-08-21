
import React from 'react';
import type { Skill } from '../types';
import { useI18n } from '../context/I18nContext';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const { lang } = useI18n();
  
  return (
    <div className="w-full mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-brand-text">
          {lang === 'sw' && skill.nameSw ? skill.nameSw : skill.name}
        </span>
        <span className="text-xs font-mono text-gray-400">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-white/10 h-2" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
        <div 
          className="bg-brand-accent h-2 transition-all duration-1000 ease-out" 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
