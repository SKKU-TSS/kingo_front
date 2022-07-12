import { Button } from "@chakra-ui/react"
import { SKKUBLUE } from "../../colors";

const TypeButton = ({title, num, index, set})=>{


    return(<Button onClick = {()=>set(num)}
        size = 'xs'
        backgroundColor = {index === num ? SKKUBLUE : 'white'}
        color = {index === num ? 'white' : 'black'}
    >
        {title}
    </Button>);
}

export default TypeButton;