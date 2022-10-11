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
    recentItem : [
        
    ]
}

const dashboardReducer = (state = initState, action) =>{

    switch(action.type)
    {
        case DASHBOARD_ITEM : 
            return {
                ...state,
                recentItem : action.recentItem
            }
        default : 
            return state;
    }
}

export {DASHBOARD_ITEM, actionDashboardItem}
export default dashboardReducer
