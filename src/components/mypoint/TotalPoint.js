import { Text, HStack, Box, VStack, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo, { dispatchTotalBalance } from "../../remote/AccountInfo";
import {SKKUBLUE, SKKUBLUE_100, SKKUGREEN, SKKUGREEN_100, SKKUORANGE_100} from "../../colors";
import { useDispatch, useSelector } from "react-redux";
import {useCookies} from "react-cookie";
import {COOKIE_EMAIL} from "../../CookieConst";

const TEXT_TOTAL_TITLE = "총 보유 포인트";

function reducePointData(response, pointArr) {
  return pointArr.concat(
    response.data[0]._pointA,
    response.data[0]._pointB,
    response.data[0]._pointC,
    response.data[0]._pointD
  );
}

const TotalPoint = () => {
  // 모든 플랫폼의 포인트의 합을 보여주는 컴포넌트

  const [pointArr, setPointArr] = useState([]);
  const { account } = useWeb3React();

  const totalPoint = useSelector((state) => state.totalBalance.value);
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;
    dispatchTotalBalance(dispatch);
    return;
  }, []);

  return <TotalPointView>{totalPoint}</TotalPointView>;
};

const TotalPointView = ({ children }) => {
  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");
  const style = {
    justifyContent: "space-between",
    background: SKKUGREEN,
    //backgroundImage : `linear-gradient(#532DFB,${SKKUBLUE})`,
    width: isLessThan1195 ? "100%" : "96%",
    height: "204px",
    borderRadius: "6px",
  };

  return (
    <VStack p={5} m={3} style={style}>
      <TopText />
      <CountText sumPoint={children} />
    </VStack>
  );
};

const TopText = () => {

    const [emailCookie, setEmailCookie, removeEmailCookie] =
    useCookies(COOKIE_EMAIL);

  return (
    <HStack w="full" justify="space-between">
        <VStack justify="flex-start">
            <Text justify="flex-start" width = "100%" color="white" fontWeight="900" fontSize="3xl">
                {`${emailCookie.LOGIN_EMAIL.split('@')[0]}`} 학우님, 안녕하세요?
            </Text>
            <Text color={SKKUGREEN_100} fontWeight="600" fontSize="2xl">
                KingoCoin이 여러분의 자기계발에 항상 함께하겠습니다!
            </Text>
        </VStack>


      <Box />
    </HStack>
  );
};

const CountText = ({ sumPoint }) => {
  return (
    <HStack w="full" justify="space-between">
      <Box />
      <Text color="white" fontWeight="700" fontSize="5xl">
        {sumPoint} point
      </Text>
    </HStack>
  );
};

export default TotalPoint;
