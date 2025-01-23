import { create } from 'zustand';

interface AboutPopupContent {
    title: string;
    description: string;
}

interface PopupState {
    activePopup: string | null;
    popupContent: AboutPopupContent | null;
    openPopup: (content: AboutPopupContent) => void;
    closePopup: () => void;
}

export const useAboutPopupStore = create<PopupState>((set) => ({
    activePopup: null,
    popupContent: null,
    openPopup: (content) =>
        set({
            activePopup: content.title,
            popupContent: content
        }),
    closePopup: () =>
        set({
            activePopup: null,
            popupContent: null
        }),
}));
