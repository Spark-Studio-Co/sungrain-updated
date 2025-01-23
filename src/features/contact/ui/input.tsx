import { useCustomLabel } from "../lib/animations/useCustomLabel";
import { useId, forwardRef } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    className?: string;
    name: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ placeholder, className, name, type = "text", ...props }, ref) => {
        const { onLabelFocus, onLabelBlur, labelRef } = useCustomLabel();
        const id = useId();

        return (
            <div className={`relative mt-8 ${className || ''} max-w-[401px] lg:max-w-[320px] xl:max-w-[401px]`}>
                <input
                    ref={ref}
                    id={id}
                    name={name}
                    type={type}
                    className="w-full border-b-2 border-white bg-transparent outline-none text-white font-gotham text-[clamp(14px,2vw,18px)]"
                    onFocus={onLabelFocus}
                    onBlur={onLabelBlur}
                    {...props}
                />
                <label
                    ref={labelRef}
                    htmlFor={id}
                    className="absolute left-0 bottom-3 text-white font-gotham text-[clamp(14px,2vw,18px)] pointer-events-none transition-all duration-200"
                >
                    {placeholder}
                </label>
            </div>
        );
    }
);
