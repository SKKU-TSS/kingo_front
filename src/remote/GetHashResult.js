import axios from "axios";
import BACKEND_URL from "../ServerConst";

function getHashResult(hash, callback){

    axios.get(BACKEND_URL + "api/result/" + hash).then((res) => {
        callback(res);
    })
}

export default getHashResult;