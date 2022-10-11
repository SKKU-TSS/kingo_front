import { Flex, useMediaQuery } from "@chakra-ui/react";
import TotalPoint from "../components/mypoint/TotalPoint";
import PointStatus from "../components/dashboard/PointStatus";

import { Redirect } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

import PointPieChart from "../components/dashboard/PointPieChart";
import AccountInfo from "../components/dashboard/AccountInfo";
import RecentTransaction from "../components/dashboard/RecentTransaction";
import NavBar from "../components/public/Navbar";
import { useCookies, Cookies } from "react-cookie";
import { COOKIE_EMAIL, COOKIE_TOKEN } from "../CookieConst";
import { useEffect } from "react";

function DashBoard() {
  // 대시보드 페이지

  const [emailCookie, setEmailCookie, removeEmailCookie] =
    useCookies(COOKIE_EMAIL);
  const [tokenCookie, setTokenCookie, removeTokenCookie] =
    useCookies(COOKIE_TOKEN);

  const getRedirectData = () => {
    console.log(window.location.href);
    const path = window.location.href.split("/").pop();

    console.log(path);
    const dict = path.split("?").pop().split("&");

    console.log(dict);

    const username = `${dict.filter((str) => str.includes("user"))}`
      .split("=")
      .pop();
    const token = `${dict.filter((str) => str.includes("token"))}`
      .split("=")
      .pop();

    if (username !== undefined) {
      const name = `${username}`;
      if (name.length < 1) return;
      console.log(`Username : ${username}`);

      setEmailCookie(COOKIE_EMAIL, username);
    }

    if (token !== undefined) {
      const tk = `${token}`;
      if (tk.length < 1) return;
      console.log(`token : ${token}`);
      setTokenCookie(COOKIE_TOKEN, token);
      window.location.href = "/dashboard";
    }
  };

  useEffect(() => {
    getRedirectData();

    let cookie = new Cookies();
    let token = cookie.get(COOKIE_TOKEN);
    if (token === undefined || token === null || token.length < 1) {
      window.location.href = "/login";
    }

    return () => {};
  }, []);

  const { active } = useWeb3React();

  return (
    <Flex>
      <NavBar />
      <FlexContainer>
        {!active ?? <Redirect path="/" />}
        <TotalPoint />
        <RecentTransaction />
        <AccountInfo />
        <PointPieChart />
        <PointStatus />
        {/* <AdminPage /> */}
      </FlexContainer>
    </Flex>
  );
}

const FlexContainer = ({ children }) => {
  const [isLessThan1070] = useMediaQuery("(max-width:1070px)");

  const outterStyle = {
    width: "full",
    height: "full",
    justify: "space-evenly",
    backgroundColor: "#E5E5E5",
  };

  const innerStyle = {
    flexGrow: "1",
    justify: "space-between",
    p: "5",
    minW: "350px",
    w: isLessThan1070 ? "full" : "60%",
  };

  return (
    <Flex wrap="wrap" style={outterStyle}>
      <Flex wrap="wrap" style={innerStyle}>
        {children}
      </Flex>
    </Flex>
  );
};

export default DashBoard;

const DASHBAORD_WIDTH = "47%";

export { DASHBAORD_WIDTH };
