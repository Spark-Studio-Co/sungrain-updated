import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useMenuStore } from "../model/menu-store"
import { useBurgerMenuStore } from "../model/burger-menu-store"

const menuItems = [
    { label: "О нас", href: "#about" },
    { label: "Наши принципы", href: "#principles" },
    { label: "Услуги", href: "#services" },
    { label: "Контакты", href: "#contacts" },
]

export const Menu = () => {
    const menuRef = useRef<HTMLDivElement>(null)
    const timeline = useRef<gsap.core.Timeline | null>(null)
    const isOpen = useMenuStore((state) => state.isOpen)
    const closeMenu = useMenuStore((state) => state.close)
    const toggleBurgerMenu = useBurgerMenuStore((state) => state.toggleMenu)

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        closeMenu()
        toggleBurgerMenu()

        setTimeout(() => {
            const element = document.querySelector(href || '')
            element?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true })

        if (!menuRef.current) return

        timeline.current
            .to(menuRef.current, {
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            })
            .from(
                ".menu-item",
                {
                    y: 50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.3,
                    ease: "power2.out",
                },
                "-=0.2"
            )

        return () => {
            if (timeline.current) {
                timeline.current.kill()
            }
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            if (timeline.current) {
                timeline.current.play()
            }
        } else {
            if (timeline.current) {
                timeline.current.reverse()
            }
        }
    }, [isOpen])

    return (
        <div
            ref={menuRef}
            className="absolute inset-0 bg-background translate-y-[-100%] bg-white z-40 flex items-center justify-center overflow-hidden"
        >
            <nav className="text-center">
                {menuItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="menu-item block text-3xl font-bold mb-8 z-40 text-primary"
                        onClick={handleLinkClick}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}
