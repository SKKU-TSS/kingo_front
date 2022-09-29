import { HStack, Input, VStack, Text, Button, Box, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { actionSkkuLogin } from "../redux/skkusign/action"
import { connect, useDispatch } from 'react-redux'
import { useCookies } from "react-cookie"
import { COOKIE_EMAIL } from "../CookieConst"
import axios from "axios"
import BACKEND_URL from "../ServerConst"
import skkuLogin from "../remote/SkkuLogin"



const SKKULoginPage = () =>{

    const dispatch = useDispatch();

    const [form, setForm] = useState({id:"", pw : ""})

    const login = ()=>{
        skkuLogin(
            form.id,
            (response)=>{
                alert("메일을 전송했습니다.")
            },
            (error)=>{
                alert("메일 전송에 실패했습니다.")

            }

        )

        //dispatch(actionSkkuLogin(form.id));
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
        //setEmailCookie(COOKIE_EMAIL , value);
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
        <BtLogin onClick={login}/>
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