import axios from "axios";
import BACKEND_URL from "../ServerConst";

const skkuLoginAccess = "https://login.skku.edu/loginAction";

function skkuLogin(username, success, failed) {
  const data = {
    destination: `${username}`.replace("%40", "@"),
  };

  console.log("send email");
  console.log(data);
  axios({
    url: `${BACKEND_URL}/api/auth/magicLogin`,
    method: "post",
    data: data,
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
