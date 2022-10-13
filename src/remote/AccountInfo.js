import axios from "axios";
import { actionGetTotalBalance } from "../redux/dashboardTable/totalBalance";
import BACKEND_URL from "../ServerConst";
import commonHeader from "./commonHeader";

function getUserInfo(account, callback) {
  return;
}

const dispatchTotalBalance = (dispatch) => {
  axios({
    url: `${BACKEND_URL}/api/totalPoint`,
    headers: commonHeader,
  })
    .then((response) => {
      if (response.status === 200)
        dispatch(actionGetTotalBalance(response.result));
    })
    .catch((e) => {});
};
export { dispatchTotalBalance };
export default getUserInfo;
