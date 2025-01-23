
export const SubmitButton = ({ className, disabled }: { className?: string, disabled?: boolean }) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`rounded-[32px] bg-white h-[50px] w-[200px] flex items-center justify-center text-primary font-montserrat font-[500] text-[16px] ${className}`}
        >
            Отправить
        </button>
    )
}
