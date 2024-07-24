import {Container} from "./style"

import logo from "../../assets/logo.svg"

import {Input} from "../../components/Input"
import { Button } from "../../components/Button"



export function SignUp(){

    return(
        <Container>
            <h1 className="roboto-giant-bold">
                <img src={logo} alt="Logo Food Explorer" />

                food explorer
            </h1>

            <div>
                <form action="">
                    <h1 className="poppins-400-medium">Crie a sua conta</h1>

                    <Input label="Name" title="Seu nome" placeholder="Exemplo: Maria da Silva" type="text"/>
                    
                    <Input label="Email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="text"/>

                    <Input label="Senha" title="Senha" placeholder="No mínimo 6 caracteres" type="current-password"/>

                    <footer>
                        <Button title="Criar conta"></Button>

                        <a href="#">
                            Já tenho uma conta
                        </a>
                    </footer>
                </form>
            </div> 
        </Container>

    )
};