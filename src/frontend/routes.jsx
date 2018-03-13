import React, { Fragment } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import App from './Containers/App';

const history = createBrowserHistory();

const Routes = () => (
    <Router history={history}>
        <Fragment>
            <Route exact path="/" component={App} />
        </Fragment>
    </Router>
);

export default Routes;