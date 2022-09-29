//Point 현황에 드가는 메뉴
// 내 지갑 Address와 관련된 내역 중 내가 Point를 사용한 부분만을 보여준다.
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";

import { TabsDescendantsProvider } from "@chakra-ui/react";
import getSendData from "../../remote/TransactionSend";
import TransactionTable from "./TransactionTable";





function bindSendData(sendList, setSendData, setIpfs){
  
  const urlList = [];

  setSendData(sendList);


  for (let i = 0; i < sendList.length; i++) {
    axios
      .get(`http://localhost:5000/api/result/${sendList[i].hash}`)
      .then((res) => urlList.push(res.data));
  }
  setIpfs(urlList);
}

async function bindData(account, setSendData, setIpfs)
{
  return
    await getSendData(account, (sendData) =>{
      // console.log(response.data[1]._from);
      bindSendData(sendData,setSendData,setIpfs)
    });
}

 const MyTransactionsSend = () => {
  // 내가 포인트를 사용하는 트랜잭션을 볼 수 있도록한 컴포넌트
  const [ipfs, setIpfs] = useState([]);

  const [sendData, setSendData] = useState([]);

  const { account } = useWeb3React();

  const config = {
    rpcURL: "https://api/baobab.klaytn.net:8651",
  };

  const naver = "https://www.naver.com/";





  useEffect(() => {
    // console.log(caver);
    bindData(account,setSendData,setIpfs);
   
   setSendData([{
    from : "2020",
    to : "홍길동",
    type : "",
    value : "1,842",
    date : "2021. 07. 12",
    hash : "hashid",
   }])
   
  }, []);


  return (<TransactionTable type = "to" transData={sendData}/>);


}

export default MyTransactionsSend;