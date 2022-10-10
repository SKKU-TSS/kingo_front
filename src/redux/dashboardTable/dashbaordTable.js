import { getRecentData } from "../../remote/PendingTransaction"

const DASHBOARD_ITEM = "DASHBOARD_ITEM"


const actionDashboardItem = (email, token) =>{
    return {
        type : DASHBOARD_ITEM
    }
}


const initState = {
    type : undefined,
    hei : "sibal",
    recentItem : [
        {date : "2022-09-28T22:27:24.000Z",
        description : "킹고인과의 만남",
        ipfs_hash : null,
            pending : 0,
        user_receiver : "wlssud0701@naver.com",
        user_sender : 4,
        uuid : 13, 
        value : 100
    }
    ],
    name : "Fefefe"
}

const dashboardReducer = async (state = initState, action) =>{

    switch(action.type)
    {
        case DASHBOARD_ITEM : 
            await getRecentData(
                (response)=>{
                    console.log("redux response")
                   // console.log(action)
                  console.log(state)
                    console.log(response)
                    console.log("=====redux response")
                    return {
                        ...state,
                        recentItem : response.result
                    }
                },
                (error)=>{
                    return state
                }
              );
            break;
        default : 
            return state;
    }
    return state;
}

export {DASHBOARD_ITEM, actionDashboardItem}
export default dashboardReducer
