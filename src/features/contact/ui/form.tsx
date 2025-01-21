import { Input } from "./input"
import { SubmitButton } from "./submit-button"

export const Form = () => {
    return (
        <form>
            <Input type="text" placeholder="Placeholder" />
            <SubmitButton />
        </form>
    )
}
