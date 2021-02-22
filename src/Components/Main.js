import React from "react";
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
import { addComment } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

function Main({ dishes, comments, promotions, leaders, addComment }) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage
            dish={dishes.filter((dish) => dish.featured)[0]}
            promotion={promotions.filter((promo) => promo.featured)[0]}
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
            dishes={dishes}
            comments={comments}
            addComment={addComment}
          />
        </Route>
        <Route exact path="/contactus">
          <ContactUsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
