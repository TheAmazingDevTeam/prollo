import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Board from './container/Board/Board';
import BoardOverview from './container/BoardOverview/BoardOverview';

class App extends Component {
  setActiveBoard = board => {
    this.setState({activeBoard: board});
  };

  render() {
    let boards = <p>Loading...</p>;

    if (this.state.boards) {
      boards = (
        <Layout boards={this.state.boards}>
          <Switch>
            <Route
              path="/board/:id"
              render={() => <Board board={this.state.activeBoard} />}
            />
            <Route
              path="/"
              render={() => (
                <BoardOverview
                  boards={this.state.boards}
                  onCreate={this.onCreate}
                  clicked={this.setActiveBoard}
                />
              )}
            />
          </Switch>
        </Layout>
      );
    }
    return boards;
  }
}

export default withRouter(App);
