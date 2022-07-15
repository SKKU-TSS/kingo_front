import { HStack, Input, VStack, Text, Button, Box } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { actionSkkuLogin } from "../redux/skkusign/action"
import { connect, useDispatch } from 'react-redux'

const SKKULoginPage = () =>{

    const dispatch = useDispatch();

    const [form, setForm] = useState({id:"", pw : ""})

    const skkuLogin = ()=>{
        dispatch(actionSkkuLogin(form.id));
    }

    const fieldStyle = {
        borderWidth : "1px",
        borderRadius : "4px",
        borderColor : "#AFAFAF",
        backgroundColor : "white",
       
        width : "300px"
    }





    const updateForm = (value)=>{
        setForm({...form,
                id : value
            });
        
    }


    return(<VStack align="center" justifyContent="center" width="100%" spacing = {8}>
        <Header/>
        <VStack style={fieldStyle} spacing="3" p="2">
            <TextField title = "통합 계정" placeholder="username" setForm = {updateForm} />
            
            
        </VStack>
        <BtLogin onClick={skkuLogin}/>
    </VStack>)
}


const Header = ()=>{

    const url = "https://www.skku.edu/_res/skku/img/skku_s.png"



    return(<Box
        bgImage={`url('${url}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        height='200px'
        width = '200px'
        bgSize = 'cover'
      />)
}


const TextField = ({title,placeholder, setForm, onChange}) =>{

    
    const setValue = useCallback((value)=>{
        setForm(title,value);
    },[])

    return(<HStack width="100%" >
        <Text width = "25%" marginStart = "2" border="0px" fontSize = "sm">
            {title}
        </Text>
        <Input variant='unstyled' placeholder={placeholder} size='xl' onChange={(event)=>setValue(event.target.value)}/>
    </HStack>)
}

const BtLogin = ({onClick})=>{
    return(<Button colorScheme='teal' onClick={onClick}
    fontWeight='400'>
    메일 보내기
  </Button>)
}




export default SKKULoginPage;