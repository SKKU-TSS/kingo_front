//Point 현황에 드가는 메뉴
// 내 지갑 Address와 관련된 모든 내역을 보여준다.


import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
// import ipfsClient from "ipfs-http-client";
import getAllTransData from "../../remote/TransactionAll";
import TransactionTable from "./TransactionTable";

async function bindData(account, setReceiveData)
{

    await getAllTransData(account, (sendData) =>{
      setReceiveData(sendData.body)
    });
}

export default function MyTransactionsAll() {
  // 나와 관련된 모든 트랜잭션을 볼 수 있는 컴포넌트
  const [transData, setTransData] = useState([



  ]);

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