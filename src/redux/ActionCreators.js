import {
  ADD_COMMENT,
  DISHES_LOADING,
  DISHES_FAILED,
  ADD_DISHES,
} from "./ActionTypes";
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
  type: ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 1000);
};

export const dishesLoading = () => (dispatch) => ({
  type: DISHES_LOADING,
});

export const dishesFailed = (err) => ({
  type: DISHES_FAILED,
  payload: err,
});

export const addDishes = (dishes) => ({
  type: ADD_DISHES,
  payload: dishes,
});
