import { useAboutPopupStore } from "../model/popup-store";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { getLangFromUrl, useTranslations } from "../../../i18n/utils";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export const AboutPopup = () => {
  const { activePopup, popupContent, closePopup } = useAboutPopupStore();
  const overlayRef = useRef<HTMLDivElement>(null);
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      closePopup();
    }
  };

  return (
    <AnimatePresence>
      {activePopup && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleOverlayClick}
        >
          <motion.div
            className="bg-white rounded-[20px] p-8 max-w-[600px] w-full max-h-[80vh] overflow-y-auto"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span className="font-unisans font-[900] text-[28px] text-primary mb-4">
              {popupContent?.title}
            </span>
            <p className="font-montserrat text-[16px] leading-[24px] text-secondary">
              {popupContent?.description}
            </p>
            <button
              onClick={closePopup}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-montserrat hover:bg-primary/90 transition-colors"
            >
              {t("button.close")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
