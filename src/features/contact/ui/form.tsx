import { Input } from "./input"
import { SubmitButton } from "./submit-button"

export const Form = () => {
    return (
        <form>
            <Input 
                name="name"
                placeholder="Ваше Имя" 
            />
            <Input 
                name="phone"
                placeholder="Ваш Номер Телефона" 
            />
            <SubmitButton className="mt-8" />
        </form>
    )
}
