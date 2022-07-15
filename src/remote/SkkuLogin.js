import axios from "axios";

const skkuLoginAccess = "https://login.skku.edu/loginAction"

function skkuLogin(username, success, failed)
{

    axios({
        url: skkuLoginAccess,
        method: 'post',
        headers : {
            'Access-Control-Allow-Origin': 'login.skku.edu',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',

            'Content-Type': 'text/xml',
            Origin : "login.skku.edu",
            Referer : "login.skku.edu",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            Accept : '*/*'
        },
        data: {
            userid : username,
        
        }
    }).then((response)=>{

        success(response);
    }).catch((error)=>{

        console.log(error);
        failed(error);
    })
}

export default skkuLogin;