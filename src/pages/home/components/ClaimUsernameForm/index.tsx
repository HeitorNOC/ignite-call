import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ClaimUsernameFormSchema = z.object({
    username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

    async function handleClaimUsername(data: ClaimUsernameFormData) {
        
    }

    return (
        <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
            <TextInput 
                size="sm" 
                prefix="ignite.com/" 
                placeholder="seu-usuario"
                {...register('username')}
            />
            <Button size="sm" type="submit">
                Reservar
                <ArrowRight />
            </Button>
        </Form>
    )
}