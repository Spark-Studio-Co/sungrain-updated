export const SubmitButton = ({ className }: { className?: string }) => {
  return (
    <button
      type="submit"
      className={`rounded-[32px] bg-white h-[50px] w-[200px] flex items-center justify-center text-primary font-montserrat font-[500] text-[16px] ${className}`}
    >
      Отправить
    </button>
  );
};
