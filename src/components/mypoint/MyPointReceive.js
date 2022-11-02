//Point 현황에 드가는 메뉴
// 내 지갑 Address와 관련된 내역 중 내가 Point를 획득한 부분만을 보여준다.
import styled from "styled-components";
import kakaoTalk from "../../assets/kakaoTalk.png";
import { HStack, Text } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import { Button, Link } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import getRecieveData from "../../remote/TransactionReceive";
import TransactionTable from "./TransactionTable";



async function bindData(account, setReceiveData)
{
    await getRecieveData(account, (sendData) =>{
      setReceiveData(sendData.body)
    });
}

export default function MyTransactionsReceive() {
  // 내가 포인트를 받는 트랜잭션을 볼 수 있도록 한 컴포넌트



  const [receiveData, setReceiveData] = useState([

  ]);


  const { account } = useWeb3React();

  useEffect(() => {
      bindData(account,setReceiveData);
  }, []);
  
  return (<TransactionTable type="from" transData={receiveData}/> );
}