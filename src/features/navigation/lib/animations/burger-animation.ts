import gsap from "gsap";
import { useEffect } from "react";
import type { RefObject } from "react";

import { useBurgerMenuStore } from "../../model/burger-menu-store";

export const useBurgerAnimation = (
    lineRef1: RefObject<HTMLSpanElement | null>,
    lineRef2: RefObject<HTMLSpanElement | null>,
    lineRef3: RefObject<HTMLSpanElement | null>
) => {
    const { isOpen, toggleMenu } = useBurgerMenuStore();

    useEffect(() => {
        if (!lineRef1.current || !lineRef2.current || !lineRef3.current) return;

        if (isOpen) {
            gsap.to(lineRef1.current, {
                rotate: 45,
                y: 8,
                duration: 0.3,
                transformOrigin: "center",
            });
            gsap.to(lineRef2.current, {
                opacity: 0,
                duration: 0.3,
            });
            gsap.to(lineRef3.current, {
                rotate: -45,
                y: -8,
                duration: 0.3,
                transformOrigin: "center",
            });
        } else {
            gsap.to(lineRef1.current, {
                rotate: 0,
                y: 0,
                duration: 0.3,
                transformOrigin: "center",
            });
            gsap.to(lineRef2.current, {
                opacity: 1,
                duration: 0.3,
            });
            gsap.to(lineRef3.current, {
                rotate: 0,
                y: 0,
                duration: 0.3,
                transformOrigin: "center",
            });
        }
    }, [isOpen, lineRef1, lineRef2, lineRef3]);


    return { toggleMenu, isOpen };
};