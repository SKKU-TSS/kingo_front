import { useCookies, Cookies, CookiesProvider } from "react-cookie";
import { COOKIE_TOKEN } from "../CookieConst";

const commonHeader = () => {
  const cookieStore = new Cookies();
  return {
    Authorization: `Bearer ${cookieStore.get(COOKIE_TOKEN)}`,
    "Content-Type": `application/json`,
  };
};

export default commonHeader;
