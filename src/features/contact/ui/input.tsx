import { useCustomLabel } from '../lib/animations/useCustomLabel';
import { useId } from 'react';

interface IInputProps {
  placeholder: string;
  className?: string;
  name: string;
}

export const Input = ({ placeholder, className, name }: IInputProps) => {
  const { onLabelFocus, onLabelBlur, labelRef } = useCustomLabel();
  const id = useId();

  return (
    <div className={`relative mt-8 ${className || ''} max-w-[401px]`}>
      <input
        id={id}
        name={name}
        type="text"
        className="w-full border-b-2 border-white bg-transparent outline-none text-white font-gotham text-[clamp(14px,2vw,18px)]"
        onFocus={onLabelFocus}
        onBlur={onLabelBlur}
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
};
