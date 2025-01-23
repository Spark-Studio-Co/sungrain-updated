import { Input } from "./input"
import { SubmitButton } from "./submit-button"
import { useTranslations } from "../../../i18n/utils"
import type { languages } from "../../../i18n/ui"

type FormProps = {
    lang: keyof typeof languages
}

export const Form = ({ lang }: FormProps) => {
    const t = useTranslations(lang)

    return (
        <form>
            <Input 
                name="name"
                placeholder={t('contact.name')}
            />
            <Input 
                name="phone"
                placeholder={t('contact.phone')}
            />
            <SubmitButton className="mt-8" />
        </form>
    )
}
