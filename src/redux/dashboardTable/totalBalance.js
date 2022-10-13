const TOTAL_BALANCE = "TOTAL_BALANCE";

const actionGetTotalBalance = (value) => {
  return {
    type: TOTAL_BALANCE,
    value: value,
  };
};

const initState = {
  value: 0,
};

const totalBalanceReducer = (state = initState, action) => {
  switch (action.type) {
    case TOTAL_BALANCE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export { TOTAL_BALANCE, actionGetTotalBalance, totalBalanceReducer };
