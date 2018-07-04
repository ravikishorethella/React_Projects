import React from "react";
import { Switch, BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Help from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import HeaderPage from "../components/HeaderPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <HeaderPage />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={Help} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
