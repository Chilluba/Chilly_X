import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ProjectCategory } from '../types';

type Language = 'en' | 'sw';

interface I18nContextValue {
	lang: Language;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
	t: (key: string) => string;
	tCategory: (category: ProjectCategory | 'All') => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
	en: {
		// nav
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.work': 'Work',
		'nav.services': 'Services',
		'nav.contact': 'Contact',
		'nav.admin': 'Admin',

		// shared
		'shared.downloadCV': 'Download CV',
		'shared.all': 'All',
		'footer.rightsReserved': 'All Rights Reserved.',

		// home
		'home.viewWork': 'View Work',
		'home.hireMe': 'Hire Me',
		'home.yearsCreating': 'Years Creating',
		'home.shippedProjects': 'Shipped Projects',
		'home.toolsMastered': 'Tools Mastered',

		// about
		'about.title': 'About Me',
		'about.skillsMatrix': 'Skills Matrix',
		'about.education': 'Education',
		'about.location': 'Location',

		// services
		'services.title': 'Services',
		'services.tagline': "Leveraging a diverse skill set to bring ideas to life. Here's how I can help you and your business.",

		// work
		'work.title': 'My Work',
		'work.description': 'A selection of projects that showcase my skills across different creative and technical fields. Use the filters to explore.',

		// contact
		'contact.getInTouch': 'Get In Touch',
		'contact.description': "Have a project in mind, a question, or just want to say hi? I'd love to hear from you.",
		'contact.sendMessage': 'Send a Message',
		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.message': 'Message',
		'contact.send': 'Send',
		'contact.methodsTitle': '...Or Use a Carrier Pigeon',
		'contact.methodsDesc': "If forms aren't your thing, here are some faster ways to reach me.",
		'contact.emailMe': 'Email Me',
		'contact.callMe': 'Call Me',
		'contact.whatsapp': 'WhatsApp',
		'contact.alertSent': 'Message sent! (Demo)',

		// not found
		'notFound.title': 'Page Not Found',
		'notFound.description': "Looks like you've followed a broken link or entered a URL that doesn't exist.",
		'notFound.backHome': 'Go Back Home',

		// project categories
		'category.ALL': 'All',
		'category.WEB': 'Web Apps & Sites',
		'category.GAMES': 'Games',
		'category.THREE_D': '3D/CGI',
		'category.VIDEO': 'Videos/Films',
		'category.PHOTO': 'Photography',
		'category.DESIGN': 'Graphic Design',
		'category.AI': 'AI/Agents',
		'category.EXPERIMENTS': 'Experiments'
	},
	sw: {
		// nav
		'nav.home': 'Nyumbani',
		'nav.about': 'Kuhusu',
		'nav.work': 'Kazi',
		'nav.services': 'Huduma',
		'nav.contact': 'Mawasiliano',
		'nav.admin': 'Usimamizi',

		// shared
		'shared.downloadCV': 'Pakua CV',
		'shared.all': 'Zote',
		'footer.rightsReserved': 'Haki zote zimehifadhiwa.',

		// home
		'home.viewWork': 'Tazama Kazi',
		'home.hireMe': 'Niajiri',
		'home.yearsCreating': 'Miaka ya Ubunifu',
		'home.shippedProjects': 'Miradi Iliyokamilishwa',
		'home.toolsMastered': 'Zana Nilizomudu',

		// about
		'about.title': 'Kuhusu Mimi',
		'about.skillsMatrix': 'Ujuzi',
		'about.education': 'Elimu',
		'about.location': 'Mahali',

		// services
		'services.title': 'Huduma',
		'services.tagline': 'Kutumia ujuzi mbalimbali kubadili mawazo kuwa uhalisia. Hivi ndivyo naweza kusaidia wewe na biashara yako.',

		// work
		'work.title': 'Kazi Zangu',
		'work.description': 'Mkusanyiko wa miradi inayoonyesha ujuzi wangu katika nyanja tofauti za ubunifu na teknolojia. Tumia vichujio kuchunguza.',

		// contact
		'contact.getInTouch': 'Wasiliana Nami',
		'contact.description': 'Una mradi, swali, au unataka tu kusalimia? Ningependa kusikia kutoka kwako.',
		'contact.sendMessage': 'Tuma Ujumbe',
		'contact.name': 'Jina',
		'contact.email': 'Barua pepe',
		'contact.message': 'Ujumbe',
		'contact.send': 'Tuma',
		'contact.methodsTitle': '...Au Tumia Njiwa wa Habari',
		'contact.methodsDesc': 'Kama fomu si chaguo lako, tumia njia hizi za haraka kunifikia.',
		'contact.emailMe': 'Nitume Barua Pepe',
		'contact.callMe': 'Nipigie Simu',
		'contact.whatsapp': 'WhatsApp',
		'contact.alertSent': 'Ujumbe umetumwa! (Majaribio)',

		// not found
		'notFound.title': 'Ukurasa Haukupatikana',
		'notFound.description': 'Inaonekana umefuata kiungo kibovu au umeingiza URL isiyopo.',
		'notFound.backHome': 'Rudi Nyumbani',

		// project categories
		'category.ALL': 'Zote',
		'category.WEB': 'Tovuti na Programu za Wavuti',
		'category.GAMES': 'Michezo',
		'category.THREE_D': '3D/CGI',
		'category.VIDEO': 'Video/Filamu',
		'category.PHOTO': 'Upigaji Picha',
		'category.DESIGN': 'Ubunifu wa Picha',
		'category.AI': 'AI/Wakala',
		'category.EXPERIMENTS': 'Majaribio'
	}
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [lang, setLang] = useState<Language>('en');

	const setLanguage = useCallback((next: Language) => {
		setLang(next);
		try {
			localStorage.setItem('lang', next);
		} catch {}
	}, []);

	const toggleLanguage = useCallback(() => {
		setLanguage(prev => (prev === 'en' ? 'sw' : 'en'));
	}, [setLanguage]);

	React.useEffect(() => {
		try {
			const stored = localStorage.getItem('lang') as Language | null;
			if (stored === 'en' || stored === 'sw') {
				setLang(stored);
			}
		} catch {}
	}, []);

	const t = useCallback(
		(key: string): string => {
			const dict = translations[lang];
			if (dict && key in dict) return dict[key];
			const fallback = translations.en[key];
			return fallback ?? key;
		},
		[lang]
	);

	const tCategory = useCallback(
		(category: ProjectCategory | 'All'): string => {
			if (category === 'All') return t('category.ALL');
			// The enum values are the English display strings; map them to keys by comparing substrings
			const normalized = String(category);
			if (normalized.includes('Web')) return t('category.WEB');
			if (normalized === 'Games') return t('category.GAMES');
			if (normalized.includes('3D')) return t('category.THREE_D');
			if (normalized.includes('Video')) return t('category.VIDEO');
			if (normalized.includes('Photography')) return t('category.PHOTO');
			if (normalized.includes('Graphic Design')) return t('category.DESIGN');
			if (normalized.includes('AI')) return t('category.AI');
			if (normalized.includes('Experiments')) return t('category.EXPERIMENTS');
			return normalized;
		},
		[t]
	);

	const value: I18nContextValue = useMemo(
		() => ({ lang, setLanguage, toggleLanguage, t, tCategory }),
		[lang, setLanguage, toggleLanguage, t, tCategory]
	);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
	const ctx = useContext(I18nContext);
	if (!ctx) {
		throw new Error('useI18n must be used within I18nProvider');
	}
	return ctx;
};

