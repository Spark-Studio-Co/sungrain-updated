
interface IInputProps {
    type: string;
    placeholder: string;
}

export const Input = ({ type, placeholder }: IInputProps) => {
    return (
        <input type={type} className="w-full border-b border-white bg-transparent outline-none placeholder-white text-white font-gotham text-[18px]" placeholder={placeholder} />
    )
}
