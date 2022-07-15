import skkuLogin from "../../remote/SkkuLogin";
import { SKKU_LOGIN } from "./const";


const initState = {
    type : undefined,
    account : {

    }
}

const skkuReducer = async (state = initState, action) =>{

    switch(action.type)
    {
        case SKKU_LOGIN : 
            await skkuLogin(action.username,(response) =>{
                return response;
            }, (response) =>{
                return state;
            });
            break;
        default : 
            return state;
    }
}

export default skkuReducer;