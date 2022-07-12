import { Text, HStack, Box, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { SKKUBLUE } from "../../colors";


const TEXT_TOTAL_TITLE = "총 보유 포인트"





function reducePointData(response, pointArr)
{
  return pointArr.concat(
    response.data[0]._pointA,
    response.data[0]._pointB,
    response.data[0]._pointC,
    response.data[0]._pointD
  );
};




const TotalPoint = () => {
  // 모든 플랫폼의 포인트의 합을 보여주는 컴포넌트

  const [pointArr, setPointArr] = useState([]);
  const { account } = useWeb3React();

  useEffect(() => {
    let isSubscribed = true;
    getUserInfo(account,(response) =>{
      if (isSubscribed) {
        setPointArr(
          reducePointData(response,pointArr));
      }
    })
    return () => (isSubscribed = false);
  }, []);

  const sumTotalPoint = () => {
    let sumPoint = 0;
    for (let i = 0; i < pointArr.length; i++) {
      sumPoint += pointArr[i];
    }
    return sumPoint;
  };

  const sumPoint = sumTotalPoint();

  
  
  return (
    <TotalPointView>{sumPoint}</TotalPointView>
  );
}

const TotalPointView = ({children}) =>{
  const style = {
    justifyContent :"space-between",
    backgroundImage : `linear-gradient(#532DFB,${SKKUBLUE})`,
    width : "100%",
    height : "204px",
    borderRadius : "15px"
  }


  return(
    <VStack
    p={5}
    m={3}
    style = {style}
  >
    <TopText/>
    <CountText sumPoint={children}/>
  </VStack>
  );
}

const TopText = () => {
  return(
    <HStack w="full" justify="space-between">
        <Text color="white" fontWeight="700" fontSize="3xl">
         {TEXT_TOTAL_TITLE}
        </Text>
        <Box />
      </HStack>
  );
};

const CountText = ({sumPoint}) =>{
  return(<HStack w="full" justify="space-between">
        <Box />
        <Text color="white" fontWeight="700" fontSize="5xl">
          {sumPoint} point
        </Text>
      </HStack>);
}

export default TotalPoint;