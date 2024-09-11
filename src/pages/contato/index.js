import { Form, FormB, FormButton, FormContainer, FormContent, FormInput, FormLabel, FormTextarea, FormTitle } from "./styles";


function ForComponent() {
    return(

        <FormContainer>
            <FormTitle>
                <b>Entre em contato <br/> e </b>
                <b>Vamos conversar</b> 
            </FormTitle>

            <FormContent>
                <Form 
                 action="https://formspree.io/f/xjkbryzy"
                 method="POST"
                >

                    <FormLabel>
                        <FormB>Seu Nome:</FormB>
                        <FormInput type="text" name="nome" id="fullName" placeholder="Coloque seu nome" required/>
                    </FormLabel>

                    <FormLabel>
                        <FormB>Seu Email:</FormB>
                        <FormInput type="email" name="email" id="email" placeholder="Coloque o seu email" required/>
                    </FormLabel>

                    <FormLabel>
                        <FormB>Seu Telefone:</FormB>
                        <FormInput type="text" name="telefone" id="fone" placeholder="Coloque seu telefone com o DDD" required/>
                    </FormLabel>

                    <FormLabel>
                        <FormB>Motivo do Contato:</FormB>
                        <FormTextarea name="message" id="message" placeholder="Coloque o motivo de seu contato" required></FormTextarea>
                    </FormLabel>

                    <FormButton type="submit">Send</FormButton>
                </Form>
            </FormContent>
        </FormContainer>
    )

}

export default ForComponent;