import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Switch, BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const DashboardPage = () => <div>This is the dashoboard page</div>;

const AddExpensePage = () => <div>This is the AddExpensePage</div>;

const EditExpensePage = () => <div>This is the EditExpensePage</div>;

const Help = () => <div>This is the Help</div>;

const NotFound = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
