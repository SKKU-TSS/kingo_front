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

  const [receiveData, setReceiveData] = useState([
      {
          from : "온라인 명륜당",
          to : "myungrun@skku.edu",
          type : "",
          value : "100",
          date : "2021. 07. 12",
          hash : "hashid",
      },
      {
          from : "온라인 멘토링",
          to : "myungrun@skku.edu",
          type : "",
          value : "100",
          date : "2021. 09. 22",
          hash : "hashid",
      },
      {
          from : "킹고인과의 만남",
          to : "myungrun@skku.edu",
          type : "",
          value : "100",
          date : "2022. 5. 6",
          hash : "hashid",
      },
      {
          from : "온라인 멘토링",
          to : "myungrun@skku.edu",
          type : "",
          value : "150",
          date : "2022. 07. 12",
          hash : "hashid",
      },
      {
          from : "성균색 에세이",
          to : "myungrun@skku.edu",
          type : "",
          value : "100",
          date : "2022. 07. 21",
          hash : "hashid",
      },
      
  ]);


  const { account } = useWeb3React();

  useEffect(() => {
    bindData(account,setReceiveData,setIpfs);
  }, []);
  
  return (<TransactionTable type="from" transData={receiveData}/> );
}