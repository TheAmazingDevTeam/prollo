import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Board from './container/Board/Board';
import BoardOverview from './container/BoardOverview/BoardOverview';

const app = () => (
  <Layout boards={this.state.boards}>
    <Switch>
      <Route path="/board/:id" component={Board} />
      <Route path="/" component={BoardOverview} />
    </Switch>
  </Layout>
);

export default app;
