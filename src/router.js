import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MemoriesHome from "./pages/MemoriesHome";
import Selector from "./pages/SelectLocation";
import Sorter from "./pages/SortPhotos";

export default (
    <Switch>
        <Route exact path='/'component={LoginPage}/>
        <Route path='/view-memories' component={MemoriesHome}></Route>
        <Route path='/sorter' component={Sorter}></Route>
        <Route path='/select' component={Selector}></Route>
        <Route path='/on-tv'/>
    </Switch>
)