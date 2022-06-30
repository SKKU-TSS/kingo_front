import axios from "axios";
import BACKEND_URL from "../ServerConst";
import handleTransaction from "./response/HandleTransaction";

function getSendData(account, callback)
{
    return axios
    .get(`${BACKEND_URL}api/transaction?who=from&address=${account}`).then(
        function(response){

            //success
            callback(
                handleTransaction(account, response)
            );
        }
    );

}

export default getSendData;