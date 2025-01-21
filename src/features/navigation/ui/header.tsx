import { BurgerButton } from "./burger-button"
import { LogoIcon } from "../../../shared/icons/logo-icon"

export const Header = () => {
    return (
        <header className="flex justify-between items-center mt-8 relative z-50">
            <LogoIcon />
            <BurgerButton />
        </header>
    )
}
