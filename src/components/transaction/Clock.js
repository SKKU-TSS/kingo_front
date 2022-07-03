import { HStack, Text } from "@chakra-ui/layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Link, Box } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko";

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

export default function Clock() {
  // 트랜잭션의 ipfs 업로드까지 남은 시간 표시 : 후에 백엔드로부터 정보를 가져올 예정

  const LiveTimeContainer = () => {
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }, [minutes, seconds]);

    const numPadding = (num)=>{
      return num < 10 ? `0${num}` : num;
    }

    return (
      <>
        {minutes}:{numPadding(seconds)}
      </>
    );
  };

  return <>{LiveTimeContainer()}</>;
}