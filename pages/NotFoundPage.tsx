
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Snarky from '../components/Snarky';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[70vh] -mt-16">
      <h1 className="font-mono text-8xl md:text-9xl font-bold text-brand-primary-500">404</h1>
      <h2 className="font-heading text-4xl md:text-5xl text-brand-text uppercase tracking-wider mt-4">
        <Snarky normal="Page Not Found" snark="You Lost, Pal?" />
      </h2>
      <p className="max-w-xl mx-auto text-gray-400 mt-4 mb-10">
        <Snarky
          normal="Looks like you've followed a broken link or entered a URL that doesn't exist."
          snark="Did you trip? Fall on the keyboard? Whatever happened, this page ain't here. Try going home before you break something else."
        />
      </p>
      <Link to="/">
        <Button variant="primary">
          <Home className="mr-2 h-4 w-4" />
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
