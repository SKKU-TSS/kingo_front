//DashBoard page에 사용됨
//내 지갑 주소와 클릭시 해당 주소의 클레이튼 스코프로 연결시켜주는 부분
import {
  VStack,
  Box,
  Flex,
  Text,
  Button,
  Link,
  useMediaQuery,
  Tooltip,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { m } from "framer-motion";
import { useCookies, Cookies } from "react-cookie";
import { COOKIE_EMAIL, COOKIE_TOKEN } from "../../CookieConst";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import {SKKUGREEN_100} from "../../colors";

const TEXT_MY_ACCOUNT = "이메일 주소";

function AccountInfo() {
  // klaytn 사이트에서 내 계정 정보를 볼 수 있도록 하는 컴포넌트
  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");
  const { account } = useWeb3React();

  const accountSting = account?.substring(2, 6);

  const parseAccountForColor = "#" + account?.substring(2, 8);

  const [username, setUsername, eraseUsername] = useCookies(COOKIE_EMAIL);

  //klaythn scope 에서 내 계정에 관한 리스트

  console.log(parseAccountForColor);

  const styleVstack = {
    borderRadius: "5px",
    width: isLessThan1195 ? "100%" : DASHBAORD_WIDTH,
    height: "355px",
    spacing: "5",
    backgroundColor: "white",
  };

  const styleFlex = {
    width: "110px",
    height: "110px",
    align: "center",
    justifyContent: "center",
    borderRadius: "100px",
    fontFamily: "'Pacifico', cursive",
    fontSize: "3xl",
    backgroundColor: parseAccountForColor,
  };

  return (
    <VStack p={10} m={3} spacing={5} style={styleVstack} justifyContent="flex-start" align="flex-start">
        <AccountAppbar/>
      {/*<Flex align="center" fontSize="3xl" style={styleFlex}>
        {accountSting}
  </Flex>*/}
      <MyAccountAddr width = "100%" account={username.LOGIN_EMAIL} />
      {account && <BtnKlaytn account={account} />}
    </VStack>
  );
}

const AccountAppbar = ()=>{
    return (
            <VStack spacing={0} p={2}>
                <Text fontSize="2xl">Account</Text>
                <Box
                    backgroundColor={SKKUGREEN_100}
                    borderRadius="4px"
                    width="100%"
                    height="4px"
                />
            </VStack>
            );
}

const MyAccountAddr = ({ account }) => {
  const logOut = () => {
    const cookie = new Cookies();
    cookie.remove(COOKIE_TOKEN);
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };

  //const parseAccount =
  //account && account?.substring(0, 10) + "..." + account?.substring(32, 40);
  console.log("어카운트");
  console.log(account);
  return (
    <VStack width = "100%" align="center">
      <Text fontSize="lg">{TEXT_MY_ACCOUNT}</Text>
      <Text>{`${account}`.replace("%40", "@")}</Text>
      <Button size="md" onClick={() => logOut()}>
        로그아웃
      </Button>
    </VStack>
  );
};

const BtnKlaytn = ({ account }) => {
  const etherscanAccount = `https://baobab.scope.klaytn.com/account/${account}?tabId=txList`;
  return (
    <Button as={Link} isExternal href={etherscanAccount}>
      View on klaytn scope
    </Button>
  );
};

export default AccountInfo;
