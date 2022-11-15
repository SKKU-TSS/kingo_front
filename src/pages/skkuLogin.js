import {
    HStack,
    Input,
    VStack,
    Text,
    Button,
    Flex,
    Box,
    InputGroup,
    InputLeftAddon,
    Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure,
    ModalHeader,
    ModalCloseButton, ModalFooter
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { actionSkkuLogin } from "../redux/skkusign/action";
import { connect, useDispatch } from "react-redux";
import { useCookies, Cookies } from "react-cookie";
import { COOKIE_EMAIL, COOKIE_TOKEN } from "../CookieConst";
import axios from "axios";
import BACKEND_URL from "../ServerConst";
import skkuLogin from "../remote/SkkuLogin";
import {SKKUBLUE, SKKUGREEN, SKKUGREEN_100, SKKUORNAGE} from "../colors";

const SKKULoginPage = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ id: "", pw: "" });

  const checkIsLogin = () => {
    const cookie = new Cookies();
    const token = cookie.get(COOKIE_TOKEN);
    if (token === undefined || `${token}`.length < 1) {
    } else window.location.href = "/dashboard";
  };

  const { isOpen, onOpen, onClose } = useDisclosure()
    const [alertText, setAlertText] = useState()
    const _alert = (text)=>{
      setAlertText(text)
        onOpen()
  }


  const login = () => {



    if (form === undefined || form.id === undefined || form.id.length < 1)
      setForm({
        id: emailCookie.COOKIE_EMAIL,
      });

    let domain = ""
      try{
        domain = form.id.split("@")[1];
        console.log(form.id);

    }
      catch(error)
      {
          
      }
    if (domain === "skku.edu" || domain === "g.skku.edu")
      skkuLogin(
        form.id.replace("@", "%40"),
        (response) => {
          _alert("메일을 전송했습니다.");
        },
        (error) => {
          _alert("메일 전송에 실패했습니다.");
        }
      );
    else _alert("성균관대학교 이메일이 아닙니다.");

    //dispatch(actionSkkuLogin(form.id));
  };

  const fieldStyle = {
    borderWidth: "1px",
    borderRadius: "4px",
    borderColor: "#AFAFAF",
    backgroundColor: "white",

    width: "300px",
  };

  const [emailCookie, setEmailCookie, removeEmailCookie] =
    useCookies(COOKIE_EMAIL);

  const updateForm = (title, value) => {
    //setEmailCookie(COOKIE_EMAIL , value);
    setSavedEmail(value);
    setForm({ ...form, id: value });
  };

  const [savedEmail, setSavedEmail] = useState(null);

  useEffect(() => {
    checkIsLogin();
    if (emailCookie !== undefined) {
      //setSavedEmail(emailCookie.LOGIN_EMAIL.replace("%40", "@"));
    }
  }, []);

  //if(emailCookie !== undefined)
  //    savedText = emailCookie.LOGIN_EMAIL

  return (

          <Flex align="center"
              width = "100%"
              justifyContent="center">

              <HStack width="700px"
                  background="#ffffff"
                  rounded="10"
                  height="400px"
                  spacing={0}

                  >
                  <VStack width = "50%" height="100%" justifyContent="center_vertical" rounded={10} p ={10} background={SKKUGREEN}>
                      <Text width = "100%" fontSize='3xl' as = 'b' color="#ffffff">KingoCoin</Text>
                      <Text fontSize='2xl' color={SKKUGREEN_100}>성균관대학교 학우들을 위한 새로운 Rewarding Token System.</Text>
                      <Text fontSize='xl'  as = 'b' >여러분의 경험과 성취를 직접 확인하고 발전을 위한 더 나은 혜택을 누려보세요.</Text>
                      <Text fontSize='sm' color = {SKKUBLUE}>KingoCoin 베타서비스에 참여해주신 여러분께 감사드리며, 서비스 품질이 불안정할수 있음에 양해의 말씀을 구합니다.</Text>
                  </VStack>

                  <VStack align="center" justifyContent="center" width="50%" height = "100%" spacing={8}

                      >
                      <Header />
                      <TextField
                          title="성균인 계정"
                          placeholder="user@skku.edu"
                          savedText={savedEmail}
                          setForm={updateForm}
                          width="300px"
                      />
                      <BtLogin onClick={login} />
                  </VStack>

              </HStack>
              <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay/>
                  <ModalContent>
                      <ModalHeader>{alertText}</ModalHeader>
                      <ModalCloseButton />
                      <ModalFooter></ModalFooter>

                  </ModalContent>

              </Modal>
          </Flex>


  );
};

const Header = () => {
  const url = "https://www.skku.edu/_res/skku/img/skku_s.png";

  return (
    <Box
      bgImage={`url('${url}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      height="150px"
      width="150px"
      bgSize="cover"
    />
  );
};

const TextField = ({ title, placeholder, savedText, setForm, onChange }) => {
  const [textValue, setTextValue] = useState(null);

  useEffect(() => {
    setTextValue(savedText);
  });

  const setValue = useCallback((value) => {
    setForm(title, value);
  }, []);

  return (
    <InputGroup width="300px" size="sm">
      <InputLeftAddon children={title} />
      <Input
        value={textValue}
        placeholder={placeholder}
        size="xl"
        background="white"
        onChange={(event) => {
          setTextValue(event.target.value);
          setValue(event.target.value);
        }}
      />
    </InputGroup>
  );
};

const BtLogin = ({ onClick }) => {
  return (
    <Button colorScheme="teal" onClick={onClick} fontWeight="400">
      메일 보내기
    </Button>
  );
};

export default SKKULoginPage;
