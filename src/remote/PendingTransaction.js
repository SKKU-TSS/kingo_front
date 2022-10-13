import axios from "axios";
import { Cookies } from "react-cookie";
import { COOKIE_TOKEN } from "../CookieConst";
import BACKEND_URL from "../ServerConst";
import commonHeader from "./commonHeader";

const getRecentData = (onSuccess, onFailed) => {
  const header = commonHeader();
  console.log(header);

  axios({
    url: `${BACKEND_URL}/api/transaction/nonpending/get`,
    method: "get",
    headers: header,
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

const getPendingData = (onSuccess, onFailed) => {
  const header = commonHeader();
  console.log(header);

  axios({
    url: `${BACKEND_URL}/api/transaction/pending/get`,
    method: "get",
    headers: header,
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) onSuccess(response.data);
    })
    .catch((error) => {
      console.log(error);
      onFailed(error);
    });
};

const approvePendingData = (id, onSuccess, onFailed) => {
  const header = commonHeader();

  axios({
    url: `${BACKEND_URL}/api/transaction/pending/assign`,
    method: "post",
    headers: header,
    data: {
      id: id,
    },
  })
    .then(onSuccess)
    .catch((error) => {
      console.log(error);
      onFailed(error);
    });
};

export { getPendingData, getRecentData, approvePendingData };
