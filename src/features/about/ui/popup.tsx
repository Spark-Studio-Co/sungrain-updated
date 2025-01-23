import { usePopupStore } from '../model/popup-store';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
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

export const Popup = () => {
    const { popupContent, closePopup } = usePopupStore();
    const popupRef = useRef<HTMLDivElement>(null);
    const lang = getLangFromUrl(new URL(window.location.href));
    const t = useTranslations(lang);

    const handleClick = (e: React.MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            closePopup();
        }
    };

    useEffect(() => {
        if (popupContent) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.overflowY = 'scroll';

            return () => {
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.top = '';
                document.body.style.overflowY = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            };
        }
    }, [popupContent]);

    return (
        <AnimatePresence>
            {popupContent && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    onClick={handleClick}
                >
                    <motion.div
                        ref={popupRef}
                        className="bg-white rounded-[20px] p-6 max-w-[90%] w-[500px] relative"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className='flex items-center flex-row relative justify-between'>
                            <button
                                onClick={closePopup}
                                className="absolute top-1 right-0 text-secondary hover:text-primary transition-colors"
                                aria-label={t('button.close')}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <span className="font-unisans font-[900] text-[28px] text-primary mb-4">
                                {popupContent.title}
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
