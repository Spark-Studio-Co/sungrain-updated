type NavLinkKey = "nav.about" | "nav.principles" | "nav.services" | "nav.contact";

interface NavLink {
    labelKey: NavLinkKey;
    href: string;
}

export const links: NavLink[] = [
    { labelKey: "nav.about", href: "#about" },
    { labelKey: "nav.principles", href: "#principles" },
    { labelKey: "nav.services", href: "#services" },
    { labelKey: "nav.contact", href: "#contacts" },
]