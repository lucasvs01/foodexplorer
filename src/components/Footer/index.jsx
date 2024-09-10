import { Container } from "../Footer/style";
import logo from "../../assets/logo.svg";
import {LogoFooter} from "../../assets/LogoFooter.jsx";

export function Footer(){

    return (
        <Container>
            <footer>
                <div className="logo">
                    <LogoFooter/>
                    
                    <h1 className="roboto-bigger-bold"> food explorer</h1>
                </div>

                <span className="roboto-smaller-regular">© 2023 - Todos os direitos reservados.</span>
            </footer>
        </Container>
    )
}