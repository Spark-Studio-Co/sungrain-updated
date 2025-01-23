import { create } from 'zustand';

interface PopupState {
    activePopup: string | null;
    popupContent: {
        title: string;
    } | null;
    openPopup: (title: string) => void;
    closePopup: () => void;
}

export const usePopupStore = create<PopupState>((set) => ({
    activePopup: null,
    popupContent: null,
    openPopup: (title) =>
        set({
            activePopup: title,
            popupContent: { title }
        }),
    closePopup: () =>
        set({
            activePopup: null,
            popupContent: null
        }),
}));
