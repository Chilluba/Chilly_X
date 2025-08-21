import React from 'react';
import Button from './ui/Button';
import { useI18n } from '../context/I18nContext';

const CVDownloadButton: React.FC = () => {
  const handleDownload = () => {
    // The CV will be served from the public directory
    window.open('/Salmin_Habibu_CV.pdf', '_blank');
  };
  const { t } = useI18n();

  return (
    <Button
      onClick={handleDownload}
      variant="primary"
      className="cv-download-button"
      aria-label="Download CV"
    >
      <svg 
        className="w-5 h-5 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      {t('shared.downloadCV')}
    </Button>
  );
};

export default CVDownloadButton;
