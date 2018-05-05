import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Board from './container/Board/Board';
import BoardOverview from './container/BoardOverview/BoardOverview';

/**
 * Root App component including routes
 */
const app = () => (
  /** Wrap the whole app with the Layout component */
  <Layout>
    {/** Wrap the routes with the Switch component so only one route is shown at the time */}
    <Switch>
      {/** If the user visits '/board/{someId}' -> show a single a board */}
      <Route path="/board/:boardId" component={Board} />
      {/** If the user visits '/' -> show all boards */}
      <Route path="/" component={BoardOverview} />
    </Switch>
  </Layout>
);

export default app;
