import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const sendFormSchema = z.object({
  full_name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов"),
  phone_number: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Пожалуйста, введите корректный номер телефона"),
});

export type SendFormData = z.infer<typeof sendFormSchema>;

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SendFormData>({
    resolver: zodResolver(sendFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    if (event) {
      event.preventDefault();

      try {
        const result = await emailjs.sendForm(
          "service_wt1ct4g",
          "template_fqfziii",
          event.target,
          "LV9gYtaB2q_9ES1bV"
        );

        console.log("Email successfully sent!", result.text);
        reset();
      } catch (error: any) {
        console.error("Failed to send email:", error.text);
      }
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
  };
}
