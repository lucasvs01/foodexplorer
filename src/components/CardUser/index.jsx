import { Container } from "./style";
import {Stepper} from "../../components/Stepper"
import {Button} from "../../components/Button"

import { Heart } from "../../assets/heart.jsx";

export function CardUser ({favorite, ...rest}){

    return (
        <Container {...rest}>

            <Heart/>

            <section>

                <div className="dishes">


                    <img className="photo-dish" src="https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg?w=900&t=st=1726500607~exp=1726501207~hmac=2b28d8e63a6ca8a74f57e8eed7afe053fab1719a4b42e2015598dd31377c1e58" alt=""/>

                    <h1 className="poppins-300-bold">
                        Nome do prato
                    </h1>

                    <p className="roboto-smaller-regular">
                        Descrição do prato
                    </p>

                    <strong className="roboto-biggest-regular">
                        R$ 125,00
                    </strong>
                </div>

                <div className="orders">
                    <Stepper>
                        01
                    </Stepper>

                    <Button title="Incluir" className="poppins-100-medium"/>
                
                </div>
            </section>
        </Container>
    )
}