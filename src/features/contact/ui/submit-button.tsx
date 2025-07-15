import { useTranslations } from "../../../i18n/utils";
import type { languages } from "../../../i18n/ui";
import { ButtonLoader } from "../../../shared/ui/loader";

export const SubmitButton = ({
  className,
  disabled,
  lang,
}: {
  className?: string;
  disabled?: boolean;
  lang: keyof typeof languages;
}) => {
  const t = useTranslations(lang);
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`rounded-[32px] bg-white h-[50px] w-[200px] flex items-center justify-center text-primary font-montserrat font-[500] text-[16px] ${className} ${
        disabled
          ? "opacity-80 cursor-not-allowed"
          : "hover:bg-gray-50 active:bg-gray-100"
      } transition-all duration-200`}
    >
      {disabled ? (
        <div className="flex items-center gap-2">
          <ButtonLoader size={16} color="#F38810" />
          <span>{t("button.loading")}</span>
        </div>
      ) : (
        t("contact.submit")
      )}
    </button>
  );
};
