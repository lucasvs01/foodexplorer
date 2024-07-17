import { Container } from "./style";
import {Icon} from "./style";


export function Input({title, placeholder, icon:Icon, type, ...rest}){

    return(
        <Container {...rest} >
            <h2>
                {title}
            </h2>
           
            <div>

            {Icon && 
                    <Icon size="24">

                    </Icon>
                }
                
                <input type={type} placeholder={placeholder}/>
            </div>
        </Container>
    )
}