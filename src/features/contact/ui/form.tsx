import { Input } from "./input";
import { SubmitButton } from "./submit-button";
import { useTranslations } from "../../../i18n/utils";
import type { languages } from "../../../i18n/ui";
import { useSendEmail } from "../model/use-send-email";

type FormProps = {
    lang: keyof typeof languages;
};

export const Form = ({ lang }: FormProps) => {
    const t = useTranslations(lang);
    const { register, handleSubmit, errors, isSubmitting } = useSendEmail();

    const errorMessageClass = "text-white text-[11px] sm:text-[14px] lg:text-sm font-gotham absolute -bottom-5 sm:-bottom-6 left-0 transition-opacity duration-200";


    return (
        <form onSubmit={handleSubmit}>
            <div className="relative">
                <Input
                    placeholder={t("contact.name")}
                    {...register("full_name", {
                        required: t("contact.name_required"),
                        minLength: {
                            value: 2,
                            message: t("contact.name_too_short"),
                        },
                    })}
                />
                <span
                    className={`${errorMessageClass} ${errors.full_name ? "opacity-100" : "opacity-0"}`}
                >
                    {errors.full_name?.message as string}
                </span>
            </div>
            <div className="relative mt-[2.6rem] sm:mt-[3rem] lg:mt-[3.5rem]">
                <Input
                    placeholder={t("contact.phone")}
                    type="tel"
                    {...register("phone_number", {
                        required: t("contact.phone_required"),
                        pattern: {
                            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                            message: t("contact.phone_invalid"),
                        },
                    })}
                />
                <span
                    className={`${errorMessageClass} ${errors.phone_number ? "opacity-100" : "opacity-0"}`}
                >
                    {errors.phone_number?.message as string}
                </span>
            </div>
            <SubmitButton className="mt-10" disabled={isSubmitting} lang={lang} />
        </form>
    );
};