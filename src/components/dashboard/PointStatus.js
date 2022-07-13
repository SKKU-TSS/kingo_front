import { VStack, HStack, Text, useMediaQuery, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import { SKKUORNAGE } from "../../colors";

const TEXT_POINT_INFO = '포인트 현황';

const PointStatus = () => {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const [pointArr, setPointArr] = useState([]);
  const { account } = useWeb3React();

  useEffect(() => {
    let isSubscribed = true;

    getUserInfo(account,(response)=>{
        if (isSubscribed) {
          setPointArr(
            pointArr.concat(
              response.data[0]._pointA,
              response.data[0]._pointB,
              response.data[0]._pointC,
              response.data[0]._pointD
            )
          );
        }
      });
    return () => (isSubscribed = false);
  }, []);

  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");
  
  
  
  const style = {
    borderRadius : "15px",
    backgroundColor : "white",
    height:  "355px",
    width : isLessThan1195 ? "100%" : DASHBAORD_WIDTH
  }
  
  
  
  return (
    <VStack
      style = {style}      p={10}      align="flex-start"      m={3}    >
      <Balance/>
      <VStack spacing={10} w="full">
        
        <PointItem title = "온라인 명륜당" point = {pointArr[0]}/>
        <PointItem title = "킹고인과의 만남" point = {pointArr[1]}/>
        <PointItem title = "해오름제" point = {pointArr[2]}/>
        <PointItem title = "멘토링" point = {pointArr[3]}/>

      </VStack>
    </VStack>
  );
}

const Balance = () =>{

  return(<VStack spacing={0}>
    <Text fontSize = '2xl'>Balance</Text>
    <Box backgroundColor={SKKUORNAGE} borderRadius='4px' width='100%' height='4px'/>
  </VStack>)
}

const PointItem = ({title, point}) =>{

  const styleContainer = {
    width : "100%",
    justifyContent : "space-between"
  }

  return(<HStack style = {styleContainer}>
  <Text fontSize="lg">{title}</Text>
  <Text fontSize="lg">{`${point || 0}포인트`}</Text>
</HStack>)
}

export default PointStatus;