import { HStack, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import kakaoTalk from "../../assets/kakaoTalk.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Link } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import getHash from "../../remote/GetHash";
import getHashResult from "../../remote/GetHashResult";
const Table = styled.table`
  width: 100%;
`;

const Td = styled.td`
  text-align: center;
  padding: 5px;
`;

const Th = styled.th`
  font-weight: 800;
  color: #4318ff;
  text-align: center;
  border-bottom: 2px solid #4318ff;
`;

const Icon = styled.img`
  src: ${(props) => props.src};
  width: 20px;
  alt: "kakao";
`;

const Time = styled.td`
  color: #aeb4c4;
  text-align: center;
`;

async function extractUrlList(ret, setHashUrl){
  let urlList = [];
  for (let i = 0; i < ret.length; i++) {
    await getHashResult(ret[i].hash,(res)=>{
      urlList.push(res.data)
    });
  }
  console.log(urlList);
  setHashUrl(urlList);
}

const CheckTransactions = () => {
  // 나의 트랜잭션들이 속한 _hash, _hashreceipt, ipfsurl를 확인할 수 있도록 한 컴포넌트
  // ipfs상에 올라간 tranasaction들을 볼 수 있음.
  const [hashUrl, setHashUrl] = useState([]);
  const { account } = useWeb3React();
  const [value, setValue] = useState([]);

  useEffect(() => {
    getHash(account,(ret) => {
      setValue(ret);
      extractUrlList(ret,setHashUrl);
    });
    
  }, []);

  return (<Table>
      <TransactionHead/>
      <TransactionList value = {value} hashUrl = {hashUrl}/>
      </Table>);

}

export default CheckTransactions;

const TransactionHead = () =>{

  return(<thead>
    <tr>
      <Th>id</Th>
      <Th>HASH</Th>
      <Th>RECEIPT</Th>
      <Th> IPFS HASH URL </Th>
    </tr>
  </thead>);
}

const TransactionList = ({value, hashUrl}) =>{

  const result = [];

    for (let i = 0; i < value.length; i++) {
      console.log(value.length);
      result.push(
        <TransactionItem
            value = {value[i]} hashUrl = {hashUrl[i]}
        />
      );
    }
    return(<tbody>{result}</tbody>);
}

const TransactionItem = ({value, hashUrl}) =>{


  return(<tr>
    <ItemIndex index = {value.index}/>
    <ItemHash hash = {value.hash}/>
    <ItemReceipt receipt = {value.receipt}/>
    <ItemHashUrl hashUrl={hashUrl}/>
  </tr>);
};

const ItemIndex = ({index}) =>{

  return(<Td>
    <HStack justifyContent="center">
      <Text>{index}</Text>
    </HStack>
  </Td>);
};

const ItemHash = ({hash}) =>
{
  return(<Td>{hash}</Td>);
};

const ItemReceipt = ({receipt}) =>{
  const getUrl = (receipt) => {
    return `https://baobab.scope.klaytn.com/tx/${receipt}?tabId=internalTx`;
  };

  return(<Td>
    <Button size="xs" as={Link} isExternal href={getUrl(receipt)}>
      {receipt}
    </Button>
  </Td>);
};

const ItemHashUrl = ({hashUrl}) =>{
  return(<Td>
    <Button size="xs" as={Link} isExternal href={hashUrl}>
      {hashUrl}
    </Button>
  </Td>);
};