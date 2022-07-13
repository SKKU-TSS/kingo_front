import { Flex, HStack, Text, VStack, Box } from "@chakra-ui/layout";
import LatestTransactions from "../components/transaction/CheckTransactions";
import { useState } from "react";
import Clock from "../components/transaction/Clock";
import { SKKUBLUE } from "../colors";


const TEXT_TITLE = 'Transaction 현황';
function Transaction() {
  // 내 트랜잭션들이 ipfs 에 올라갔는지 확인할 수 있는 페이지
  const [modalOn, setModalOn] = useState(false);

  const onOpenModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <Flex m={10} flexDirection="column" w="full">
      <ViewTitle/>
      {/* graph */}
        <LastBlock/>
             
      <TransactionView onOpenModal={onOpenModal} modalOn={modalOn}/>
    </Flex>
  );
}

const ViewTitle = () =>{
  return(<Text fontSize="3xl" fontWeight="700">
  {TEXT_TITLE}
</Text>)
}

const TransactionView = ({onOpenModal, modalOn})=>{

  return(<VStack
    w="full"
    backgroundColor="white"
    borderRadius="5px"
    p={5}
    marginTop={5}
  >
    <LastTransactionHead onOpenModal={onOpenModal}/>
    {modalOn ? <LatestTransactions /> : ""}
    <LatestTransactions />
    <TimerNext/>
  </VStack>);
}

const LastTransactionHead = ({onOpenModal}) =>{
  return(<HStack justifyContent="space-between" w="full">
  <Text color={SKKUBLUE} fontWeight={700} fontSize="lg">
    Latest Transaction
  </Text>
  <BtnMore onClick={onOpenModal}/>
</HStack>);
}

const TimerNext = () => {

  const style = {
    width : "50%",
    backgroundColor : "white",
    borderRadius : "5px"
  }

  return(<VStack style = {style} p={5} marginTop={5}  >
    <TimerTitle/>
    <TimerField/>
  </VStack>);
}

const TimerTitle = () =>{
  return(
    <HStack justifyContent="center" w="full">
      <Text color={SKKUBLUE} fontWeight={700} fontSize="2xl">
        다음 Transaction 까지
      </Text>
    </HStack>
  );
}

const TimerField = () =>{
  return(<HStack justifyContent="center" w="full">
  <Text color={SKKUBLUE} fontWeight={700} fontSize="9xl">
    <Clock />
  </Text>
</HStack>);
}
const BtnMore = ({onClick}) =>{

  return(<Box
    as="button"
    backgroundColor={SKKUBLUE}
    color="white"
    borderRadius="3px"
    width="60px"
    fontWeight="bold"
    onClick={onClick}
  >
    + More
    
  </Box>)
}

const LastBlock = () =>{

  return(<VStack
    w="full"
    backgroundColor="white"
    borderRadius="5px"
    p={5}
    marginTop={5}
>
    <HStack justifyContent="space-between" w="full">
        <Text color={SKKUBLUE} fontWeight={700} fontSize="lg">
            Latest Blocks
        </Text>
        <BtnMore/>
    </HStack>
    {/*<LatestBlock />*/}
</VStack>)
}

export default Transaction;