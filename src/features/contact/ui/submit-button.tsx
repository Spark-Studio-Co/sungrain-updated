import { useTranslations } from "../../../i18n/utils"
import type { languages } from "../../../i18n/ui"

export const SubmitButton = ({ className, disabled, lang }: { className?: string, disabled?: boolean, lang: keyof typeof languages }) => {
    const t = useTranslations(lang)
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`rounded-[32px] bg-white h-[50px] w-[200px] flex items-center justify-center text-primary font-montserrat font-[500] text-[16px] ${className}`}
        >
            {t('contact.submit')}
        </button>
    )
}
