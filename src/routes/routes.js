import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ListPage from "../pages/ListPage";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import CreateAccount from "../pages/CreateAccount";
import ReadingBooksPage from "../pages/ListPage/ReadingBooksPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/details" component={DetailsPage} />
      <Route path="/list" exact component={ListPage} />
      <Route path="/list/reading-books" component={ReadingBooksPage} />
      <Route path="/create-account" component={CreateAccount} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default Routes;
