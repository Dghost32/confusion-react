import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuPage from "./Pages/MenuPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import DishDetailPage from "./Pages/DishDetailPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchDishes,
  fetchPromos,
  fetchComments,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders,
});

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchDishes: () => dispatch(fetchDishes()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchComments: () => dispatch(fetchComments()),
});

function Main({
  dishes,
  comments,
  promotions,
  leaders,
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  resetFeedbackForm,
}) {
  useEffect(() => {
    fetchDishes();
    fetchPromos();
    fetchComments();
  }, [fetchDishes, fetchPromos, fetchComments]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage
            dishesLoading={dishes.isLoading}
            dishesErr={dishes.err}
            promosLoading={promotions.isLoading}
            promosErr={promotions.err}
            commentsLoading={comments.isLoading}
            commentsErr={comments.err}
            dish={dishes.dishes.filter((dish) => dish.featured)[0]}
            promotion={
              promotions.promotions.filter((promo) => promo.featured)[0]
            }
            leader={leaders.filter((leader) => leader.featured)[0]}
          />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage leaders={leaders} />
        </Route>
        <Route exact path="/menu">
          <MenuPage dishes={dishes} />
        </Route>
        <Route path="/menu/:dishId">
          <DishDetailPage
            isLoading={dishes.isLoading}
            err={dishes.err}
            dishes={dishes.dishes}
            comments={comments.comments}
            postComment={postComment}
          />
        </Route>
        <Route exact path="/contactus">
          <ContactUsPage resetFeedbackForm={resetFeedbackForm} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
