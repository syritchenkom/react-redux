import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Main, About, Settings, NotFound } from "../pages";
import {paths} from "../constants"
import { Navbar } from "../components";

export const Routing = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path={paths.main} exact>
                    <Main />
                </Route>
                <Route path={paths.about} exact>
                    <About />
                </Route>
                <Route path={paths.settings} exact>
                    <Settings />
                </Route>
                <NotFound />
            </Switch>
        </Router>
    )
}