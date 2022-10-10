import { VStack, HStack, Text, useMediaQuery, Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";
import { SKKUBLUE, SKKUBLUE_100 } from "../../colors";
import { approvePendingData, getPendingData } from "../../remote/PendingTransaction";
import { actionDashboardItem, DASHBOARD_ITEM } from "../../redux/dashboardTable/dashbaordTable";
import { useDispatch } from "react-redux";

const TEXT_POINT_INFO = 'Pending Transaction';



function dateVisible(date){
    
  return `${date.substr(0,4)}년${date.substr(5,2)}월${date.substr(8,2)}일 ${date.substr(11,5)}`
}


function PointStatus() {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const [pointArr, setPointArr] = useState([
  
]);
  const { account } = useWeb3React();

  const getPendingList = ()=>{
    getPendingData(
      (response) =>{
        console.log(response.result)
        setPointArr(response.result)
        
      },
      (error) =>{
        

      }
    )
  }

  const dispatch = useDispatch()

  useEffect(() => {

    
    let isSubscribed = true;
    getPendingList()
    return () => (isSubscribed = false);
  }, []);

  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");

  const onClickApprove = (id)=>{
    console.log(`Approve Transaction of ${id}`)

    approvePendingData(id,(response)=>{
      getPendingList()
      dispatch(actionDashboardItem())
    },(error)=>{

    })
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
      <VStack w="full">
        {
          
          pointArr.map(element => {
            return <PointItem id = {element.uuid} title = {element.description} point = {element.value} date = {dateVisible(element.date)} onClickApprove={onClickApprove}/>
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