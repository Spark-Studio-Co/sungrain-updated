import { useAboutPopupStore } from '../model/popup-store';

interface Props {
    title: string;
    popupText: string;
    children: React.ReactNode;
}

export const CardInteraction = ({ title, popupText, children }: Props) => {
    const openPopup = useAboutPopupStore((state) => state.openPopup);

    const handleClick = () => {
        openPopup({
            title,
            description: popupText
        });
    };

    return (
        <div onClick={handleClick} className="cursor-pointer w-full h-full">
            {children}
        </div>
    );
};
