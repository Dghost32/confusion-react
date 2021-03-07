import { ADD_LEADERS, LEADERS_LOADING, LEADERS_FAILED } from './ActionTypes';
const InitialState = {
  isLoading: true,
  err: undefined,
  leaders: [],
};

export const Leaders = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_LEADERS:
      return { ...InitialState, isLoading: false, leaders: action.payload };
    case LEADERS_LOADING:
      return InitialState;
    case LEADERS_FAILED:
      return { ...InitialState, isLoading: false, err: action.payload };
    default:
      return state;
  }
};
