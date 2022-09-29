import axios from "axios";
import BACKEND_URL from "../ServerConst";

const skkuLoginAccess = "https://login.skku.edu/loginAction"

function skkuLogin(username, success, failed)
{
    axios({
        url: `${BACKEND_URL}/api/auth/magicLogin`,
        method: 'post',
        data: {
            destination : username,
        
        }
    }).then((response)=>{

        success(response);
    }).catch((error)=>{

        console.log(error);
        failed(error);
    })
}

export default skkuLogin;