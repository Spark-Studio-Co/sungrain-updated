import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useSuccessPopupStore } from "./success-popup-store";
import { useTranslations } from "../../../i18n/utils";
import { getLangFromUrl } from "../../../i18n/utils";


export interface SendFormData {
  full_name: string;
  phone_number: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SendFormData>({
    mode: "onChange",
  });

  const { openPopup } = useSuccessPopupStore();
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);

  const onSubmit = async (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    if (!event) return;

    event.preventDefault();
    console.log('📨 Starting form submission...', data);

    setTimeout(() => {
      openPopup({
        title: t('contact.success.title'),
        text: t('contact.success.text'),
        showLogo: true
      });
    }, 1500);

    try {
      console.log('🚀 Sending email via EmailJS...');
      await emailjs.sendForm(
        "service_wt1ct4g",
        "template_fqfziii",
        event.target,
        "LV9gYtaB2q_9ES1bV"
      );
      console.log('✅ Email sent successfully!');

      reset();
      console.log('🔄 Form reset complete');
    } catch (error) {
      console.error('❌ Error sending email:', error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
}