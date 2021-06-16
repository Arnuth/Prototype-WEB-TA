import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import PrivateRoute from './guard/auth';
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import ContractList from "./pages/ContractList";
import ContractCreate from "./pages/ContractCreate";
import ContractCreateCondition from "./pages/ContractCreateCondition";
import BlankPage from "./pages/BlankPage";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/home" component={HomePage} />
      <Route path="/contract/list" component={ContractList} />
      <Route path="/contract/create" component={ContractCreate} />
      <Route path="/contract/condition" component={ContractCreateCondition} />
      <Route path="/page/:id/title/:title" component={BlankPage} />
      <Route path="/login" component={Login} />
      <Route path="/forgotpassword" component={Forgotpassword} />

      {/* <PrivateRoute path="/member">
        <MemberPage />
      </PrivateRoute> */}

      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
