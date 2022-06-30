import axios from "axios";
import BACKEND_URL from "../ServerConst";


function getGraphData(account, callback){

    axios
        .get(BACKEND_URL + "api/graph", {
          params: {
            id: account,
          },
        }).then(
          (response) =>{
            callback(response);
          }
        )
  
  };

export default getGraphData;