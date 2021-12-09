import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MemoriesHome from "./pages/MemoriesHome";
export default (
    <Switch>
        <Route exact path='/'component={LoginPage}/>
        <Route path='view-memories' component={MemoriesHome}></Route>
    </Switch>
)