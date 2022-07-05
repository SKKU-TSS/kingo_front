import axios from "axios";

const skkuLoginAccess = "https://login.skku.edu/loginAction"

function skkuLogin(username, password, success, failed)
{

    axios({
        url: skkuLoginAccess,
        method: 'post',
        data: {
            userid : username,
            userpwd : password	
        }
    }).then((response)=>{

        success(response);
    }).catch((error)=>{

        console.log(error);
        failed(error);
    })
}

export default skkuLogin;