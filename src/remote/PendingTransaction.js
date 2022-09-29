import axios from "axios"
import { Cookies } from "react-cookie"
import { COOKIE_TOKEN } from "../CookieConst"
import BACKEND_URL from "../ServerConst"
import commonHeader from "./commonHeader"

const getPendingData = (
    onSuccess, onFailed
)=>{

    const header = commonHeader()
    console.log(header)


    axios({
        url: `${BACKEND_URL}/api/get/pending`,
        method: 'post',
        headers : header
    }).then((response)=>{

        onSuccess(response);
    }).catch((error)=>{

        console.log(error);
        onFailed(error);
    })

}

export { getPendingData }