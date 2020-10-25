import React from "react";
import ReactDOM from "react-dom";
import CardMakerArabic from "./arabic/cardmaker arabic"; // Needed if you follow the Arabic tutorial
import CardMakerEnglish from "./english/cardmaker english"; // Needed if you are following the English tutorial
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route,Switch } from "react-router-dom"; //ignore that you don't need routing in the tutorial



ReactDOM.render(
  <React.StrictMode>
     <HashRouter basename={process.env.PUBLIC_URL}>
     <Route render = {({ location }) => (
      <Switch location = { location }>
      <Route path="/en">
        {/* ignore this line*/}
        <CardMakerEnglish />
        {/* you will need it if you are following the English tutorial*/}
      </Route>
      <Route path="/ar">
        {/* ignore this line*/}
        <CardMakerArabic />
        {/* you will need it if you are following the Arabic tutorial*/}
      </Route>
      {/* ignore this line*/}

      {/* ignore this line*/}
      </Switch>
       )} />

      </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
