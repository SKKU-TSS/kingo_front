import { combineReducers } from "redux";
import skkuLogin from './skkusign/reducer'
import recentDashboard from "./dashboardTable/dashbaordTable";


const rootReducer = combineReducers({
    recentDashboard,
    skkuLogin
})

export default rootReducer;