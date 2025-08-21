
import React from 'react';
import { useData } from '../context/DataContext';
import SkillBar from '../components/SkillBar';
import Card from '../components/ui/Card';
import CVDownloadButton from '../components/CVDownloadButton';

const AboutPage: React.FC = () => {
  const { profile, skills } = useData();
  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <Card className="p-0 overflow-hidden">
            <img 
              src={profile.profileImageUrl || "https://picsum.photos/seed/salmin/800/1000"}
              alt={profile.fullName}
              className="w-full h-full object-cover"
            />
          </Card>
        </div>
        <div className="lg:col-span-3">
          <h1 className="font-heading text-5xl text-brand-accent uppercase tracking-wider mb-4">About Me</h1>
          <h2 className="font-mono text-xl text-gray-300 mb-6">{profile.fullName}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{profile.shortBio}</p>
          <div className="space-y-4 text-sm mb-8">
            <p><strong>Education:</strong> Diploma in Business Administration - Mwalimu Nyerere Memorial Academy (2022)</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <div className="mt-6">
              <CVDownloadButton />
            </div>
          </div>
          {/* Single Download CV button */}
          
        </div>
      </section>

      <section>
        <h2 className="font-heading text-4xl text-center text-brand-text uppercase tracking-wider mb-10">Skills Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map(category => (
            <div key={category.category}>
              <h3 className="font-mono text-xl text-brand-accent mb-4 border-b-2 border-brand-accent/30 pb-2">{category.category}</h3>
              <div>
                {category.skills.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
