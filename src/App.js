import "./App.css";
import React from "react";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
