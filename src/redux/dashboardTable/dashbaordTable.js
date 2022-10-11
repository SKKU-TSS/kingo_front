import { getRecentData } from "../../remote/PendingTransaction"

const DASHBOARD_ITEM = "DASHBOARD_ITEM"


const actionDashboardItem = async (dispatch) =>{

    await getRecentData(
        (response)=>{
            
            dispatch( {
                type : DASHBOARD_ITEM,
                recentItem : response.result
            })
        },
        (error)=>{
            
        }
      );
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

const dashboardReducer = (state = initState, action) =>{

    switch(action.type)
    {
        case DASHBOARD_ITEM : 
            return {
                ...state,
                recentItem : action.recentItem
            }
            break;
        default : 
            return state;
    }
}

export {DASHBOARD_ITEM, actionDashboardItem}
export default dashboardReducer
