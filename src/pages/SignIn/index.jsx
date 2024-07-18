import {Container} from "./style"

import {Input} from "../../components/Input"
import { Button } from "../../components/Button"

import { AiFillAlert } from "react-icons/ai";


export function SignIn(){

    return(
        <Container>
            <Input type="text" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        
            <Button title="Entrar">

            </Button>

        </Container>

    )
};