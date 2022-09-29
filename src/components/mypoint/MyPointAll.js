//Point 현황에 드가는 메뉴
// 내 지갑 Address와 관련된 모든 내역을 보여준다.


import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
// import ipfsClient from "ipfs-http-client";
import getAllTransData from "../../remote/TransactionAll";
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
    await getAllTransData(account, (sendData) =>{
      // console.log(response.data[1]._from);
      bindReceiveData(sendData,setReceiveData,setIpfs)
    });
}

export default function MyTransactionsAll() {
  // 나와 관련된 모든 트랜잭션을 볼 수 있는 컴포넌트


  const [ipfs, setIpfs] = useState([]);

  const [transData, setTransData] = useState([]);

  const { account } = useWeb3React();

  const config = {
    rpcURL: "https://api/baobab.klaytn.net:8651",
  };

  const naver = "https://www.naver.com/";

  useEffect(() => {
    bindData(account, setTransData, setIpfs);
  }, []);

  return (<TransactionTable transData={transData}/>);
}