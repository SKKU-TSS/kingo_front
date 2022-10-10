import { Box, Image, Spacer, VStack, Link, Text} from "@chakra-ui/react";
import WalletConnect from "../components/login/WalletConnect";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import { Cookies } from "react-cookie"

function Login() {

    useEffect(()=>{
        let cookie = new Cookies()
        window.location.href = "/login"
        return ()=>{}
    },[])

    return (
        <VStack  width="100%" align="center" justify='center' >
            <Image
                m='10'
                width = "300px"
                height = "75px"
       
                src='https://login.skku.edu/resources/img/main_logo_kor.png'
            />

            <WalletConnect p='5'/> 
        
            <Link as={RouterLink} to="/login">
                <Text>
                    SKKU Login
                </Text>
            </Link>
        </VStack>
    

        
    );
}

export default Login;
