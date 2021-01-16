import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import IndecisionApp from "./components/IndecisionApp";
import "../node_modules/normalize.css/normalize.css";
import "./styles/styles.scss";
/*
const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component.</div>
);

const AddExpensePage = () => (
  <div>TTTTTThis is from my add expense component.</div>
);

const EditExpensePage = () => (
  <div>This is the edit page for the expense page.</div>
);

const HelpPage = () => <div>This is the HELP page for the expense page.</div>;

const NotFoundPage = () => (
  <div>
    404! Page Not Found!! <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    {" "}
    <h1>Mj Nouri's Blog</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expenses
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
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

*/

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
