import axios from "axios";
import BACKEND_URL from "../ServerConst";
import handleTransaction from "./response/HandleTransaction";

function getAllTransData(account, callback)
{
    
    return axios
    .get(`${BACKEND_URL}api/transaction?who=to&address=${account}`).then(
        function(response){

            //success
            callback(
                handleTransaction(account, response)
            );
        }
    );

}

export default getAllTransData;