
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Snarky from '../components/Snarky';
import { useData } from '../context/DataContext';
import { Download, Eye, Briefcase } from 'lucide-react';

const HomePage: React.FC = () => {
  const { profile } = useData();
  return (
    <div className="relative text-center flex flex-col items-center justify-center min-h-[70vh] -mt-16">
      <div className="absolute inset-0 halftone-bg opacity-30"></div>
      <div className="relative z-10 p-4">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-wider text-brand-text uppercase">
          <Snarky
            normal={profile.fullName}
            snark="The Merc with a Mouse"
          />
        </h1>
        <p className="font-mono text-brand-accent text-lg md:text-2xl mt-2 mb-6">
          {profile.displayName}
        </p>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
          <Snarky
            normal={profile.shortBio}
            snark="I make cool stuff. Websites, games, 3D thingies, videos... you name it. Probably for money. Let's talk before I get distracted by a chimichanga."
          />
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link to="/work">
            <Button variant="primary">
              <Eye className="mr-2 h-4 w-4" />
              <Snarky normal="View Work" snark="See My Mayhem" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">
              <Briefcase className="mr-2 h-4 w-4" />
              <Snarky normal="Hire Me" snark="Unleash Me" />
            </Button>
          </Link>
          <a href="/cv.pdf" download="Salmin_Habibu_CV.pdf">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              <Snarky normal="Download CV" snark="Get The Dossier" />
            </Button>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-mono text-gray-400">
            <div className="text-center">
                <p className="text-4xl text-brand-accent">{profile.counters.years}+</p>
                <p className="text-sm uppercase tracking-widest">Years Creating</p>
            </div>
            <div className="text-center">
                <p className="text-4xl text-brand-accent">{profile.counters.projects}</p>
                <p className="text-sm uppercase tracking-widest">Shipped Projects</p>
            </div>
            <div className="text-center">
                <p className="text-4xl text-brand-accent">{profile.counters.tools}</p>
                <p className="text-sm uppercase tracking-widest">Tools Mastered</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
