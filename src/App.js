import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Board from './container/Board/Board';
import BoardOverview from './container/BoardOverview/BoardOverview';

class App extends Component {
  state = {
    boards: null,
    activeBoard: {}
  };

  async componentDidMount() {
    const response = await fetch('https://prollo-8a5a5.firebaseio.com/boards.json');
    const boards = await response.json();
    const updatedBoards = [];

    for (let key in boards) {
      updatedBoards.push({
        id: key,
        ...boards[key]
      });
    }

    this.setState({boards: updatedBoards});
  };

  onCreate = async title => {
    const oldBoards = [...this.state.boards];
    const response = await fetch('https://prollo-8a5a5.firebaseio.com/boards.json', {
      method: 'post',
      body: JSON.stringify({title})
    });

    const jsonResponse = await response.json();
    const board = {
      id: jsonResponse.name,
      title
    };

    const boards = [
      ...oldBoards,
      board
    ];

    this.setState({boards});
    this.props.history.push(`/board/${board.id}`);
  };

  setActiveBoard = board => {
    this.setState({activeBoard: board});
  };

  render() {
    let boards = <p>Loading...</p>;

    if (this.state.boards) {
      boards = (
        <Layout boards={this.state.boards}>
          <Switch>
            <Route path="/board/:id" render={() => <Board board={this.state.activeBoard} />} />
            <Route
              path="/"
              render={() => <BoardOverview boards={this.state.boards}
              onCreate={this.onCreate}
              clicked={this.setActiveBoard} />}
            />
          </Switch>
        </Layout>
      );
    }

    return boards;
  }
}

export default withRouter(App);
