import { SKKU_LOGIN } from "./const"

const actionLogin = (username, psword) =>{
    return {
        type : SKKU_LOGIN,
        username : username,
        pasword : btoa(psword),
    }
}



export {
    actionLogin
};