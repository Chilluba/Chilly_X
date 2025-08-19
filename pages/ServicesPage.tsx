
import React from 'react';
import { useData } from '../context/DataContext';
import Card from '../components/ui/Card';

const ServicesPage: React.FC = () => {
  const { services } = useData();
  return (
    <div>
      <h1 className="font-heading text-5xl text-brand-accent uppercase tracking-wider mb-4 text-center">Services</h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Leveraging a diverse skill set to bring ideas to life. Here's how I can help you and your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <Card key={service.title} className="flex flex-col items-center text-center">
            <div className="p-4 bg-brand-primary-500/20 rounded-full mb-6">
              <service.icon className="w-10 h-10 text-brand-accent" />
            </div>
            <h3 className="font-heading text-2xl text-brand-text tracking-wide mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
