// 모든 페이지에 들어가는 부분으로 왼쪽에 있는 메뉴바 구성
import { useState } from "react";
import { VStack, HStack, Img, Text, Link } from "@chakra-ui/react";
import activeDashboard from "../../assets/activeDashboard.svg";
import dashboard from "../../assets/dashboard.svg";
import transactions from "../../assets/transactions.svg";
import activeTransactions from "../../assets/activeTransactions.svg";
import { Link as RouterLink } from "react-router-dom";
import { SKKUBLUE } from "../../colors";


const INDEX_DASHBOARD = 0;
const INDEX_POINT = 1;
const INDEX_TRANSACTION = 2;
const INDEX_ADMIN = 3;

function getIndex(state){
  const [index, setIndex] = state;
  const path = window.location.pathname.split("/").pop();

  if (path === "/dashboard") {
    index !== INDEX_DASHBOARD && setIndex(INDEX_DASHBOARD);
  } else if (path === "my-transaction") {
    index !== INDEX_POINT && setIndex(INDEX_POINT);
  } else if (path === "check-transactions") {
    index !== INDEX_TRANSACTION  && setIndex(INDEX_TRANSACTION );
  }
  return [index, setIndex];
}


function NavBar() {
  // 좌측 navbar 구현

  const [index, setIndex] = getIndex(useState(0));
  

  return (
    <VStack spacing={8} p={9} bg="#ffffff" minW="200px">
      <NavTitle/>
      <VStack h="full" justify="space-between" spacing={5}>
        <VStack>
          <BtnNavigation indexState={[index,setIndex]} btnIndex={INDEX_DASHBOARD} nav="/dashboard" icon={[dashboard, activeDashboard]}>대시보드</BtnNavigation>
          <BtnNavigation indexState={[index,setIndex]} btnIndex={INDEX_POINT} nav="/my-point" icon={[transactions, activeTransactions]}>Point 현황</BtnNavigation>
          {/**  <BtnNavigation indexState={[index,setIndex]} btnIndex={INDEX_ADMIN} nav="/admin-page">관리자 페이지</BtnNavigation> */}
        </VStack>
        <BtnNavigation indexState={[index,setIndex]} btnIndex={INDEX_TRANSACTION} nav="/check-transactions" >Transaction</BtnNavigation>
      </VStack>
    </VStack>
  );
}
const NavTitle = () =>{

  return(<HStack>
    <Text fontSize="xl" fontWeight="900" color={SKKUBLUE}>
      KingoChain
    </Text>
  </HStack>);
}


const BtnNavigation = ({indexState, btnIndex, nav, icon, children}) =>{
  const [index,setIndex] = indexState;
  const [_icon, _activeIcon] = icon || [undefined, undefined];
  const styleHstack = {
    width : "130px",
    backgroundColor : index === btnIndex ? SKKUBLUE : "#ffffff",
    borderRadius : "5px"
  };
  return(<Link onClick={() => setIndex(btnIndex)} as={RouterLink} to={nav}>
  <HStack    p={3}    spacing={3} style={styleHstack}>
    {icon && 
      (<Img src={index === btnIndex ? _activeIcon : _icon} />)
    }
    <Text
      fontSize="sm"
      fontWeight="bold"
      color={index === btnIndex ? "#ffffff" : "#A3AED0"}
    >
      {children}
    </Text>
  </HStack>
</Link>);
}


export default NavBar;