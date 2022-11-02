import axios from "axios";
import BACKEND_URL from "../ServerConst";
import commonHeader from "./commonHeader";

const skkuLoginAccess = "https://login.skku.edu/loginAction";

function skkuLogin(username, success, failed) {
  const data = {
    destination: `${username}`.replace("%40", "@"),
  };

  const header = commonHeader("POST")

  console.log("send email");
  console.log(data);
  axios({
    url: `${BACKEND_URL}/api/auth/magicLogin`,
    method: "post",
    data: data,
    header : header
  })
    .then((response) => {
      success(response);
    })
    .catch((error) => {
      console.log(error);
      failed(error);
    });
}

export default skkuLogin;
