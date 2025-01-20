import { useBurgerAnimation } from "../lib/animations/burger-animation";
import { useRef } from "react";

export const BurgerButton = () => {
    const lineRef1 = useRef<HTMLSpanElement>(null);
    const lineRef2 = useRef<HTMLSpanElement>(null);
    const lineRef3 = useRef<HTMLSpanElement>(null);

    const { toggleMenu } = useBurgerAnimation(lineRef1, lineRef2, lineRef3);

    return (
        <div
            className="h-10 w-10 flex items-center justify-center relative "
            onClick={toggleMenu}
        >
            <span
                ref={lineRef1}
                className="absolute h-[2px] w-[32px] bg-primary rounded-md transition-all duration-300 ease-in-out top-[10px]"
            />
            <span
                ref={lineRef2}
                className="absolute h-[2px] w-[32px] bg-primary rounded-md transition-all duration-300 ease-in-out top-[18px]"
            />
            <span
                ref={lineRef3}
                className="absolute h-[2px] w-[32px] bg-primary rounded-md transition-all duration-300 ease-in-out top-[26px]"
            />
        </div>
    );
};