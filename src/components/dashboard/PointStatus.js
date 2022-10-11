import { VStack, HStack, Text, useMediaQuery, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import { SKKUORANGE_100, SKKUORNAGE } from "../../colors";

const TEXT_POINT_INFO = "포인트 현황";

const PointStatus = () => {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const [pointArr, setPointArr] = useState([]);
  const { account } = useWeb3React();

  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");

  const style = {
    borderRadius: "15px",
    backgroundColor: "white",
    height: "355px",
    width: isLessThan1195 ? "100%" : DASHBAORD_WIDTH,
  };

  return (
    <VStack style={style} p={8} align="flex-start" m={3}>
      <Balance />
      <VStack w="full">
        <PointItem title="온라인 명륜당" point={pointArr[0]} />
        <PointItem title="킹고인과의 만남" point={pointArr[1]} />
        <PointItem title="해오름제" point={pointArr[2]} />
        <PointItem title="멘토링" point={pointArr[3]} />
      </VStack>
    </VStack>
  );
};

const Balance = () => {
  return (
    <VStack spacing={0} p={2}>
      <Text fontSize="2xl">Balance</Text>
      <Box
        backgroundColor={SKKUORNAGE}
        borderRadius="4px"
        width="100%"
        height="4px"
      />
    </VStack>
  );
};

const PointItem = ({ title, point }) => {
  const [focus, setFocus] = useState(false);

  const styleContainer = {
    width: "100%",
    justifyContent: "space-between",
    borderRadius: "10px",
    backgroundColor: focus && SKKUORANGE_100,
    height: "50px",
  };

  return (
    <HStack
      style={styleContainer}
      p={2}
      onPointerEnter={() => setFocus(true)}
      onPointerLeave={() => setFocus(false)}
    >
      <Text fontSize="lg">{title}</Text>
      <Text fontSize="lg">{`${point || 0}포인트`}</Text>
    </HStack>
  );
};

export default PointStatus;
