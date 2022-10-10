import { getRecentData } from "../../remote/PendingTransaction"

const DASHBOARD_ITEM = "DASHBOARD_ITEM"


const actionDashboardItem = (email, token) =>{
    return {
        type : DASHBOARD_ITEM
    }
}


const initState = {
    type : undefined,
    item : [

    ]
}

const dashboardReducer = async (state = initState, action) =>{

    switch(action.type)
    {
        case DASHBOARD_ITEM : 

        
            await getRecentData(
                (response)=>{
                  console.log(response.result)
                    return {
                        ...state,
                        item : response.result
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
}

export {DASHBOARD_ITEM, actionDashboardItem, dashboardReducer}

