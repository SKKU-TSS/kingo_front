import { HStack, Input, VStack, Text, Button, Box, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { actionSkkuLogin } from "../redux/skkusign/action"
import { connect, useDispatch } from 'react-redux'
import { useCookies } from "react-cookie"
import { COOKIE_EMAIL } from "../CookieConst"



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


    const [emailCookie, setEmailCookie, removeEmailCookie] = useCookies(COOKIE_EMAIL);

    const updateForm = (title, value)=>{
        setEmailCookie(COOKIE_EMAIL , value);
        setSavedEmail(value);
        setForm({...form,
                id : value
            });
        
    }

    const [savedEmail, setSavedEmail] = useState(null);

    useEffect(()=>{
        
        if(emailCookie !== undefined)
        {
            setSavedEmail(emailCookie.LOGIN_EMAIL);
        }

    },[]);
    
    //if(emailCookie !== undefined)
    //    savedText = emailCookie.LOGIN_EMAIL

    return(<VStack align="center" justifyContent="center" width="100%" spacing = {8}>
        <Header/>
        <TextField title = "성균인 계정" placeholder="user@skku.edu" savedText = {savedEmail} setForm = {updateForm} width = "300px" />
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


const TextField = ({title,placeholder, savedText, setForm, onChange}) =>{

    const [textValue, setTextValue] = useState(null)

    useEffect(()=>{
        setTextValue(savedText);
    });


    
    const setValue = useCallback((value)=>{
        setForm(title,value);
    },[])

    return(
    
    <InputGroup width = '300px' size='sm'>
        <InputLeftAddon children = {title}/>
        <Input value={textValue} placeholder={placeholder} size='xl' background = 'white' onChange={(event)=>
            {
                setTextValue(event.target.value);
            setValue(event.target.value);
            }
            }/>
    </InputGroup>
    )
}

const BtLogin = ({onClick})=>{
    return(<Button colorScheme='teal' onClick={onClick}
    fontWeight='400'>
    메일 보내기
  </Button>)
}




export default SKKULoginPage;