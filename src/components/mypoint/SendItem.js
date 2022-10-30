import kakaoTalk from "../../assets/kakaoTalk.png";
import { HStack, Text, VStack, Flex } from "@chakra-ui/layout";
import { Button, Link } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { SKKUBLUE, SKKUBLUE_100, SKKUORANGE_100 } from "../../colors";




const Td = styled.td`
  text-align: center;
  padding: 5px;
`;
const Icon = styled.img`
  src: ${(props) => props.src};
  width: 20px;
  margin-left: 10px;
`;


const SendItem = ({transData, type}) =>{

    const width = 100/ (type ? 5 : 6);


    const [focus, setFocus] = useState(false);

    return(<tr
      onPointerEnter={()=>setFocus(true)} onPointerLeave = {()=>setFocus(false)}
      bgColor = {focus &&SKKUBLUE_100 }
    >
      <SourceView  width = {width + '%'} icon={kakaoTalk} text={"Klaytn"}/>
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
        <Text fontSize = 'sm' fontFamily='Poppins' color={focus ? "white" : "#cecece"}>{title}</Text>
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
      <Button colorScheme='green' size="md" variant = {focus ? 'solid': 'outline'} as={link} isExternal>
        Open Hash
      </Button>
    </Td>);
  }

  export default SendItem;