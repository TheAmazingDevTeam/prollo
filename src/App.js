import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Board from './container/Board/Board';
import BoardOverview from './container/BoardOverview/BoardOverview';

const app = () => (
  <Layout>
    <Switch>
      <Route path="/board/:boardId" component={Board} />
      <Route path="/" component={BoardOverview} />
    </Switch>
  </Layout>
);

export default app;
