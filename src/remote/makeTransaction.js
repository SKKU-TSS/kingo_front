import axios from "axios";
import BACKEND_URL from "../ServerConst";

const makeTransaction = (to, from, value, token, onSuccess, onFailed) => {
  axios({
    url: `${BACKEND_URL}/api/createTx`,
    method: "post",

    body: {
      _signedTransaction: token,
      _from: from,
      _to: to,
      _point: value,
    },
  })
    .then((response) => {
      if (response.status === 200) onSuccess(response.data);
      else onFailed(response);
    })
    .catch((error) => {
      console.log(error);
      onFailed(error);
    });
};

export default makeTransaction;
