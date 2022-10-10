import { combineReducers } from "redux";
import skkuLogin from './skkusign/reducer'
import { dashboardReducer } from "./dashboardTable/dashbaordTable";


const reducer = combineReducers({
    skkuLogin, dashboardReducer
})

export default reducer;