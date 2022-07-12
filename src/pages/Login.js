import { Box, Image, Spacer, VStack } from "@chakra-ui/react";
import WalletConnect from "../components/login/WalletConnect";

function Login() {
    return (
        <VStack  width="100%" align="center" justify='center' >
            <Image
                m='10'
                width = "300px"
                height = "75px"
       
                src='https://login.skku.edu/resources/img/main_logo_kor.png'
            />

            <WalletConnect p='5'/> 
        </VStack>
    
    );
}

export default Login;
