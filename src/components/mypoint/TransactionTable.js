import kakaoTalk from "../../assets/kakaoTalk.png";
import { HStack, Text, VStack, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { Button, Link } from "@chakra-ui/react";
import { useState } from "react";


const Table = styled.table`
  width: 100%;
  table-layout : fixed;
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


    const [focus, setFocus] = useState(false);

    return(<tr
      onPointerEnter={()=>setFocus(true)} onPointerLeave = {()=>setFocus(false)}
      bgColor = {focus && "#bbbbee" }
    >
      <SourceView  width = {width + '%'} icon={kakaoTalk} text={"KakaoPay"}/>
      <TextView width = {width + '%'}title = "Date" content = {transData.date} focus = {focus}/>
      { type !== "from" && (<TextView width = {width + '%'} title="To" content = {transData.to} focus = {focus}/>)    }
      { type !== "to" && (<TextView width = {width + '%'} title="From" content = {transData.from} focus = {focus}/>)    }
      {/* <Td>{ipfs[i]}</Td> */}
      <TextView width = {width + '%'} title = "Amount" content = {transData.value} focus = {focus}/>
      <BtnHash width = {width + '%'} link = {Link} text = {transData.hash} focus = {focus}/>
    </tr>);
  }


  const TextView = ({title, content, focus}) =>{

    return(
      <Td >

    <Flex justifyContent="center">
      <VStack align = "start" width = "60%" justifyContent="start" >
        <Text fontSize = 'sm' color={focus ? "white" : "#cecece"}>{title}</Text>
        <Text fontSize='lg'

        >{content}</Text>
      </VStack>
      </Flex>
    </Td>
    )
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

  const BtnHash = ({link, text, focus}) =>{

    return(<Td>
      <Button colorScheme='blue' size="md" variant = {focus ? 'solid': 'outline'} as={link} isExternal>
        Open Hash
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