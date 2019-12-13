import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Router from "./Router";
import Nav from "./Components/Nav";
import { BrowserRouter } from "react-router-dom";

import "./App.css";


console.log(process.env.REACT_APP_AIzaSyArHvqUDp1vE1t0y5C_vZRG7LTVEorLlAQ)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
