import { combineReducers } from "redux";
import skkuLogin from "./skkusign/reducer";
import recentDashboard from "./dashboardTable/dashbaordTable";
import { totalBalanceReducer } from "./dashboardTable/totalBalance";

const rootReducer = combineReducers({
  recentDashboard: recentDashboard,
  skkuLogin: skkuLogin,
  totalBalance: totalBalanceReducer,
});

export default rootReducer;
