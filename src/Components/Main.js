import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuPage from "./Pages/MenuPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import { DISHES } from "../shared/dishes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Main() {
  const [selectedDish, setSelectedDish] = useState(undefined);

  return (
    <>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/aboutus">
              <AboutUsPage/>
            </Route>
            <Route path="/menu">
              <MenuPage dishes={DISHES} callback={(dish)=>setSelectedDish(dish)} selectedDish={selectedDish}/>
            </Route>
            <Route path="/contactus">
              <ContactUsPage/>
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default Main;
