import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Router from "./Router";
import Navigation from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Listings from "./Components/Lists"
import "./App.css";

console.log(process.env.REACT_APP_AIzaSyArHvqUDp1vE1t0y5C_vZRG7LTVEorLlAQ)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Listings>
        </Listings>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
