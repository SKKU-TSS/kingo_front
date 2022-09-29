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



function bindReceiveData(sendList, setSendData, setIpfs){
  
  const urlList = [];

  setSendData(sendList);

  for (let i = 0; i < sendList.length; i++) {
    axios
      .get(`http://localhost:5000/api/result/${sendList[i].hash}`)
      .then((res) => urlList.push(res.data));
  }
  setIpfs(urlList);
}

async function bindData(account, setReceiveData, setIpfs)
{
  return
    await getRecieveData(account, (sendData) =>{
      // console.log(response.data[1]._from);
      bindReceiveData(sendData,setReceiveData,setIpfs)
    });
}

export default function MyTransactionsReceive() {
  // 내가 포인트를 받는 트랜잭션을 볼 수 있도록 한 컴포넌트
  const [ipfs, setIpfs] = useState([]);

  const [receiveData, setReceiveData] = useState([]);

  const { account } = useWeb3React();

  useEffect(() => {
    bindData(account,setReceiveData,setIpfs);
  }, []);
  
  return (<TransactionTable type="from" transData={receiveData}/> );
}