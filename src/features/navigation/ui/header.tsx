import { BurgerButton } from "./burger-button"
import { useEffect } from "react"

import { LogoIcon } from "../../../shared/icons/logo-icon"
import InstagramIcon from "../../../shared/icons/instagram-icon"
import WhatsAppIcon from "../../../shared/icons/whatsapp-icon"
import PcLogoIcon from "../../../shared/icons/pc-logo-icon"
import { links } from "../model/links"
import { LanguageSwitcher } from "./language-switcher"
import { getLangFromUrl, useTranslations } from '../../../i18n/utils'

import styles from "./header.module.css"


export const Header = () => {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    const url = typeof window !== 'undefined' ? new URL(window.location.href) : null;
    const lang = url ? getLangFromUrl(url) : 'ru';
    const t = useTranslations(lang);

    return (
        <header className="max-w-[90%] lg:max-w-[80%] 3xl:max-w-[1560px] mx-auto flex justify-between items-center mt-8 absolute top-0 left-0 right-0 z-[100] bg-white">
            <div className="lg:hidden flex">
                <LogoIcon />
            </div>
            <div className="lg:flex hidden">
                <PcLogoIcon />
            </div>
            <div className="lg:hidden">
                <BurgerButton />
            </div>
            <div className="items-center flex-row lg:flex hidden">
                <nav className="items-center justify-center gap-x-5 flex scroll-smooth">
                    {links.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={styles.header__link}
                        >
                            {t(link.labelKey)}
                        </a>
                    ))}
                </nav>
                <a href="https://www.instagram.com/sungrain.kz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ml-6">
                    <InstagramIcon />
                </a>
                <a href="https://wa.me/+77768261717" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="ml-4">
                    <WhatsAppIcon />
                </a>
                <LanguageSwitcher />
            </div>
        </header>
    )
}
