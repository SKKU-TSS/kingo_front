import { Text, HStack, Box, VStack, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo, { dispatchTotalBalance } from "../../remote/AccountInfo";
import { SKKUBLUE, SKKUGREEN } from "../../colors";
import { useDispatch, useSelector } from "react-redux";

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
    borderRadius: "15px",
  };

  return (
    <VStack p={5} m={3} style={style}>
      <TopText />
      <CountText sumPoint={children} />
    </VStack>
  );
};

const TopText = () => {
  return (
    <HStack w="full" justify="space-between">
      <Text color="white" fontWeight="700" fontSize="3xl">
        {TEXT_TOTAL_TITLE}
      </Text>
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
