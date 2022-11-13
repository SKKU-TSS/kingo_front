import kakaoTalk from "../../assets/kakaoTalk.png";
import { HStack, Text, VStack, Flex} from "@chakra-ui/layout";
import {Button, Link, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure} from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { SKKUBLUE, SKKUBLUE_100, SKKUORANGE_100 } from "../../colors";
import {useDispatch, useSelector} from "react-redux";
import {actionIpfsClose, actionIpfsOpen} from "../../redux/dashboardTable/ipfs";
import IpfsPopup from "./IpfsPopup";




const Td = styled.td`
  text-align: center;
  padding: 5px;
`;
const Icon = styled.img`
  src: ${(props) => props.src};
  width: 20px;
  margin-left: 10px;
`;


function dateVisible(date) {
    return `${date.substr(0, 4)}년${date.substr(5, 2)}월${date.substr(
            8,
            2
            )}일 ${date.substr(11, 5)}`;
}

const SendItem = ({transData, type}) =>{

    const width = 100/ (type ? 5 : 6);


    const [focus, setFocus] = useState(false);

    return(<tr
      onPointerEnter={()=>setFocus(true)} onPointerLeave = {()=>setFocus(false)}
      bgColor = {focus &&SKKUBLUE_100 }
    >
      <SourceView  width = {width + '%'} icon={kakaoTalk} text={transData.description}/>
        <TextView width = {width + '%'}title = "Date" content = {dateVisible(transData.date)} focus = {focus}/>
      { type !== "from" && (<TextView width = {width + '%'} title={transData.user_receiver} content = {transData.to} focus = {focus}/>)    }
        { type !== "to" && (<TextView width = {width + '%'} title={transData.user_sender} content = {transData.from} focus = {focus}/>)    }
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
        <Text fontSize='md'

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

    const ipfs = useSelector(state => state.ipfs)

      const url = "https://ipfs.io/ipfs/QmWkywcsE2phCBYS6XeWoybjEsU5fsE5u5YLjQFKbXuWzC"
    const { isOpen, onOpen, onClose } = useDisclosure()
      const dispatch = useDispatch()

      const onOpenEx = ()=>{
        //dispatch(actionIpfsOpen("https://ipfs.io/ipfs/QmWkywcsE2phCBYS6XeWoybjEsU5fsE5u5YLjQFKbXuWzC"))

        onOpen()

          console.log(ipfs)

    }
      const onCloseEx = ()=>{
        dispatch(actionIpfsClose())
        onClose()
    }

    return(<Td>
      <Button colorScheme='green' size="md" variant = {focus ? 'solid': 'outline'} onClick = {onOpenEx}>
        Open Hash
      </Button>
        <Modal isOpen={isOpen} onClose={onCloseEx}>
            <ModalOverlay/>
            <ModalContent>
                <IpfsPopup isOpen={isOpen} onClose={onCloseEx} url = {url}/>
            </ModalContent>

        </Modal>
    </Td>);
  }

  export default SendItem;