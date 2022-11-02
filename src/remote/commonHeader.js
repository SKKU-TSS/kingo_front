import { useCookies, Cookies, CookiesProvider } from "react-cookie";
import { COOKIE_TOKEN } from "../CookieConst";

const commonHeader = (method = "GET") => {
  const cookieStore = new Cookies();

  if(method === "POST")

      return {
        Authorization: `Bearer ${cookieStore.get(COOKIE_TOKEN)}`,
        "Content-Type": `application/json`,
          'Access-Control-Allow-Origin' : '*'
      };

  return {
      Authorization: `Bearer ${cookieStore.get(COOKIE_TOKEN)}`,
      "Content-Type": `application/json`,
      'Access-Control-Allow-Origin' : '*'
  };
};

export default commonHeader;
