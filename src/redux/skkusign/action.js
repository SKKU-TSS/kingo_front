import { SKKU_LOGIN } from "./const"

const actionSkkuLogin = (username, psword) =>{
    return {
        type : SKKU_LOGIN,
        username : username
    }
}



export {
    actionSkkuLogin
};