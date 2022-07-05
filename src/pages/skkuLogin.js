import { HStack, Input, VStack, Text } from "@chakra-ui/react"

const SKKULoginPage = () =>{


    const fieldStyle = {
        borderWidth : "1px",
        borderRadius : "4px",
        borderColor : "black",
        backgroundColor : "white",
       
        width : "400px"
    }



    return(<VStack width="100%">
        <Header/>
        <VStack style={fieldStyle} spacing="3" p="2">
            <TextField title = "ID" placeholder="username"/>
            <TextField title = "PW" placeholder="password"/>
            
            
        </VStack>
        <BtLogin/>
    </VStack>)
}


const Header = ()=>{

    const url = "https://www.skku.edu/_res/skku/img/skku_s.png"
    const style = {
        width : "200px",
        height : "200px",
        backgroundSize : "cover",
        backgroundImage : `url('${url}')`
    }
    return(<div style = {style}></div>)
}


const TextField = ({title,placeholder, onChange}) =>{
    return(<HStack width="100%" >
        <Text width = "10%" marginStart = "2" border="0px">
            {title}
        </Text>
        <Input variant='unstyled' placeholder={placeholder} size='xs'/>
    </HStack>)
}

const BtLogin = ({onClick})=>{
    return(<div backgroundColor = "black" color="white" onClick={onClick} >
        Sign in
    </div>)
}

export default SKKULoginPage