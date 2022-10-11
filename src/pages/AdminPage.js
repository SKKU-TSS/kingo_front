import {
  Flex,
  VStack,
  HStack,
  Text,
  Input,
  InputLeftAddon,
  InputGroup,
  NumberInput,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const AdminPage = () => {
  let [email, setEmail] = useState("");
  let [comment, setComment] = useState("");
  let [value, setValue] = useState(0);
  let [password, setPassword] = useState("");

  const onClick = () => {
    // submit input
  };

  return (
    <Flex wrap="wrap" width="full" justify="space-evenly" p="5">
      <VStack>
        <Text fontSize="2xl">포인트 부여 기능</Text>
        <InputGroup width="300px" size="sm">
          <InputLeftAddon children="대상자" />
          <Input
            value={email}
            placeholder="user@skku.edu"
            size="xl"
            background="white"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </InputGroup>
        <InputGroup width="300px" size="sm">
          <InputLeftAddon children="코멘트" />
          <Input
            value={comment}
            placeholder="다음 활동을 수행하였음"
            size="xl"
            background="white"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
        </InputGroup>
        <InputGroup width="300px" size="sm">
          <InputLeftAddon children="포인트" />
          <Input
            value={value}
            placeholder="100"
            size="xl"
            background="white"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </InputGroup>
        <InputGroup width="300px" size="sm">
          <InputLeftAddon children="인증키" />
          <Input
            value={password}
            placeholder="관리자 인증번호"
            type="password"
            size="xl"
            background="white"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputGroup>
        <Button colorScheme="teal" onClick={onClick} fontWeight="400">
          포인트 부여하기
        </Button>
      </VStack>
    </Flex>
  );
};

export default AdminPage;
