import { Container } from "./style.js";
import SignOut from "../../assets/signOut.svg"
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";



import {Button} from "../Button/index.jsx"
import {Receipt} from "../../assets/receipt.jsx"
import {Menu} from "../../assets/menu.jsx"
import logo from "../../assets/logo.svg"
import exit from "../../assets/exit.svg"



export function HeaderUser({orders, ...rest}){


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
                    </h1>

                </nav>

                <div className="receipt">
                    <Receipt/>

                    <div className="orders poppins-100-medium">
                        {orders}
                    </div>
                </div>

                <div className="input">
                     <IoIosSearch />
                     
                    <input type="text" className="roboto-small-regular" placeholder="Busque por pratos ou ingredientes"/>
                </div>


                <Button icon={Receipt} title="Pedidos" orders={`(${orders})`}>
                    
                </Button>

                <img src={exit} alt="Sair da conta" className="exit"/>

            </header>
        </Container>
    )
}