import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../connector";
import { Box, Text, VStack, Link } from "@chakra-ui/react";

const TEXT_WELCOME = "Kingo Chain에 오신 것을 환영합니다.";
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
  };

  return (
    <VStack w="full" h="100vh" align="center" justify="center">
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

  return (<Link color="blue" href="https://metamask.io/" isExternal>
  {TEXT_INSTALL_METAMASK}
</Link>);
};

const BtnConnect = ({onClick}) => {

  const style = {
    height : "40px",
    width : "200px",
    borderRadius : "20px",
    backgroundColor : "#4318FF",
    color : "white",
    fontSize : "14px",
    fontWeight : "bold"
  };


  return (<Box
    as="button"
    onClick={onClick}

    borderRadius={20}

    style = {style}
  >
    <Text>{TEXT_CONNECT_WALLET}</Text>
  </Box>)
}


export default WalletConnect;