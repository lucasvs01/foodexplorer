import { Container } from "./style";

export function Button({title, icon:Icon, requests,...rest}){

    return(
        <Container {...rest} type="button">
            {Icon && <Icon size="20" ></Icon>}
            {title}
            {requests}
        </Container>
    )
};