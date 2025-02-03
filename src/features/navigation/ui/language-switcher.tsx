import { languages } from '../../../i18n/ui';
import { getLangFromUrl } from '../../../i18n/utils';
import { useEffect, useState } from 'react';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const [currentLang, setCurrentLang] = useState('ru');
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        const url = new URL(window.location.href);
        setCurrentLang(getLangFromUrl(url));
    }, []);

    const otherLang = currentLang === 'en' ? 'ru' : 'en';

    const handleLanguageChange = () => {
        if (isChanging) return;
        setIsChanging(true);
        setTimeout(() => {
            const pathSegments = window.location.pathname.split('/');
            pathSegments[1] = otherLang;
            const newPath = pathSegments.join('/');
            window.location.href = window.location.origin + newPath;
        }, 300);
    };

    return (
        <button
            onClick={handleLanguageChange}
            className={`${className} ml-4 w-10 h-10 rounded-full bg-primary text-white font-[500] text-xl transition-all duration-300 relative ${isChanging ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            aria-label={`Switch to ${languages[otherLang]}`}
            disabled={isChanging}
        >
            {languages[otherLang]}
        </button>
    );
};
