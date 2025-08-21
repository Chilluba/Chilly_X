import React from 'react';
import { useI18n } from '../context/I18nContext';

interface LanguageSwitcherProps {
	size?: 'sm' | 'md';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ size = 'md' }) => {
	const { lang, setLanguage, toggleLanguage } = useI18n();
	const isSw = lang === 'sw';

	const base = 'relative inline-flex items-center rounded-full bg-white/10 backdrop-blur px-1 py-1 border border-white/15 hover:bg-white/15 transition-colors';
	const dim = size === 'sm' ? 'h-7' : 'h-8';
	const btn = 'px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-colors';

	return (
		<div className={`${base} ${dim}`} role="group" aria-label="Language switcher">
			<button
				type="button"
				className={`${btn} ${lang === 'en' ? 'bg-brand-accent text-brand-bg-900' : 'text-gray-300 hover:text-white'}`}
				onClick={() => setLanguage('en')}
				aria-pressed={lang === 'en'}
			>
				EN
			</button>
			<button
				type="button"
				className={`${btn} ${isSw ? 'bg-brand-accent text-brand-bg-900' : 'text-gray-300 hover:text-white'}`}
				onClick={() => setLanguage('sw')}
				aria-pressed={isSw}
			>
				SW
			</button>
		</div>
	);
};

export default LanguageSwitcher;

