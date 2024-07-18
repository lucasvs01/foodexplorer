import { Container } from "./style";

export function Button({title, icon:Icon ,...rest}){

    return(
        <Container {...rest} type="button">
            {Icon && <Icon size="12" ></Icon>}
            {title}
        </Container>
    )
};