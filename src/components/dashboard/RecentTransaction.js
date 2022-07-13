import { VStack, HStack, Text, useMediaQuery, Flex, Box, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import getUserInfo from "../../remote/AccountInfo";
import { SKKUGREEN_100 } from "../../colors";
import { DASHBAORD_WIDTH } from "../../pages/DashBoard";

const TEXT_POINT_INFO = '포인트 현황';

const RecentTransaction= () => {
  // 플랫폼 별 포인트 보유량을 볼 수 있도록 한 컴포넌트
  const { account } = useWeb3React();

    let isSubscribed = true;

  
    
  const [items, setItems] = useState([
    {
      name : '온라인 명륜당 영상 시청',
      value : 1050,
      date : "2022. 07. 13"
    },
    {
      name : '온라인 명륜당 게시글 작성',
      value : 230,
      date : "2022. 07. 13"
    },
    {
      name : '실리콘벨리 졸업생 특강 참여',
      value : 5600,
      date : "2022. 07. 13"
    },
    {
      name : '토익 강의 이용권',
      value : -100,
      date : "2022. 07. 13"
    },
  ])
  const [isLessThan1195] = useMediaQuery("(max-width:1195px)");
  const style = {
    borderRadius : "15px",
    backgroundColor : "white",
    height:  "355px",
    width : isLessThan1195 ? "100%" : DASHBAORD_WIDTH
  }
  
  
  return (
  
        <VStack  style = {style} paddingTop={10} align="flex-start"   m={3}>

          <Text paddingLeft={10}
            fontSize = '24px'
          >Recent Transactions</Text>
      {
        items.map(item=>{
          return <TransItem name = {item.name} value = {item.value} date = {item.date}/>
        })
      }    
    </VStack>

    
  );
}


const TransItem = ({name, value, date}) =>{

  const [focused,setFocus] = useState(false)


  return(
    <VStack align = 'left' width = "100%" spacing={0} paddingLeft ={10} paddingRight = {10}
    bgColor = {focused && SKKUGREEN_100}
      onPointerEnter ={()=>setFocus(true)}
      onPointerLeave = {()=>setFocus(false)}
    >
      <Flex 
        
        >
          <Text fontSize="15px" lineHeight = "25px" fontFamily='noto-sans kr' >
            {name}
          </Text>
          <Spacer/>
          <Text  fontSize="15px" lineHeight = "25px" fontWeight="500" maxLine = {1}>
            {`${value}포인트`}
          </Text>

          
      </Flex>

      <Text fontSize="12px" lineHeight = "25px" color="#2B2B2B" opacity={0.4}>
        {date}
      </Text>
    </VStack>
  )
}

export default RecentTransaction;