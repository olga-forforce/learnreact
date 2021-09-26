import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//Pages
import Main from "./pages/Main";
import Hotels from "./pages/Hotels";



ReactDOM.render(
    <div>
        <Router>
            <div>
                <Link to="/main">Main</Link><br/>
                <Link to="/hotels">Hotels</Link>
                <Switch>
                    <Route path="/main">
                        <Main />
                    </Route>
                    <Route path="/hotels">
                        <Hotels />
                    </Route>

                </Switch>

            </div>
        </Router>
    </div>,
    document.getElementById('root')
);