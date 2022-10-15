import { Cookies } from "react-cookie";
import { COOKIE_TOKEN } from "../CookieConst";

const unauthorized = () => {
  const cookie = new Cookies();
  cookie.remove(COOKIE_TOKEN);
  console.log("unauthorized exception!");
  window.location.href = "/login";
};

export default unauthorized;
