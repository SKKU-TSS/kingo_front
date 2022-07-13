import { VStack, HStack, Text, useMediaQuery, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import { SKKUBLUE, SKKUBLUE_100 } from "../../colors";

const TEXT_POINT_INFO = 'Pie Chart';


function PointStatus() {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const [pointArr, setPointArr] = useState([]);
  const { account } = useWeb3React();

  useEffect(() => {
    let isSubscribed = true;
    getUserInfo(account, (response) =>{
        if (isSubscribed) {
          setPointArr(
            [].concat(
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
      style = {style}      p={8}      align="flex-start"      m={3}    >
       <VStack spacing = {0} p={2}>
            <Text 
              fontSize = '24px'
            >{TEXT_POINT_INFO}</Text>
            <Box backgroundColor={SKKUBLUE} borderRadius='4px' width='100%' height='4px'/>
          </VStack>
      <VStack  w="full">
        <PointItem title = "Service A" point = {pointArr[0]}/>
        <PointItem title = "Service B" point = {pointArr[1]}/>
        <PointItem title = "Service C" point = {pointArr[2]}/>
        <PointItem title = "Service D" point = {pointArr[3]}/>
      </VStack>
    </VStack>
  );
}

const PointItem = ({title, point}) =>{

  const [focus, setFocus] = useState(false)


  return(<HStack w="full" justify="space-between"
  height = '50px'
  borderRadius = '10px'
  p = {2}
  bgColor = {focus && SKKUBLUE_100}
  onPointerEnter = {()=>setFocus(true)}
  onPointerLeave = {()=>setFocus(false)}
  >
  <Text fontSize="lg">{title}</Text>
  <Text fontSize="lg">{point}</Text>
</HStack>);
}

export default PointStatus;