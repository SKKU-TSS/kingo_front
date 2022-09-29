import { VStack, HStack, Text, useMediaQuery, Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import { SKKUBLUE, SKKUBLUE_100 } from "../../colors";

const TEXT_POINT_INFO = 'Pending Transaction';


function PointStatus() {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const [pointArr, setPointArr] = useState([{
    id : "1234",
    title : "service",
    point : 100,
    date : "2022.07.14"

  },{
    id : "1227",
    title : "service",
    point : 100,
    date : "2022.07.14"
  },{
    id : "3455",
    title : "service",
    point : 100,
    date : "2022.07.14"

  },{
    id : "2216",
    title : "service",
    point : 100,
    date : "2022.07.14"

  }]);
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

  const onClickApprove = (id)=>{
    console.log(`Approve Transaction of ${id}`)
  }


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
      {
        pointArr.map(element => {
          return <PointItem id = {element.id} title = {element.title} point = {element.point} date = {element.date} onClickApprove={onClickApprove}/>
        })
      }

      </VStack>
    </VStack>
  );
}

const PointItem = ({id, title, point, date, onClickApprove}) =>{

  const [focus, setFocus] = useState(false)


  return(<HStack w="full" justify="space-between"
  height = '50px'
  borderRadius = '10px'
  p = {2}
  bgColor = {focus && SKKUBLUE_100}
  onPointerEnter = {()=>setFocus(true)}
  onPointerLeave = {()=>setFocus(false)}
  >
  
   <VStack align = 'left' width = "100%" spacing={0} p = {2} paddingTop = {1} paddingBottom = {1}
    borderRadius ="10px"
      onPointerEnter ={()=>setFocus(true)}
      onPointerLeave = {()=>setFocus(false)}
    >
      <Flex 
        
        >
          <Text fontSize="15px" lineHeight = "25px" fontFamily='noto-sans kr' m={0}>
            {title}
          </Text>
          <Spacer/>
          <Text  fontSize="15px" lineHeight = "25px" fontWeight="500" maxLine = {1}>
            {`${point}포인트`}
          </Text>

          
      </Flex>
      <Flex>
      <Text fontSize="12px" lineHeight = "25px" color="#2B2B2B" opacity={0.4}>
        {date}
      </Text>
      <Spacer/>
      <Button
        size="xs"
        variant="outline"
        onClick = {()=>onClickApprove(id)}
      >승인</Button>
      </Flex>
      
    </VStack>
    
</HStack>);
}




export default PointStatus;