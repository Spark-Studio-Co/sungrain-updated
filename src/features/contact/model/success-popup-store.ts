import { create } from 'zustand';

interface SuccessPopupContent {
    title: string;
    text?: string;
    showLogo?: boolean;
}

interface SuccessPopupState {
    isOpen: boolean;
    content: SuccessPopupContent | null;
    openPopup: (content: SuccessPopupContent) => void;
    closePopup: () => void;
}

export const useSuccessPopupStore = create<SuccessPopupState>((set) => ({
    isOpen: false,
    content: null,
    openPopup: (content) =>
        set({
            isOpen: true,
            content
        }),
    closePopup: () =>
        set({
            isOpen: false,
            content: null
        }),
}));
