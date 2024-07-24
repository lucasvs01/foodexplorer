import { Container } from "./style";


export function Input({title, placeholder, icon:Icon, type, ...rest}){

    return(
        <Container {...rest} >
            <h2 className="roboto-small-regular">
                {title}
            </h2>
           
            <div>

            {Icon && 
                    <Icon size="24">

                    </Icon>
                }
                
                <input className="roboto-small-regular" type={type} placeholder={placeholder}/>
            </div>
        </Container>
    )
}