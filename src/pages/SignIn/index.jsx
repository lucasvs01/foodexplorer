import {Container} from "./style"

import {Input} from "../../components/Input"



export function SignIn(){

    return(
        <Container>
            <Input type="text" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </Container>

    )
};