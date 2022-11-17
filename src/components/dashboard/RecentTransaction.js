import {
  VStack,
  HStack,
  Text,
  useMediaQuery,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { SKKUGREEN, SKKUGREEN_100 } from "../../colors";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import { getRecentData } from "../../remote/PendingTransaction";
import { useDispatch, useSelector } from "react-redux";
import { actionDashboardItem } from "../../redux/dashboardTable/dashbaordTable";

function dateVisible(date) {
  return `${date.substr(0, 4)}년${date.substr(5, 2)}월${date.substr(
    8,
    2
  )}일 ${date.substr(11, 5)}`;
}

const TEXT_POINT_INFO = "포인트 현황";

const RecentTransaction = () => {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const { account } = useWeb3React();
  const dispatch = useDispatch();
  useEffect(() => {
    actionDashboardItem(dispatch);
    return () => {};
  }, []);

  const { recentItem } = useSelector((state) => state.recentDashboard);

  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");
  const style = {
    borderRadius: "5px",
    backgroundColor: "white",
    height: "355px",
    width: isLessThan1195 ? "100%" : DASHBAORD_WIDTH,
  };

  return (
    <VStack style={style} p={8} align="flex-start" m={3} spacing={0}>
      <VStack p={2}>
        <Text fontSize="24px">Recent Transactions</Text>
        <Box
          backgroundColor={SKKUGREEN}
          borderRadius="4px"
          width="100%"
          height="4px"
        />
      </VStack>

      {recentItem.length > 0 ? (
        recentItem.slice(0, 4).map((item) => {
          return (
            <TransItem
              name={item.description}
              value={item.value}
              date={dateVisible(item.date)}
            />
          );
        })
      ) : (
        <NullReport />
      )}
    </VStack>
  );
};

const NullReport = () => {
  return (
    <Flex width="full" height="full" align="center" justify="space-evenly">
      <Text fontSize="xl">포인트 내역이 없습니다.</Text>
    </Flex>
  );
};

const TransItem = ({ name, value, date }) => {
  const [focused, setFocus] = useState(false);

  return (
    <VStack
      align="left"
      width="100%"
      spacing={0}
      p={2}
      paddingTop={1}
      paddingBottom={1}
      bgColor={focused && SKKUGREEN_100}
      borderRadius="10px"
      onPointerEnter={() => setFocus(true)}
      onPointerLeave={() => setFocus(false)}
    >
      <Flex>
        <Text fontSize="15px" lineHeight="25px" fontFamily="noto-sans kr" m={0}>
          {name}
        </Text>
        <Spacer />
        <Text fontSize="15px" lineHeight="25px" fontWeight="500" maxLine={1}>
          {`${value}포인트`}
        </Text>
      </Flex>

      <Text fontSize="12px" lineHeight="25px" color="#2B2B2B" opacity={0.4}>
        {date}
      </Text>
    </VStack>
  );
};

export default RecentTransaction;
