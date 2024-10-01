import { Container } from "./style";
import Minus from "../../assets/minus.svg"
import Plus from "../../assets/plus.svg"
import { useState } from "react";

export function Stepper({children, ...rest}){


    return (
        <Container className="stepper">
            <img src={Minus} alt="Menos" />

            <span className="roboto-big-bold">{children}</span>

            <img src={Plus} alt="Mais" />

        </Container>
    )
};