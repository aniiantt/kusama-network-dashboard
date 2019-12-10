import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Balances from './balances/Balances';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/balances">
        <Balances />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
