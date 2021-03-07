import { ADD_PROMOS, PROMOS_LOADING, PROMOS_FAILED } from "./ActionTypes";

const InitialState = {
  isLoading: true,
  err: undefined,
  promotions: [],
};

export const Promotions = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_PROMOS:
      return { ...InitialState, isLoading: false, promotions: action.payload };
    case PROMOS_LOADING:
      return InitialState;
    case PROMOS_FAILED:
      return { ...InitialState, isLoading: false, err: action.payload };
    default:
      return state;
  }
};
