import axios from "axios";
import BACKEND_URL from "../ServerConst";


function getHash(account, callback){

    axios.get(BACKEND_URL + "api/getHash?address=" + account).then((response) =>{



        const _hash = response.data;
        const hash = _hash[0];
        const receipt = _hash[1];
        const arr = Array.from({ length: hash?.length }, (v, i) => i);
        
        var i;
        let ret = []
        for(i=0;i<hash.length;i++)
        {
            ret.push({
                hash : hash[i],
                receipt : receipt[i],
                index : arr[i]
            })
        }
        
        
        callback(ret);

    })
}


export default getHash;