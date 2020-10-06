import React from "react";
import ReactDOM from "react-dom";
import CardMakerArabic from "./arabic/cardmaker arabic";
import CardMakerEnglish from "./english/cardmaker english";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; //ignore that you woun't need routing in the tutorial

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/ar">
        {/* ignore this line*/}
        <CardMakerArabic />
        {/* you will need it if you are following the Arabic tutorial*/}
      </Route>
      {/* ignore this line*/}
      <Route path="/en">
        {/* ignore this line*/}
        <CardMakerEnglish />
        {/* you will need it if you are following the English tutorial*/}
      </Route>
      {/* ignore this line*/}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
