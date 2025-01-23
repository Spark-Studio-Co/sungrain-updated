import { useSuccessPopupStore } from '../model/success-popup-store';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import PcLogoIcon from '../../../shared/icons/pc-logo-icon';
import { LogoIcon } from '../../../shared/icons/logo-icon';

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const contentVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: -20,
        transition: {
            duration: 0.3
        }
    }
};

export const SuccessPopup = () => {
    const { content, closePopup, isOpen } = useSuccessPopupStore();
    const popupRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            closePopup();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && content && (
                <motion.div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={handleClick}
                >
                    <motion.div
                        ref={popupRef}
                        className="bg-white rounded-2xl relative p-8 max-w-md w-full flex flex-col items-center text-center"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            onClick={closePopup}
                            className=" hover:text-primary transition-colors absolute right-4 top-4"
                            aria-label='button close'
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {content.showLogo && (
                            <>
                                <div className="mb-6 lg:flex hidden">
                                    <PcLogoIcon />
                                </div>
                                <div className="mb-6 lg:hidden flex ">
                                    <LogoIcon />
                                </div>
                            </>
                        )}
                        <span className="text-2xl font-bold mb-4 text-primary">
                            {content.title}
                        </span>
                        {content.text && (
                            <p className="text-gray-600 font-gotham">
                                {content.text}
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
