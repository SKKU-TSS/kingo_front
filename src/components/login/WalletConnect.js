import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../connector";
import { Button, Text, VStack, Link } from "@chakra-ui/react";
import { SKKUBLUE, SKKUGREEN } from "../../colors";

const TEXT_WELCOME = "KingoKoin에 오신 것을 환영합니다.";
const TEXT_INTRODUCE = "서비스 이용을 위해 메타마스크 로그인을 해주세요.";
const TEXT_INSTALL_METAMASK = "메타마스크 설치하기";
const TEXT_CONNECT_WALLET = '지갑 연결하기';

function WalletConnect() {
  // metamask 로그인 페이지
  const { activate, active } = useWeb3React();
  console.log(active);


  // todo : Redux 도입 필요
  const onClick = () => {
    
    activate(injectedConnector); //로그인 코드

    window.location.href = '/dashboard'
  };

  return (
    <VStack w="full" align="center" justify="center">
      <VStack bg="white" p={10} borderRadius={20}>
        <LoginTitle/>
        <LoginSub/>
        <BtnInstall/>
        <BtnConnect onClick={onClick}/>
      </VStack>
    </VStack>
  );
}


const LoginTitle = () => {

  return(
    <Text fontSize="md">{TEXT_WELCOME}</Text>
  );
};

const LoginSub = () =>{
  return(
    <Text>{TEXT_INTRODUCE}</Text>
  );
};

const BtnInstall = () => {

  return (<Link color={SKKUBLUE} href="https://metamask.io/" isExternal>
  {TEXT_INSTALL_METAMASK}
</Link>);
};

const BtnConnect = ({onClick}) => {

  const style = {
    height : "40px",
    width : "200px",
    borderRadius : "20px",
    color : "white",
    fontSize : "14px",
    fontWeight : "bold"
  };


  return (<Button colorScheme='green' variant='solid' borderRadius="20px" style = {style}
    onClick = {onClick}
    >
  {TEXT_CONNECT_WALLET}
</Button>)
}


export default WalletConnect;