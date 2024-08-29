import { Container } from "./style.js";
import SignOut from "../../assets/signOut.svg"
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";



import {Button} from "../Button/index.jsx"
import {Receipt} from "../../assets/receipt.jsx"
import {Menu} from "../../assets/menu.jsx"
import logo from "../../assets/logo.svg"
import exit from "../../assets/exit.svg"



export function HeaderAdmin({admin={admin}, ...rest}){


    return (
        <Container {...rest}>
            <header>
                <div className="menu">
                    <Menu/>
                </div>   

                <nav>
                    <img src={logo} alt="Logo Food Explorer" />

                    <h1 className="roboto-bigger-bold">
                        food explorer

                        <span className="roboto-smallest-regular">
                            admin
                        </span>
                    </h1>

                </nav>

                <div className="input">
                     <IoIosSearch />
                     
                    <input type="text" className="roboto-small-regular" placeholder="Busque por pratos ou ingredientes"/>
                </div>


                <Button title="novo prato">
                    
                </Button>

                <img src={exit} alt="Sair da conta" className="exit"/>

            </header>
        </Container>
    )
}