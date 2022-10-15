import axios from "axios";
import { actionGetTotalBalance } from "../redux/dashboardTable/totalBalance";
import BACKEND_URL from "../ServerConst";
import commonHeader from "./commonHeader";
import unauthorized from "./unauthorized";

function getUserInfo(account, callback) {
  return;
}

const dispatchTotalBalance = (dispatch) => {
  axios({
    url: `${BACKEND_URL}/api/transaction/allpoint`,
    headers: commonHeader(),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data.result[0]);
        let values = `${Object.entries(response.data.result[0])[0]}`.split(",");
        let value = `${values[1]}`;
        if (value === "null") value = 0;
        dispatch(actionGetTotalBalance(value));
      }
    })
    .catch((e) => {});
};

const testTokenAvaliable = () => {
  axios({
    url: `${BACKEND_URL}/api/transaction/allpoint`,
    headers: commonHeader(),
  })
    .then((response) => {})
    .catch((e) => {
      if (e.response) {
        if (e.response.status === 401) {
          unauthorized();
        }
      }
    });
};

export { dispatchTotalBalance, testTokenAvaliable };
export default getUserInfo;
