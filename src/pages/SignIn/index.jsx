import {Container} from "./style"

import logo from "../../assets/logo.svg"

import {Input} from "../../components/Input"
import { Button } from "../../components/Button"



export function SignIn(){

    return(
        <Container>
            <h1 className="roboto-giant-bold">
                <img src={logo} alt="Logo Food Explorer" />

                food explorer
            </h1>

            <div>
                <form action="">
                    <h1 className="poppins-400-medium">Faça o login</h1>

                    <Input label="Email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="text"/>

                    <Input label="Senha" title="Senha" placeholder="No mínimo 6 caracteres" type="current-password"/>

                    <footer>
                        <Button title="Entrar"></Button>

                        <a href="#">
                            Criar uma conta
                        </a>
                    </footer>
                </form>
            </div> 
        </Container>

    )
};