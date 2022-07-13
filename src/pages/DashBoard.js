import {
    HStack,
    Text,
    VStack,
    Flex,
    Box,
    useMediaQuery,
  } from "@chakra-ui/react";
  import TotalPoint from "../components/mypoint/TotalPoint";
  import PointStatus from "../components/dashboard/PointStatus";
  import PointPieChart from "../components/dashboard/PointPieChart";
  import AccountInfo from "../components/dashboard/AccountInfo";
import RecentTransaction from "../components/dashboard/RecentTransaction";
  
  function DashBoard() {
    // 대시보드 페이지
   



    return (
        <FlexContainer>
          <TotalPoint />
          <RecentTransaction />
          <AccountInfo />
          <PointPieChart />
          <PointStatus />
          {/* <AdminPage /> */}
        </FlexContainer>
    );
  }


  const FlexContainer = ({children}) =>{

    const [isLessThan1070] = useMediaQuery("(max-width:1070px)");


    const outterStyle = {
        width : "full",
        height : "full",
        justify : "space-evenly",
        backgroundColor : "#E5E5E5"
    }

    const innerStyle = {
        flexGrow : "1",
        justify : "space-between",
        p : "5",
        minW : "350px",
        w : isLessThan1070 ? "full" : "60%"
    }


    return(
      <Flex wrap="wrap"
      style = {outterStyle}>
        <Flex
          wrap="wrap"
          style = {innerStyle}
        >
          {children}
        </Flex>
        </Flex>
    )
  }

  
  export default DashBoard;


const DASHBAORD_WIDTH = "47%"

  export {
     DASHBAORD_WIDTH
  }