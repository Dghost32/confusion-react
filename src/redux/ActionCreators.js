import {
  ADD_COMMENT,
  DISHES_LOADING,
  COMMENTS_FAILED,
  ADD_COMMENTS,
  PROMOS_LOADING,
  DISHES_FAILED,
  ADD_DISHES,
  PROMOS_FAILED,
  ADD_PROMOS,
} from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId,
    rating,
    author,
    comment,
    date: new Date().toISOString(),
  };

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (res) => {
        if (res.ok) {
          return res;
        }
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .then((res) => res.json())
    .then((res) => {
      dispatch(addComment(res));
    })
    .catch((err) => {
      console.error("Post comments", err);
      alert(
        "Your comment could not be posted\ndue to an internal server error"
      );
    });
};

/* DISHES */
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());

  return fetch(baseUrl + "dishes")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        }
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => dispatch(dishesFailed(err.message)));
};
export const dishesLoading = () => ({
  type: DISHES_LOADING,
});
export const dishesFailed = (err) => ({
  type: DISHES_FAILED,
  payload: err,
});
export const addDishes = (dishes) => {
  return {
    type: ADD_DISHES,
    payload: dishes,
  };
};
/* COMMENTS */
export const fetchComments = () => (dispatch) =>
  fetch(baseUrl + "comments")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        }
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => dispatch(commentsFailed(err.message)));
export const commentsFailed = (err) => ({
  type: COMMENTS_FAILED,
  payload: err,
});
export const addComments = (comments) => ({
  type: ADD_COMMENTS,
  payload: comments,
});
/* PROMOS */
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        }
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => dispatch(promosFailed(err.message)));
};
export const promosLoading = () => ({
  type: PROMOS_LOADING,
});
export const promosFailed = (err) => ({
  type: PROMOS_FAILED,
  payload: err,
});
export const addPromos = (promos) => ({
  type: ADD_PROMOS,
  payload: promos,
});
