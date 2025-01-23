import gsap from 'gsap';
import { useRef } from 'react';

export const useCustomLabel = () => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = () => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: 'clamp(20px, 4vh, 28px)',
        fontSize: 'clamp(12px, 1.5vw, 16px)',
        color: '#FFFFFF',
        duration: 0.2,
        ease: 'power3.out',
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === '') {
      gsap.to(labelRef.current, {
        bottom: 'clamp(8px, 2vh, 12px)',
        fontSize: 'clamp(14px, 2vw, 18px)',
        color: '#FFFFFF',
        duration: 0.2,
        ease: 'power3.out',
      });
    }
  };

  return { onLabelFocus, onLabelBlur, labelRef };
};
