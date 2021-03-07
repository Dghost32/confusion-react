import { ADD_COMMENT, ADD_COMMENTS, COMMENTS_FAILED } from "./ActionTypes";

const InitialState = {
  isLoading: true,
  err: undefined,
  comments: [],
};

export const Comments = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return { ...InitialState, isLoading: false, comments: action.payload };
    case COMMENTS_FAILED:
      return { ...InitialState, isLoading: false, err: action.payload };
    case ADD_COMMENT:
      var comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
