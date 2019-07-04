import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import DevOps from './DevOps';
import NotFoundPage from './NotFoundPage';

const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={DevOps} exact={true} />
                <Route path="/register" component={RegisterForm} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>

        </div>
    </BrowserRouter>
)

export default AppRouter