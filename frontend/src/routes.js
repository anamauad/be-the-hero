import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import SignUp from './pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}