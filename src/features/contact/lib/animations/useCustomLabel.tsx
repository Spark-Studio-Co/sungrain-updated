import gsap from "gsap";
import { useRef } from "react";

export const useCustomLabel = (
    isPc: boolean,
    xs: boolean,
    sm: boolean,
    md: boolean
) => {
    const labelRef = useRef<HTMLLabelElement>(null);

    const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = () => {
        if (isPc) {
            if (labelRef.current) {
                gsap.to(labelRef.current, {
                    bottom: "32px",
                    fontSize: "16px",
                    color: "#FFFFFF",
                    duration: 0.1,
                    ease: "power3.out",
                });
            }
        } else if (xs) {
            if (labelRef.current) {
                gsap.to(labelRef.current, {
                    bottom: "clamp(12px, 24 / 480 * 100vw, 48px)",
                    fontSize: "clamp(6px, 12 / 480 * 100vw, 24px)",
                    color: "#FFFFFF",
                    duration: 0.1,
                    ease: "power3.out",
                });
            }
        } else if (sm) {
            if (labelRef.current) {
                gsap.to(labelRef.current, {
                    bottom: "clamp(12px, 24 / 768 * 100vw, 48px)",
                    fontSize: "clamp(6px, 12 / 768 * 100vw, 24px)",
                    color: "#FFFFFF",
                    duration: 0.1,
                    ease: "power3.out",
                });
            }
        } else if (md) {
            if (labelRef.current) {
                gsap.to(labelRef.current, {
                    bottom: "clamp(12px, 24 / 992 * 100vw, 48px)",
                    fontSize: "clamp(6px, 12 / 992 * 100vw, 24px)",
                    color: "#FFFFFF",
                    duration: 0.1,
                    ease: "power3.out",
                });
            }
        } else {
            if (labelRef.current) {
                gsap.to(labelRef.current, {
                    bottom: "clamp(12px, 24 / 360 * 100vw, 48px)",
                    fontSize: "clamp(6px, 12 / 360 * 100vw, 24px)",
                    color: "#FFFFFF",
                    duration: 0.1,
                    ease: "power3.out",
                });
            }
        }
    };

    const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        if (isPc) {
            if (labelRef.current && e.target.value === "") {
                gsap.to(labelRef.current, {
                    bottom: "4px",
                    fontSize: "16px",
                    color: "#FFFFFF",
                    duration: 0.2,
                    ease: "power3.out",
                });
            }
        } else if (xs) {
            if (labelRef.current && e.target.value === "") {
                gsap.to(labelRef.current, {
                    bottom: "clamp(2px, 4 / 480 * 100vw, 8px)",
                    fontSize: "clamp(8px, 16 / 480 * 100vw, 32px)",
                    color: "#FFFFFF",
                    duration: 0.2,
                    ease: "power3.out",
                });
            }
        } else if (sm) {
            if (labelRef.current && e.target.value === "") {
                gsap.to(labelRef.current, {
                    bottom: "clamp(2px, 4 / 768 * 100vw, 8px)",
                    fontSize: "clamp(8px, 16 / 768 * 100vw, 32px)",
                    color: "#FFFFFF",
                    duration: 0.2,
                    ease: "power3.out",
                });
            }
        } else if (md) {
            if (labelRef.current && e.target.value === "") {
                gsap.to(labelRef.current, {
                    bottom: "clamp(2px, 4 / 992 * 100vw, 8px)",
                    fontSize: "clamp(8px, 16 / 992 * 100vw, 32px)",
                    color: "#FFFFFF",
                    duration: 0.2,
                    ease: "power3.out",
                });
            }
        } else {
            if (labelRef.current && e.target.value === "") {
                gsap.to(labelRef.current, {
                    bottom: "clamp(2px, 4 / 360 * 100vw, 8px)",
                    fontSize: "clamp(8px, 16 / 360 * 100vw, 32px)",
                    color: "#FFFFFF",
                    duration: 0.2,
                    ease: "power3.out",
                });
            }
        }
    };
    return { onLabelFocus, onLabelBlur, labelRef };
};