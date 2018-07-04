import React from "react";
import { NavLink } from "react-router-dom";

const HeaderPage = () => (
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

export default HeaderPage;
