
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { useData } from '../context/DataContext';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import Snarky from '../components/Snarky';
import { useI18n } from '../context/I18nContext';

const ContactPage: React.FC = () => {
  const { profile } = useData();
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to Firebase Cloud Functions or an email service.
    alert(t('contact.alertSent'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1 className="font-heading text-5xl text-brand-accent uppercase tracking-wider mb-4 text-center">
        <Snarky normal={t('contact.getInTouch')} snark="Summon Me" />
      </h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        <Snarky
          normal={t('contact.description')}
          snark="Got a crazy idea? Need a digital problem solved? Or maybe you just want to argue about movies. Whatever it is, drop a line."
        />
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-brand-bg-800 p-8" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}>
          <h2 className="font-heading text-2xl text-white mb-6">{t('contact.sendMessage')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">{t('contact.name')}</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/20 p-3 text-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">{t('contact.email')}</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/5 border border-white/20 p-3 text-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">{t('contact.message')}</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full bg-white/5 border border-white/20 p-3 text-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition"></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full">
              {t('contact.send')}
            </Button>
          </form>
        </div>

        <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-heading text-2xl text-white">{t('contact.methodsTitle')}</h3>
             <p className="text-gray-400">{t('contact.methodsDesc')}</p>
            <a href={`mailto:${profile.email}`}>
              <Button variant="outline" className="w-full"><Mail className="mr-3" />{t('contact.emailMe')}</Button>
            </a>
            <a href={`tel:${profile.phone}`}>
              <Button variant="outline" className="w-full"><Phone className="mr-3" />{t('contact.callMe')}</Button>
            </a>
            <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full"><MessageSquare className="mr-3" />{t('contact.whatsapp')}</Button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
