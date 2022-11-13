import { combineReducers } from "redux";
import skkuLogin from "./skkusign/reducer";
import recentDashboard from "./dashboardTable/dashbaordTable";
import { totalBalanceReducer } from "./dashboardTable/totalBalance";
import { ipfsReducer} from "./dashboardTable/ipfs";

const rootReducer = combineReducers({
  recentDashboard: recentDashboard,
  skkuLogin: skkuLogin,
  totalBalance: totalBalanceReducer,
    ipfs : ipfsReducer
});

export default rootReducer;
