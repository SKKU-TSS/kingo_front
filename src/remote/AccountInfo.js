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
      if (response.status === 200)
        dispatch(actionGetTotalBalance(response.result));
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
