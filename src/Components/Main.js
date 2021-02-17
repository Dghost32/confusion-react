import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuPage from "./Pages/MenuPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import DishDetailPage from "./Pages/DishDetailPage";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Main() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage
            dish={DISHES.filter((dish) => dish.featured)[0]}
            promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
            leader={LEADERS.filter((leader) => leader.featured)[0]}
          />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage />
        </Route>
        <Route exact path="/menu">
          <MenuPage dishes={DISHES} />
        </Route>
        <Route path="/menu/:dishId">
          <DishDetailPage dishes={DISHES} comments={COMMENTS} />
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

export default Main;
