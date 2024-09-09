import { Container } from "./style";

export function Button({title, icon:Icon, orders,...rest}){

    return(
        <Container {...rest} type="button">
            {Icon && <Icon size="20" ></Icon>}
            
                {title}
                
            <span>            
                {orders}
            </span>
        </Container>
    )
};