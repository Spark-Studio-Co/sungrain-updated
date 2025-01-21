import { BurgerButton } from "./burger-button"
import { LogoIcon } from "../../../shared/icons/logo-icon"

import InstagramIcon from "../../../shared/icons/instagram-icon"
import WhatsAppIcon from "../../../shared/icons/whatsapp-icon"
import { links } from "../model/links"
import styles from "./header.module.css"

export const Header = () => {
    return (
        <header className="flex justify-between items-center mt-8 relative z-50">
            <LogoIcon />
            <div className="lg:hidden">
                <BurgerButton />
            </div>
            <div className="items-center flex-row lg:flex hidden">
                <div className="items-center justify-center gap-x-5 flex">
                    {links.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={styles.header__link}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <a href="" className="ml-6">
                    <InstagramIcon />
                </a>
                <a href="" className="ml-4">
                    <WhatsAppIcon />
                </a>
            </div>
        </header>
    )
}
