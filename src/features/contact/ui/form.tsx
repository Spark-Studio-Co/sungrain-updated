import { Input } from "./input"
import { SubmitButton } from "./submit-button"
import { useTranslations } from "../../../i18n/utils"
import type { languages } from "../../../i18n/ui"
import { useSendEmail } from "../model/use-send-email"

type FormProps = {
    lang: keyof typeof languages
}

export const Form = ({ lang }: FormProps) => {
    const t = useTranslations(lang)
    const { register, handleSubmit, errors, isSubmitting } = useSendEmail()

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative">
                <Input
                    {...register("full_name")}
                    name="full_name"
                    placeholder={t('contact.name')}
                />
                {errors.full_name && (
                    <span className="text-white font-gotham text-sm absolute -bottom-6 left-0">
                        {errors.full_name.message}
                    </span>
                )}
            </div>
            <div className="relative mt-16">
                <Input
                    {...register("phone_number")}
                    name="phone_number"
                    placeholder={t('contact.phone')}
                    type="tel"
                />
                {errors.phone_number && (
                    <span className="text-white text-sm font-gotham absolute -bottom-6 left-0">
                        {errors.phone_number.message}
                    </span>
                )}
            </div>
            <SubmitButton className="mt-8" disabled={isSubmitting} />
        </form>
    )
}
