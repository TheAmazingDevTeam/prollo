import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Board from './container/Board/Board';
import BoardOverview from './container/BoardOverview/BoardOverview';

const app = () => (
  <Switch>
    <Route path="/board/:id" component={Board} />
    <Route path="/" component={BoardOverview} />
  </Switch>
);

export default app;
