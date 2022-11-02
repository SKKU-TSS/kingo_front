import { Flex, HStack, Text, VStack, Box} from "@chakra-ui/layout";
import { useState } from "react";
import MyPointAll from "../components/mypoint/MyPointAll";
import MyPointSend from "../components/mypoint/MyPointSend";
import MyPointReceive from "../components/mypoint/MyPointReceive";
import PointGraph from "../components/mypoint/PointGraph";
import { SKKUBLUE } from "../colors";
import { Button } from "@chakra-ui/react";
import TypeButton from "../components/mypoint/TypeButton";
import NavBar from "../components/public/Navbar";




function MyPoint() {
  // 내 트랜잭션의 모든 내역, 받은 내역, 사용 내역을 볼 수 있는 페이지
  const [index, setIndex] = useState(0);
  return (
    <Flex>
      <NavBar/>
      <Flex m={10} flexDirection="column" w="full">
        <Text fontSize="3xl" fontWeight="700">
          My Point 현황
        </Text>
          {/*<VStack
          w="full"
          backgroundColor="white"
          borderRadius="5px"
          p={5}
          marginBottom={5}
          marginTop={5}
        >
            <PointGraph />
            </VStack>*/}
        <HStack>
            <TypeButton title = 'ALL' set={setIndex} index={index} num={0}/>
            <TypeButton title = '사용내역' set={setIndex} index={index} num={1}/>
            <TypeButton title = '받은내역' set={setIndex} index={index} num={2}/>
        
        
        </HStack>

        <VStack
          w="full"
          backgroundColor="white"
          borderRadius={20}
          p={5}
          marginTop={5}
        >
          {index === 0 && <MyPointAll />}
          {index === 1 && <MyPointSend />}
          {index === 2 && <MyPointReceive />}
        </VStack>
      </Flex>
    </Flex>
  );
}



export default MyPoint;