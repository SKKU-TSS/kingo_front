import kakaoTalk from "../../assets/kakaoTalk.png";
import { HStack, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import { Button, Link } from "@chakra-ui/react";


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
  margin-left: 10px;
`;

const Time = styled.td`
  color: #aeb4c4;
  text-align: center;
`;

const TransactionTable = ({type, transData}) => {
    
    return (
      <Table>
        <TransactionHead type = {type}/>
        <DisplayTable type = {type} transData = {transData}/>
      </Table>
    );
  };

const DisplayTable = ({type, transData}) =>{
  const displayedTable = [];
    for (let i = 0; i < transData.length; i++) {
      displayedTable.push(
          <SendItem transData={transData[i]} key={i} type = {type}/>
      );
    }
  return(<tbody>{displayedTable}</tbody>);
}

const SendItem = ({transData, type}) =>{

    const width = 100/ (type ? 5 : 6);

    return(<tr>
      <SourceView  width = {width + '%'} icon={kakaoTalk} text={"KakaoPay"}/>
      <Time width = {width + '%'}>{transData.date}</Time>
      { type !== "from" && (<Td width = {width + '%'}>{transData.to}</Td>)    }
      { type !== "to" && (<Td width = {width + '%'}>{transData.from}</Td>)    }
      {/* <Td>{ipfs[i]}</Td> */}
      <Td width = {width + '%'}>{transData.value}</Td>
      <BtnHash width = {width + '%'} link = {Link} text = {transData.hash}/>
    </tr>);
  }

  const SourceView = ({icon, text}) =>{

    return(
    <Td>
      <HStack justifyContent="center">
        <Icon src={icon} />
        <Text>{text}</Text>
      </HStack>
    </Td>);
  }

  const BtnHash = ({link, text}) =>{

    return(<Td>
      <Button size="xs" as={link} isExternal>
        {text}
      </Button>
    </Td>);
  }

  const TransactionHead = ({type}) =>{

    
    
    return(<thead>
      <tr>
        <Th>플랫폼</Th>
        <Th>시간</Th>
        {
            type !== "from" && (<Th>TO</Th>)
        }
        {
            type !== "to" && (<Th>FROM</Th>)
        }
        <Th>금액</Th>
        <Th>HASH</Th>
      </tr>
    </thead>)
  }

  export default TransactionTable;