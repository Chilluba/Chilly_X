
import React from 'react';
import { useData } from '../context/DataContext';
import Card from '../components/ui/Card';
import { useI18n } from '../context/I18nContext';

const ServicesPage: React.FC = () => {
  const { services } = useData();
  const { t, lang } = useI18n();
  return (
    <div>
      <h1 className="font-heading text-5xl text-brand-accent uppercase tracking-wider mb-4 text-center">{t('services.title')}</h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        {t('services.tagline')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <Card key={service.title} className="flex flex-col items-center text-center">
            <div className="p-4 bg-brand-primary-500/20 rounded-full mb-6">
              <service.icon className="w-10 h-10 text-brand-accent" />
            </div>
            <h3 className="font-heading text-2xl text-brand-text tracking-wide mb-3">
              {lang === 'sw' && service.titleSw ? service.titleSw : service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {lang === 'sw' && service.descriptionSw ? service.descriptionSw : service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
