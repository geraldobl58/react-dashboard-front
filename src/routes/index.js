import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LinearProgress } from '@material-ui/core';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const MultiStepsForms = lazy(() => import('../pages/MultiStepsForms'));
const Payments = lazy(() => import('../pages/Payments'));

const Routes = () => (
  <Router>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/payments-form" component={MultiStepsForms} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
