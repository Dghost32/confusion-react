import {
  ADD_COMMENT,
  DISHES_LOADING,
  DISHES_FAILED,
  ADD_DISHES,
} from "./ActionTypes";

const InitialState = {
  isLoading: true,
  err: undefined,
  dishes: [],
};

export const Dishes = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_DISHES:
      return { ...InitialState, isLoading: false, dishes: action.payload };
    case DISHES_LOADING:
      return InitialState;
    case DISHES_FAILED:
      return { ...InitialState, isLoading: false, err: action.payload };
    default:
      return state;
  }
};
