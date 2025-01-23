import { useAboutPopupStore } from '../model/popup-store';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { getLangFromUrl, useTranslations } from '../../../i18n/utils';

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

export const AboutPopup = () => {
    const { popupContent, closePopup } = useAboutPopupStore();
    const popupRef = useRef<HTMLDivElement>(null);
    const lang = getLangFromUrl(new URL(window.location.href));
    const t = useTranslations(lang);

    const handleClick = (e: React.MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            closePopup();
        }
    };

    return (
        <AnimatePresence>
            {popupContent && (
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
                        className="bg-white rounded-2xl p-8 max-w-md w-full"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-2xl font-bold text-primary">
                                {popupContent.title}
                            </span>
                            <button
                                onClick={closePopup}
                                className=" hover:text-primary transition-colors"
                                aria-label={t('button.close')}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        {popupContent.description && (
                            <p className="text-gray-600 font-gotham">
                                {popupContent.description}
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
