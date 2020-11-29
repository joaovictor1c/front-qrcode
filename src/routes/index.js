import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Validator from 'pages/Validator';


export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/valid" component={Validator} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
  );
}
