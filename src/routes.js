import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ListUsers from "./pages/list-users/index";
import RegistrationForm from "./pages/registration-form/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListUsers} />
      <Route path="/registration" component={RegistrationForm} />
    </BrowserRouter>
  );
}
