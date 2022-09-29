import axios from "axios";
import BACKEND_URL from "../ServerConst";


function getUserInfo(account, callback){
    return
    axios
        .get(BACKEND_URL + "api/userinfo", {
          params: {
            id: account,
          },
        }).then(
          (response) =>{
            callback(response);
          }
        )
  
  };

export default getUserInfo;